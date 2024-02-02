# db/seeds.rb

# Array of category names and their corresponding slugs
categories = [
  { name: 'Software Development', slug: 'software-development', description: 'Learn to code and tools to help you code more productively.', icon: "https://assets.gumroad.com/packs/static/8915495939281be47257.svg", total_sales: 0, total_creators: 0, total_products: 0, background_color: '#DC341E', text_color: '#000000' },
  { name: '3D', slug: '3d', description: 'Perfect your craft with the same tools used at Dreamworks and Pixar.', icon: "https://assets.gumroad.com/packs/static/8915495939281be47257.svg", total_sales: 18000000, total_creators: 14000, total_products: 790000, background_color: '#000000', text_color: '#FFFFFF'},
  { name: 'Design', slug: 'design', description: 'Code, design, and ship your dream product with these technical resources.', icon: "https://assets.gumroad.com/packs/static/8915495939281be47257.svg", total_sales: 26000000, total_creators: 21000, total_products: 870000, background_color: '#FFC900', text_color: '#000000'},
  { name: 'Drawing & Painting', slug: 'drawing-painting', description: 'Tutorials, plugins, and brushes from pro concept artists and illustrators.', icon: "https://assets.gumroad.com/packs/static/8915495939281be47257.svg", total_sales: 24000000, total_creators: 17000, total_products: 1070000, background_color: '#FFC900', text_color: '#000000'},
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

begin
  # Create or update categories in the database
  categories.each do |category_data|
    category = Category.find_or_initialize_by(slug: category_data[:slug])
    category.name = category_data[:name]
    category.slug = category_data[:slug]
    category.icon = "images/categories/#{category_data[:slug]}.svg"
    category.description = category_data[:description]
    category.total_sales = category_data[:total_sales]
    category.total_creators = category_data[:total_creators]
    category.total_products = category_data[:total_products]
    category.save
  end

  puts "Categories seeded!"

rescue StandardError => e
  # Logs an error message
  Rails.logger.error "An error occurred: #{e.message}"
  # You can also include the backtrace for debugging purposes
  Rails.logger.error e.backtrace.join("\n")
end

begin
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

  def random_thumbnail_url
    [
      "https://public-files.gumroad.com/963xwepdb5coer6j85gbh72ha95k",
      "https://public-files.gumroad.com/ba6pmzf1c8hgtfbicpnpqq7siyb6",
      "https://public-files.gumroad.com/oqa4a6j49hvji1u36o6ffrjko3c9",
      "https://public-files.gumroad.com/rkrthfm23gtkchev5by1qdnpwpzn",
      "https://public-files.gumroad.com/wqrn5fsyhub5gtf4jn7dtpb0ue5x",
      "https://public-files.gumroad.com/a8lpu51m4nuw1togrlhewehieivz",
      "https://public-files.gumroad.com/2h1uhtvsdziib16l29elst8cd790",
      "https://public-files.gumroad.com/iwh3eo5wtkrv5fvegnvsz9d1hox9",
      "https://public-files.gumroad.com/94yorseb4nd15kur222r4usrffkc",
      "https://public-files.gumroad.com/0y91wjkiapqki5jg5m3f5vnsy0df",
      "https://public-files.gumroad.com/v0c7me832vc8eij7ik4zj32r145o",
      "https://public-files.gumroad.com/85oud93381dt4ubu0p20ir7xv98s",
      "https://public-files.gumroad.com/ljxyc8zwc1pdea1qs0jprai0yyem",
      "https://public-files.gumroad.com/pmi7inh2hd1wvlxl857oslz0g8f1",
      "https://public-files.gumroad.com/t4s371iiiit90xll5p1dtt2fjl0j"
    ].sample
  end

  def random_profile_avatar_url
    [
      "https://public-files.gumroad.com/vqk0vskmohm0pt0oe5ukovgbaukp",
      "https://public-files.gumroad.com/qumpoc12evn16650dzv332zin3ft",
      "https://public-files.gumroad.com/0o7wz9ubk7yifok95rn0gf9uyn2r",
      "https://public-files.gumroad.com/v3koueayjmx1zfnu8jhx772mi9zg",
      "https://public-files.gumroad.com/crqdiyos905qaro8h6kpam0ocf4w"
    ].sample
  end

  # Define the number of products you wish to check or create
  num_products_to_check = 100

  # Check if there are existing products
  existing_products_count = Product.count

  if existing_products_count < num_products_to_check
    # Calculate the number of products to create
    num_products_to_create = num_products_to_check - existing_products_count

    num_products_to_create.times do
      permalink = Faker::Internet.unique.slug
      product = Product.find_or_initialize_by(permalink: permalink)

      # Set new attributes whether it's a new record or found existing one
      product.assign_attributes(
        name: Faker::Commerce.product_name,
        creator_name: Faker::Name.name,
        creator_profile_url: random_profile_avatar_url,
        ratings_count: random_ratings_count,
        ratings_average: random_ratings_average,
        price: random_price,
        currency_code: random_currency_code,
        thumbnail_url: random_thumbnail_url,
        is_pay_what_you_want: [true, false].sample,
        main_cover_id: SecureRandom.hex(10),
        category: Category.all.sample
      )

      # Save the product if it's new or has been modified
      product.save if product.new_record? || product.changed?
    end
  else
    # If enough products already exist, you can choose to update them with new values
    Product.all.each do |product|
      # Assign new attributes
      begin
        product.assign_attributes(
          creator_profile_url: random_profile_avatar_url,
          thumbnail_url: random_thumbnail_url
        )
        # Save the product if it has been modified
        product.save if product.changed?

      rescue StandardError => e
        # Logs an error message
        puts "An error occurred: #{e.message}"
        Rails.logger.error "An error occurred: #{e.message}"
        # You can also include the backtrace for debugging purposes
        Rails.logger.error e.backtrace.join("\n")
      end
    end
  end

  puts "#{num_products_to_create} products created." if num_products_to_create.positive?
rescue StandardError => e
  # Logs an error message
  Rails.logger.error "An error occurred: #{e.message}"
  # You can also include the backtrace for debugging purposes
  Rails.logger.error e.backtrace.join("\n")
end