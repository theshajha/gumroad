import React, { useState } from 'react'
import clsx from 'clsx'
import { useNavigate } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { categoryRecoilState } from '../../../recoil/apiRecoilState'
import { categoryListTypes } from '../../../recoil/apiRecoilState.types'
import { SelectedOptionType } from '../../../Pages/HomePage/HomePage'

const dummyArray = Array.from({ length: 15 }, (_, index) => index)

const SideNav = (props: {
    selectedOption: SelectedOptionType | null
    setSelectedOption: CallableFunction
    loadingCategory: boolean
}) => {
    const navigate = useNavigate()
    const { selectedOption, setSelectedOption, loadingCategory } = props
    const categoryList = useRecoilValue(categoryRecoilState)
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    const handleClick = (id: number, slug: string) => {
        setSelectedOption({ id, slug })
        navigate({ search: id !== 0 ? `cat=${slug}` : '' })
        if (isOpen) setIsOpen(false)
    }
    return (
        <>
            <div
                className="absolute sm:hidden cursor-pointer top-[33px] left-4"
                onClick={toggleMenu}
            >
                <div
                    className={clsx(
                        'flex w-[48px] h-[48px] items-start gap-2.5 p-2 hover:border-[#fff] rounded border bg-black',
                        isOpen ? 'border-[#b83131]' : 'border-[#646464]'
                    )}
                >
                    <svg
                        width={32}
                        height={34}
                        viewBox="0 0 16 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M14.7501 5.39288H1.25012C1.05121 5.39288 0.860444 5.31387 0.719792 5.17321C0.57914 5.03256 0.500122 4.8418 0.500122 4.64288C0.500122 4.44397 0.57914 4.25321 0.719792 4.11255C0.860444 3.9719 1.05121 3.89288 1.25012 3.89288H14.7501C14.949 3.89288 15.1398 3.9719 15.2804 4.11255C15.4211 4.25321 15.5001 4.44397 15.5001 4.64288C15.5001 4.8418 15.4211 5.03256 15.2804 5.17321C15.1398 5.31387 14.949 5.39288 14.7501 5.39288V5.39288Z"
                            fill="#DDDDDD"
                        />
                        <path
                            d="M12.25 8.89319H3.75C3.55109 8.89319 3.36032 8.81417 3.21967 8.67352C3.07902 8.53287 3 8.3421 3 8.14319C3 7.94428 3.07902 7.75351 3.21967 7.61286C3.36032 7.47221 3.55109 7.39319 3.75 7.39319H12.25C12.4489 7.39319 12.6397 7.47221 12.7803 7.61286C12.921 7.75351 13 7.94428 13 8.14319C13 8.3421 12.921 8.53287 12.7803 8.67352C12.6397 8.81417 12.4489 8.89319 12.25 8.89319Z"
                            fill="#DDDDDD"
                        />
                        <path
                            d="M9.25 12.3931H6.75C6.55109 12.3931 6.36032 12.3141 6.21967 12.1735C6.07902 12.0328 6 11.842 6 11.6431C6 11.4442 6.07902 11.2535 6.21967 11.1128C6.36032 10.9721 6.55109 10.8931 6.75 10.8931H9.25C9.44891 10.8931 9.63968 10.9721 9.78033 11.1128C9.92098 11.2535 10 11.4442 10 11.6431C10 11.842 9.92098 12.0328 9.78033 12.1735C9.63968 12.3141 9.44891 12.3931 9.25 12.3931Z"
                            fill="#DDDDDD"
                        />
                    </svg>
                </div>
            </div>
            {isOpen && (
                <div className="absolute z-10 top-[115px] left-0 right-0 bg-black ">
                    <div className="overflow-auto">
                        <RenderNavList
                            categoryList={categoryList}
                            selectedOption={selectedOption}
                            loadingCategory={loadingCategory}
                            handleClick={handleClick}
                        />
                    </div>
                </div>
            )}
            <div className="bg-[#242423] hidden sm:block border-r h-[calc(100vh-115px)] border-r-[#000] p-4 shadow-md overflow-auto">
                <div className="flex w-full justify-between h-full items-start self-stretch py-[1rem] p-0">
                    <RenderNavList
                        categoryList={categoryList}
                        selectedOption={selectedOption}
                        loadingCategory={loadingCategory}
                        handleClick={handleClick}
                    />
                </div>
            </div>
        </>
    )
}

const RenderNavList = (props: {
    categoryList: categoryListTypes[]
    selectedOption: SelectedOptionType | null
    loadingCategory: boolean
    handleClick: CallableFunction
}) => {
    const { categoryList, selectedOption, loadingCategory, handleClick } = props

    return (
        <div className="flex w-full  flex-col items-start gap-4 self-stretch pt-3 pb-6 px-4 bg-[#242423] ">
            <div
                className={clsx(
                    selectedOption?.id === 0
                        ? 'rounded border border-black bg-black/[.40]'
                        : '',
                    'flex items-center gap-3 self-stretch py-2 px-6 cursor-pointer hover:bg-black/[.20]'
                )}
                onClick={() => handleClick(0, '')}
            >
                <div
                    className={clsx(
                        selectedOption?.id ? 'text-white font-medium' : '',
                        'text-[#ddd] font-[mabry Pro] text-left leading-[normal]'
                    )}
                >
                    Showing Everything
                </div>
            </div>
            {loadingCategory && (
                <div className="w-full h-full flex flex-col gap-4">
                    {dummyArray?.map(() => (
                        <div className="w-full h-11 bg-[#242423] rounded ">
                            <div className="animate-pulse h-[inherit] bg-[#000] opacity-30"></div>
                        </div>
                    ))}
                </div>
            )}
            {categoryList?.map((option) => (
                <RenderNavOption
                    option={option}
                    selectedOption={selectedOption}
                    handleClick={handleClick}
                />
            ))}
        </div>
    )
}

const RenderNavOption = (props: {
    option: categoryListTypes
    selectedOption: SelectedOptionType | null
    handleClick: CallableFunction
}) => {
    const { option, selectedOption, handleClick } = props
    const { slug, id, name, full_icon_url } = option
    return (
        <div
            className={clsx(
                selectedOption?.id === id
                    ? 'rounded border border-black bg-black/[.40]'
                    : '',
                'flex items-center gap-3 self-stretch py-2 px-6 cursor-pointer hover:bg-black/[.20]'
            )}
            onClick={() => handleClick(id, slug)}
        >
            {full_icon_url && (
                <img
                    src={full_icon_url}
                    width="35px"
                    height="25px"
                    alt="title"
                />
            )}
            <div
                className={clsx(
                    selectedOption?.id === id ? 'text-white font-medium' : '',
                    'text-[#ddd] font-[mabry Pro] text-left leading-[normal]'
                )}
            >
                {name}
            </div>
        </div>
    )
}

export default SideNav