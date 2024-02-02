import React, { useEffect, useState } from 'react'
import Header from '../../components/atom/Header'
import SideNav from '../../components/atom/SideNav'
import NavOptions from '../../constants/NavOptions'
import ListingSection from '../../components/organism/ListingSection'
import UseApiCall from '../../hooks/useApiCall'
import { apiGetCategories } from '../../services/services'
import { useRecoilState } from 'recoil'
import { categoryRecoilState } from '../../recoil/apiRecoilState'
import { useParams, useSearchParams } from 'react-router-dom'

export interface SelectedOptionType {
    id: number
    slug: string
}

const HomePage: React.FC = () => {
    const [searchParams] = useSearchParams()
    const cat = searchParams.get('cat')
    const [categoryList, setCategoryList] = useRecoilState(categoryRecoilState)
    const [selectedOption, setSelectedOption] =
        useState<SelectedOptionType | null>(null)
    const [getCategoryList, loadingCategory] = UseApiCall(
        apiGetCategories,
        (data) => {
            setCategoryList(data)
        }
    )
    useEffect(() => {
        getCategoryList()
    }, [])
    useEffect(() => {
        if (!cat) {
            setSelectedOption({ id: 0, slug: '' })
        }
        if (cat && categoryList?.length > 0) {
            const matchingCategory = categoryList.find(
                (category) => category.slug === cat
            )
            if (matchingCategory) {
                setSelectedOption({
                    id: matchingCategory.id || 0,
                    slug: matchingCategory.slug || '',
                })
            } else {
                setSelectedOption({ id: 0, slug: '' })
            }
        }
    }, [cat, categoryList])

    return (
        <div className="App bg-[#242423] min-h-screen relative">
            <Header />
            <div className="grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                <SideNav
                    selectedOption={selectedOption}
                    setSelectedOption={setSelectedOption}
                    loadingCategory={loadingCategory}
                />
                <div className="bg-[#242423] flex-1 h-[calc(100vh-115px)] p-2 sm:p-4 col-span-3 sm:col-span-2 lg:col-span-3 xl:col-span-4 shadow-md overflow-auto">
                    <ListingSection selectedOption={selectedOption} />
                </div>
            </div>
        </div>
    )
}

export default HomePage