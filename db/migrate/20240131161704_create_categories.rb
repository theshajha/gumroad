class CreateCategories < ActiveRecord::Migration[7.1]
  def change
    create_table :categories do |t|
      t.string :name
      t.string :slug
      t.string :icon
      t.text :description
      t.integer :total_creators, default: 0
      t.decimal :total_sales, precision: 10, scale: 2, default: 0.0
      t.integer :total_products, default: 0
      t.references :parent, foreign_key: { to_table: :categories }, index: true

      t.timestamps
    end
  end
end
