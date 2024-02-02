module Api
  class CategoriesController < ApplicationController
    # GET /api/categories
    def index
      categories = if params[:keyword].present?
                     Category.where("name LIKE :keyword OR description LIKE :keyword OR slug LIKE :keyword", keyword: "%#{params[:keyword]}%").page(params[:page]).per(3)
                   else
                     Category.all
                   end

      render json: categories, each_serializer: CategorySerializer
    rescue StandardError => e
      render_error(e)
    end

    # GET /api/categories/:id
    def show
      category = Category.find(params[:id])
      render json: category, serializer: CategorySerializer
    rescue ActiveRecord::RecordNotFound => e
      render_error(e, :not_found)
    end

    # POST /api/categories
    def create
      category = Category.new(category_params)
      if category.save
        render json: category, status: :created, serializer: CategorySerializer
      else
        render_error(category.errors.full_messages.to_sentence, :unprocessable_entity)
      end
    end

    # GET /api/categories/:id/subcategories
    def subcategories
      category = Category.find(params[:id])
      subcategories = category.subcategories
      render json: subcategories, each_serializer: CategorySerializer
    rescue ActiveRecord::RecordNotFound => e
      render_error(e, :not_found)
    end

    private

    def category_params
      params.require(:category).permit(:name, :slug, :icon, :description, :parent_id, :background_color, :text_color)
    end

    def render_error(message, status = :unprocessable_entity)
      render json: { error: message }, status: status
    end
  end
end
