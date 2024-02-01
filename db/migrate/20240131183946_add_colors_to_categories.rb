class AddColorsToCategories < ActiveRecord::Migration[7.1]
  def change
    add_column :categories, :background_color, :string, default: '#000000'
    add_column :categories, :text_color, :string, default: '#FFFFFF'
  end
end
