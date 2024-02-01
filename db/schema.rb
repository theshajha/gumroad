# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.1].define(version: 2024_01_31_183946) do
  create_table "categories", force: :cascade do |t|
    t.string "name"
    t.string "slug"
    t.string "icon"
    t.text "description"
    t.integer "total_creators", default: 0
    t.decimal "total_sales", precision: 10, scale: 2, default: "0.0"
    t.integer "total_products", default: 0
    t.integer "parent_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "background_color", default: "#000000"
    t.string "text_color", default: "#FFFFFF"
    t.index ["parent_id"], name: "index_categories_on_parent_id"
  end

  create_table "products", force: :cascade do |t|
    t.string "name"
    t.string "permalink"
    t.string "creator_name"
    t.string "creator_profile_url"
    t.integer "ratings_count"
    t.decimal "ratings_average", precision: 10, scale: 2
    t.string "price"
    t.string "currency_code"
    t.string "thumbnail_url"
    t.boolean "is_pay_what_you_want"
    t.string "main_cover_id"
    t.integer "category_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["category_id"], name: "index_products_on_category_id"
  end

  add_foreign_key "categories", "categories", column: "parent_id"
  add_foreign_key "products", "categories"
end
