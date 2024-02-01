Rails.application.routes.draw do
  namespace :api do
    resources :products, only: [:index, :show, :create] do
      collection do
        get 'recommended'
        get 'staff_picks'
        get 'category/:slug_or_id', to: 'products#products_in_category'
      end
    end

    resources :categories, only: [:index, :show, :create] do
      member do
        get 'subcategories'
      end
    end
  end

  get '*path', to: "static_pages#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end
end
