class Product < ApplicationRecord
  belongs_to :category

  scope :recommended, -> (category_slug) {
    # Example: Products that are most popular or have high ratings
    # If a category is provided, filter by category
    category = Category.find_by(slug: category_slug)
    category ? where(category: category) : all
  }

  scope :staff_picks, -> (category_id) {
    # If a category is provided, filter by category
    where(category_id: category_id)
      .order('created_at DESC') # Example: prioritize newer products
  }
end
