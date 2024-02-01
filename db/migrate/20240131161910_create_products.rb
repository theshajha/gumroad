class CreateProducts < ActiveRecord::Migration[7.1]
  def change
    create_table :products do |t|
      t.string :name
      t.string :permalink
      t.string :creator_name
      t.string :creator_profile_url
      t.integer :ratings_count
      t.decimal :ratings_average, precision: 10, scale: 2
      t.string :price
      t.string :currency_code
      t.string :thumbnail_url
      t.boolean :is_pay_what_you_want
      t.string :main_cover_id
      t.references :category, null: false, foreign_key: true

      t.timestamps
    end
  end
end
