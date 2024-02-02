import React from 'react'
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

    const handleClick = (id: number, slug: string) => {
        setSelectedOption({ id, slug })
        navigate({ search: id !== 0 ? `cat=${slug}` : '' })
    }
    return (
        <div className="flex w-full justify-between h-full items-start self-stretch py-[1rem] p-0">
            <div className="flex w-full flex-col items-start gap-4 self-stretch pt-3 pb-6 px-4 bg-[#242423] ">
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
