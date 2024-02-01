# db/seeds.rb

# Array of category names and their corresponding slugs
categories = [
  { name: 'Software Development', slug: 'software-development', description: 'Learn to code and tools to help you code more productively.', total_sales: 0, total_creators: 0, total_products: 0, background_color: '#DC341E', text_color: '#000000' },
  { name: '3D', slug: '3d', description: 'Perfect your craft with the same tools used at Dreamworks and Pixar.', total_sales: 18000000, total_creators: 14000, total_products: 790000, background_color: '#000000', text_color: '#FFFFFF'},
  { name: 'Design', slug: 'design', description: 'Code, design, and ship your dream product with these technical resources.', total_sales: 26000000, total_creators: 21000, total_products: 870000, background_color: '#FFC900', text_color: '#000000'},
  { name: 'Drawing & Painting', slug: 'drawing-painting', description: 'Tutorials, plugins, and brushes from pro concept artists and illustrators.', total_sales: 24000000, total_creators: 17000, total_products: 1070000, background_color: '#FFC900', text_color: '#000000'},
  { name: 'Self Improvement', slug: 'self-improvement', description: 'Move your body and your audience with guides, videos, and more.', total_sales: 26000000, total_creators: 21000, total_products: 870000, background_color: '#FFC900', text_color: '#000000'},
  { name: 'Fitness & Health', slug: 'fitness-health', description: 'Whether you’re looking to shed or shred, here are coaches to pump you up.', total_sales: 26000000, total_creators: 21000, total_products: 870000, background_color: '#FFC900', text_color: '#000000'},
  { name: 'Music & Sound Design', slug: 'music-sound-design', description: 'Tracks, beats, and loops from the best musicians and engineers in the biz.', total_sales: 26000000, total_creators: 21000, total_products: 870000, background_color: '#FFC900', text_color: '#000000'},
  { name: 'Photography', slug: 'photography', description: 'Get snapping with pro presets, stock imagery, and digi darkroom needs.', total_sales: 26000000, total_creators: 21000, total_products: 870000, background_color: '#FFC900', text_color: '#000000'},
  { name: 'Writing & Publishing', slug: 'writing-publishing', description: 'Fill your brain with words and wisdom from creative authors and storytellers.', total_sales: 26000000, total_creators: 21000, total_products: 870000, background_color: '#FFC900', text_color: '#000000'},
  { name: 'Business & Money', slug: 'business-money', description: 'Learn to earn in an increasingly unpredictable world.', total_sales: 26000000, total_creators: 21000, total_products: 870000, background_color: '#FFC900', text_color: '#000000'},
  { name: 'Education', slug: 'education', description: 'Pick up a new skill with courses and guides from world-class pros.', total_sales: 26000000, total_creators: 21000, total_products: 870000, background_color: '#FFC900', text_color: '#000000'},
  { name: 'Comics & Graphic Novels', slug: 'comic-graphics', description: 'Sequential art with loads of heart. Welcome to a paradise of panels.', total_sales: 26000000, total_creators: 21000, total_products: 870000, background_color: '#FFC900', text_color: '#000000'},
  { name: 'Fiction Books', slug: 'fiction-books', description: 'Short stories, novellas, and epic tomes full of interesting characters and worlds.', total_sales: 26000000, total_creators: 21000, total_products: 870000, background_color: '#FFC900', text_color: '#000000'},
  { name: 'Audio', slug: 'audio', description: 'Open your ears and mind to interviews, meditations, and true crime thrillers.', total_sales: 26000000, total_creators: 21000, total_products: 870000, background_color: '#FFC900', text_color: '#000000'},
  { name: 'Recorded Music', slug: 'recorded-music', description: 'Tracks and albums from the best musicians and artists in the biz.', total_sales: 26000000, total_creators: 21000, total_products: 870000, background_color: '#FFC900', text_color: '#000000'},
  { name: 'Films', slug: 'films', description: 'Have a movie night with some of the best stories to hit the small screen.', total_sales: 26000000, total_creators: 21000, total_products: 870000, background_color: '#FFC900', text_color: '#000000'},
  { name: 'Gaming', slug: 'gaming', description: 'Explore new worlds from the world’s most creative indie developers.', total_sales: 26000000, total_creators: 21000, total_products: 870000, background_color: '#FFC900', text_color: '#000000'},
  { name: 'Others', slug: 'others', description: '', total_sales: 26000000, total_creators: 21000, total_products: 870000, background_color: '#FFC900', text_color: '#000000'},
]

# Create or update categories in the database
categories.each do |category_data|
  category = Category.find_or_initialize_by(slug: category_data[:slug])
  category.name = category_data[:name]
  category.name = category_data[:name]
  category.icon = "categories/#{category_data[:slug]}.svg"
  category.description = category_data[:description]
  category.total_sales = category_data[:total_sales]
  category.total_creators = category_data[:total_creators]
  category.total_products = category_data[:total_products]
  category.save
end

puts "Categories seeded!"

# Helper function to generate a random price
def random_price
  rand(0..100.0).round(2)
end

# Helper function to generate a random ratings count
def random_ratings_count
  rand(1..500)
end

# Helper function to generate a random ratings average
def random_ratings_average
  rand(3.0..5.0).round(1)
end

# Helper function to generate a random currency code
def random_currency_code
  ["USD", "EUR", "GBP", "INR", "CAD"].sample
end

100.times do
  permalink = Faker::Internet.slug
  Product.find_or_create_by(permalink: permalink) do |product|
    product.name = Faker::Commerce.product_name
    product.creator_name = Faker::Name.name
    product.creator_profile_url = Faker::Internet.url
    product.ratings_count = random_ratings_count
    product.ratings_average = random_ratings_average
    product.price = random_price
    product.currency_code = random_currency_code
    product.thumbnail_url = "https://public-files.gumroad.com/ba6pmzf1c8hgtfbicpnpqq7siyb6"
    product.is_pay_what_you_want = [true, false].sample
    product.main_cover_id = SecureRandom.hex(10)
    product.category = Category.all.sample
  end
end

puts "100 products seeded."
