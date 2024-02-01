module Api
  class ProductsController < ApplicationController
    # GET /api/products
    def index
      products = filter_products(Product.all)
      paginated_products = products.page(params[:page]).per(params[:per_page] || 10)
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
      products = Product.recommended(params[:category]) # Implement this scope in your model
      paginated_products = products.page(params[:page]).per(params[:per_page] || 10)
      render json: paginated_products, each_serializer: ProductSerializer
    end

    # GET /api/products/staff_picks
    def staff_picks
      products = Product.staff_picks(params[:category]) # Implement this scope in your model
      paginated_products = products.page(params[:page]).per(params[:per_page] || 10)
      render json: paginated_products, each_serializer: ProductSerializer
    end

    def products_in_category
      category = Category.find_by(slug: params[:slug]) || Category.find(params[:id])
      products = category.present? ? category.products : Product.none
      paginated_products = products.page(params[:page]).per(params[:per_page] || 10)
      render json: paginated_products, each_serializer: ProductSerializer
    rescue ActiveRecord::RecordNotFound => e
      render_error(e, :not_found)
    end

    private

    def filter_products(scope)
      scope = scope.where('name LIKE ? OR creator_name LIKE ? OR categories.name LIKE ? OR categories.slug LIKE ?',
                          "%#{params[:keyword]}%", "%#{params[:keyword]}%", "%#{params[:keyword]}%", "%#{params[:keyword]}%") if params[:keyword].present?
      scope.joins(:category)
    end

    def render_error(exception, status = :unprocessable_entity)
      render json: { error: exception.message }, status: status
    end
  end
end
