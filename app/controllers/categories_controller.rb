class CategoriesController < ApplicationController
  before_action :set_category, only: [:show]

  # GET /categories
  def index
    @categories = Category.all
    # Implement additional logic as required, such as ordering or nesting
  end

  # GET /categories/:id
  def show
    # @category is set by set_category before_action
    @products = @category.products
    # Further refine this query to include pagination, ordering, etc.
  end

  # More actions can be added here as per requirements

  private

  # Use callbacks to share common setup or constraints between actions
  def set_category
    @category = Category.find(params[:id])
  rescue ActiveRecord::RecordNotFound
    record_not_found
  end

  # Only allow a list of trusted parameters through
  # def category_params
  #   params.require(:category).permit(:name, :description, :parent_category_id)
  # end
end