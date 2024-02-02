module Api
  class ProductsController < ApplicationController
    # GET /api/products
    def index
      products = Rails.cache.fetch("products", expires_in: 1.hour) do
        filter_products(Product.all).to_a
      end
      paginated_products = Kaminari.paginate_array(products).page(params[:page]).per(params[:per_page] || 4)
      render json: paginated_products, each_serializer: ProductSerializer
    rescue StandardError => e
      render_error(e)
    end

    # GET /api/products/:id
    def show
      product = Product.find(params[:id])
      render json: product, serializer: ProductSerializer
    rescue ActiveRecord::RecordNotFound => e
      render_error(e, :not_found)
    end

    # GET /api/products/recommended
    def recommended
      products = Product.includes(:category)
      products = products.where(category_id: params[:category_id]) if params[:category_id].present?
      recommended_products = products.order('ratings_average DESC, ratings_count DESC')
      paginated_products = Kaminari.paginate_array(recommended_products).page(params[:page]).per(params[:per_page] || 4)
      render json: paginated_products, each_serializer: ProductSerializer
    rescue StandardError => e
      render json: { error: e.message }, status: :internal_server_error
    end

    # GET /api/products/staff_picks
    def staff_picks
      products = Rails.cache.fetch("products", expires_in: 1.hour) do
          filter_products(Product.all).to_a
        end
        paginated_products = Kaminari.paginate_array(products).page(params[:page]).per(params[:per_page] || 4)
        render json: paginated_products, each_serializer: ProductSerializer
      rescue StandardError => e
        render_error(e)
    end

    def products_in_category
      category = Category.find_by(slug: params[:slug]) || Category.find(params[:id])
      products = category.present? ? category.products : Product.none
      paginated_products = Kaminari.paginate_array(products).page(params[:page]).per(params[:per_page] || 4)
      render json: paginated_products, each_serializer: ProductSerializer
    rescue ActiveRecord::RecordNotFound => e
      render_error(e, :not_found)
    end

    private

    def filter_products(scope)
      scope = scope.where("name LIKE :keyword OR creator_name LIKE :keyword OR categories.name LIKE :keyword OR categories.description LIKE :keyword", keyword: "%#{params[:keyword]}%") if params[:keyword].present?
      scope = scope.where(category_id: params[:category_id]) if params[:category_id].present?
      scope
    end

    def render_error(exception, status = :unprocessable_entity)
      render json: { error: exception.message }, status: status
    end
  end
end
