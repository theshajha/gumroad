import React, { FC, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import CloseIcon from '../../../assets/icons/close-circle-white.svg'
import ListingCard from '../../atom/ListingCard'
import UseApiCall from '../../../hooks/useApiCall'
import { apiGetCategories, apiGetProducts } from '../../../services/services'
import {
    ProductTypes,
    categoryListTypes,
} from '../../../recoil/apiRecoilState.types'
import CategoryCard from '../../atom/CategoryCard'
import Loader from '../../atom/Loader'
import { useDebounce } from '../../../hooks/useDebouncer'

interface SearchComponentPropTypes {
    isOpen: boolean
    onClose: CallableFunction
    searchInput: string
}

const SearchComponent: FC<SearchComponentPropTypes> = ({
                                                           isOpen,
                                                           onClose,
                                                           searchInput,
                                                       }) => {
    const [categoryList, setCategoryList] = useState<
        categoryListTypes[] | null
    >([])
    const [productList, setProductList] = useState<ProductTypes[] | null>([])
    const overlayVariants = {
        hidden: { opacity: 0, y: '100%' },
        visible: { opacity: 1, y: 0 },
    }
    const [getCategoryList, loadingCategory] = UseApiCall(
        apiGetCategories,
        (data) => {
            setCategoryList(data)
        }
    )
    const [getProductList, loadingProduct] = UseApiCall(
        apiGetProducts,
        (data) => {
            setProductList(data)
        }
    )
    const isDataLoading = loadingCategory || loadingProduct

    const handleSearch = useDebounce(() => {
        getCategoryList({ keyword: searchInput })
        getProductList({ keyword: searchInput, per_page: 5 })
    }, 500)

    useEffect(() => {
        const handleKeyPress = (event: any) => {
            if (event.key === 'Escape') {
                onClose()
            }
        }
        document.addEventListener('keydown', handleKeyPress)
        return () => {
            document.removeEventListener('keydown', handleKeyPress)
        }
    }, [])

    useEffect(() => {
        if (searchInput) handleSearch()
    }, [searchInput])

    return (
        <motion.div
            className={`fixed top-[115px] left-0 w-full h-full max-h-[calc(100vh-115px)] bg-[#242423] bg-opacity-100 flex flex-col items-center justify-center z-50 ${
                isOpen ? 'visible' : 'hidden'
            }`}
            variants={overlayVariants}
            initial="hidden"
            animate={isOpen ? 'visible' : 'hidden'}
        >
            <div className="w-full h-full overflow-auto ">
                <img
                    src={CloseIcon}
                    alt="x"
                    className="absolute top-4 right-8 cursor-pointer text-white"
                    onClick={() => onClose()}
                />
                {isDataLoading ? (
                    <div className="w-full h-[calc(100vh-195px)]">
                        <div className="w-full h-full flex items-center justify-center self-center">
                            <Loader />
                        </div>
                    </div>
                ) : (
                    <div className="flex justify-between  items-start self-stretch pl-[3.75rem] pr-[3.75rem] p-0">
                        <div className="flex flex-col items-start">
                            {categoryList && categoryList?.length > 0 && (
                                <div className="flex flex-col justify-center items-start gap-6 self-stretch py-6 px-2">
                                    <div className="text-white font-[mabry pro] text-2xl leading-[normal]">
                                        Categories
                                    </div>
                                    <div className="flex flex-wrap items-start gap-6 self-stretch overflow-auto">
                                        {categoryList?.map((category) => (
                                            <CategoryCard category={category} />
                                        ))}
                                    </div>
                                </div>
                            )}
                            {productList && productList?.length > 0 && (
                                <div className="flex flex-col justify-center items-start gap-6 py-6 px-2">
                                    <div className="text-white font-[mabry pro] text-2xl leading-[normal]">
                                        Products
                                    </div>
                                    <div className="flex flex-wrap items-start gap-6">
                                        {productList?.map((product) => (
                                            <ListingCard product={product} />
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </motion.div>
    )
}

export default SearchComponent