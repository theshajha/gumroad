class ProductsController < ApplicationController
  before_action :set_product, only: [:show]

  # GET /products
  def index
    @products = Product.all
    # Implement pagination and more complex querying logic as needed
  end

  # GET /products/:id
  def show
    # @product is set by set_product before_action
  end

  # More actions (create, update, destroy) can be added here as per requirements

  private

  # Use callbacks to share common setup or constraints between actions
  def set_product
    @product = Product.find(params[:id])
  rescue ActiveRecord::RecordNotFound
    record_not_found
  end

  # Only allow a list of trusted parameters through
  # def product_params
  #   params.require(:product).permit(:title, :description, :price, :category_id)
  # end
end