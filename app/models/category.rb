class Category < ApplicationRecord
  # Relationships
  has_many :subcategories, class_name: "Category", foreign_key: "parent_id", dependent: :destroy
  belongs_to :parent, class_name: "Category", optional: true
  has_many :products, dependent: :destroy

  # Validations
  validates :name, presence: true
  validates :slug, presence: true, uniqueness: true
  validates :background_color, presence: true
  validates :text_color, presence: true

  # Set default values
  after_initialize :set_defaults, unless: :persisted?

  private

  def set_defaults
    self.background_color ||= '#000000'
    self.text_color ||= '#FFFFFF'
  end
end
