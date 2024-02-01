class Product < ApplicationRecord
  belongs_to :category

  scope :recommended, -> (category_slug) {
    # Example: Products that are most popular or have high ratings
    # If a category is provided, filter by category
    category = Category.find_by(slug: category_slug)
    category ? where(category: category) : all
  }

  scope :staff_picks, -> (category_slug) {
    # Select products marked as staff picks
    # Filter by category if provided
    query = where(staff_pick: true)
    category = Category.find_by(slug: category_slug)
    category ? query.where(category: category) : query
  }
end
