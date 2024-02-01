class CategorySerializer < ActiveModel::Serializer
  attributes :id, :name, :slug, :description, :total_creators, :total_sales, :total_products, :background_color, :text_color, :icon

  # Conditionally include subcategories if they exist
  has_many :subcategories, serializer: CategorySerializer, if: -> { object.subcategories.any? }

  def name
    CGI.unescapeHTML(object.name)
  end

  # Custom method for complex attributes, like a full icon URL
  attribute :full_icon_url do
    # Assuming you have a method to get the full URL of an icon
    object.icon
  end

  # Include metadata, like counts, if necessary
  attribute :products_count do
    object.products.count
  end

  attribute :total_creators do
    humanized_number(object.total_creators)
  end

  attribute :total_sales do
    humanized_number(object.total_sales, true)
  end

  attribute :total_products do
    humanized_number(object.total_products)
  end

  private

  def humanized_number(number, is_currency = false)
    return number if number < 1000

    units = ['', 'K', 'M', 'B', 'T']
    exp = (Math.log(number) / Math.log(1000)).to_i
    value = number.to_f / 1000**exp

    value = is_currency ? '%.2f' % value : value.round
    "#{value}#{units[exp]}"
  end

  # Implement caching for performance optimization
  cache key: 'category', expires_in: 12.hours

  # Other customizations as needed
end
