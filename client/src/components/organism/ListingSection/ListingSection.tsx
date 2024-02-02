import React, { useEffect, useState } from 'react'
import ListingCard from '../../atom/ListingCard'
import {
    apiGetProducts,
    apiGetRecommendedProducts,
    apiGetStaffPickProducts,
} from '../../../services/services'
import UseApiCall from '../../../hooks/useApiCall'
import { useRecoilState, useRecoilValue } from 'recoil'
import {
    categoryMappedProductState,
    categoryRecoilState,
} from '../../../recoil/apiRecoilState'
import { SelectedOptionType } from '../../../Pages/HomePage/HomePage'
import ShimmerCard from '../../atom/Shimmer/Shimmer'
import Loader from '../../atom/Loader'
import CategoryCard from '../../atom/CategoryCard'

interface ListingSectionpropTypes {
    selectedOption: SelectedOptionType | null
}

const ListingSection = (props: ListingSectionpropTypes) => {
    const { selectedOption } = props
    const [categoryMappedProductList, setCategoryMappedProductList] =
        useRecoilState(categoryMappedProductState)
    const categoryList = useRecoilValue(categoryRecoilState)
    const [firstLoad, setFirstLoad] = useState(false)
    const [getProductList, loadingProduct] = UseApiCall(
        apiGetProducts,
        (data) => {
            setCategoryMappedProductList((pre) => {
                return {
                    ...pre,
                    [selectedOption?.id as number]: {
                        ...pre[selectedOption?.id as number],
                        products: data,
                    },
                }
            })
        }
    )
    const [getRecommendedProductList, loadingRecommendedProduct] = UseApiCall(
        apiGetRecommendedProducts,
        (data) => {
            setCategoryMappedProductList((pre) => {
                return {
                    ...pre,
                    [selectedOption?.id as number]: {
                        ...pre[selectedOption?.id as number],
                        recommendedProducts: data,
                    },
                }
            })
        }
    )
    const [getStaffPickedProductList, loadingStaffPickedProduct] = UseApiCall(
        apiGetStaffPickProducts,
        (data) => {
            setCategoryMappedProductList((pre) => {
                return {
                    ...pre,
                    [selectedOption?.id as number]: {
                        ...pre[selectedOption?.id as number],
                        staffPickedProducts: data,
                    },
                }
            })
        }
    )
    const { products, recommendedProducts, staffPickedProducts } =
    categoryMappedProductList[selectedOption?.id || 0] || {}
    useEffect(() => {
        if (selectedOption?.id !== undefined && selectedOption?.id !== null) {
            setFirstLoad(true)
            if (!products || products?.length === 0)
                getProductList({
                    ...(selectedOption?.id > 0 && {
                        category_id: selectedOption?.id,
                    }),
                })
            if (!recommendedProducts || recommendedProducts?.length === 0)
                getRecommendedProductList({
                    ...(selectedOption?.id > 0 && {
                        category_id: selectedOption?.id,
                    }),
                })
            if (!staffPickedProducts || staffPickedProducts?.length === 0)
                getStaffPickedProductList({
                    ...(selectedOption?.id > 0 && {
                        category_id: selectedOption?.id,
                    }),
                })
        }
    }, [selectedOption])

    const isProductLoading = [
        loadingProduct,
        loadingRecommendedProduct,
        loadingStaffPickedProduct,
    ].some((loading) => loading)

    return (
        <div className="flex w-full flex-col justify-center relative items-start gap-6 py-6 px-2">
            {isProductLoading ? (
                <div className="w-full h-[calc(100vh-195px)]">
                    <div className="w-full h-full flex items-center justify-center self-center">
                        <Loader />
                    </div>
                </div>
            ) : (
                <div className="flex flex-col justify-center items-start gap-6">
                    {recommendedProducts?.length > 0 && (
                        <>
                            <div className="text-white font-[mabry Pro] text-2xl leading-[normal]">
                                Recommended for you
                            </div>
                            <div className="flex flex-1 flex-wrap items-start gap-6">
                                {recommendedProducts?.map((product) => (
                                    <div key={product.id} className="flex-1">
                                        <ListingCard product={product} />
                                    </div>
                                ))}
                            </div>
                        </>
                    )}
                    {staffPickedProducts?.length > 0 && (
                        <>
                            <div className="text-white font-[mabry Pro] text-2xl leading-[normal]">
                                Staff picked (curated every week)
                            </div>
                            <div className="flex w-full  flex-wrap items-start gap-6">
                                {staffPickedProducts?.map((product) => (
                                    <div key={product.id} className="flex-1">
                                        <ListingCard product={product} />
                                    </div>
                                ))}
                            </div>
                        </>
                    )}
                    {products?.length > 0 && (
                        <>
                            <div className="text-white font-[mabry Pro] text-2xl leading-[normal]">
                                Most sold this week
                            </div>
                            <div className="flex w-full flex-wrap items-start gap-6 ">
                                {products?.map((product) => (
                                    <div key={product.id} className="flex-1">
                                        <ListingCard product={product} />
                                    </div>
                                ))}
                            </div>
                        </>
                    )}
                    {firstLoad && categoryList?.length > 0 && (
                        <div className="flex flex-col justify-center items-start gap-6 py-6 ">
                            <div className="text-white font-[mabry Pro] text-2xl leading-[normal]">
                                Product by category
                            </div>
                            <div className="items-start gap-6 w-full grid grid-cols-1 lg:grid-cols-2">
                                {categoryList?.map((category) => (
                                    <div
                                        key={category.id}
                                        className="flex-shrink-0 flex-1"
                                    >
                                        <CategoryCard category={category} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}

export default ListingSection