export type categoryListTypes = {
    background_color: string
    description: string
    full_icon_url: string
    icon: string
    id: number
    name: string
    products_count: number
    slug: string
    text_color: string
    total_creators: number
    total_products: number
    total_sales: string
}
export type categoryMappedProductListTypes = {
    [id: number]: {
        products: ProductTypes[]
        recommendedProducts: ProductTypes[]
        staffPickedProducts: ProductTypes[]
    }
}

export type ProductTypes = {
    category_id: number
    creator_name: string
    creator_profile_url: string
    currency_code: string
    formatted_price: string
    id: number
    is_pay_what_you_want: boolean
    name: string
    permalink: string
    price: string
    ratings_average: string
    ratings_count: number
    thumbnail_url: string
}

