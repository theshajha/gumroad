class ProductSerializer < ActiveModel::Serializer
  attributes :id, :name, :permalink, :price, :thumbnail_url, :creator_name,
             :creator_profile_url, :ratings_count, :ratings_average,
             :currency_code, :is_pay_what_you_want, :category_id

  # Optionally include associated objects
  belongs_to :category, if: -> { instance_options[:include_category] }

  # Custom methods for complex attributes
  attribute :formatted_price do
    "#{object.currency_code} #{'%.2f' % object.price}"
  end

  # You can also define methods to conditionally include attributes
  def include_ratings_average?
    object.ratings_count > 0
  end

  # caching for performance
  cache key: 'product', expires_in: 12.hours

  # Other customization as required
end
