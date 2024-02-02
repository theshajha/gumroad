import React from 'react'
import { categoryListTypes } from '../../../recoil/apiRecoilState.types'
import AccountIcon from '../../../assets/icons/account.svg'
import ArchiveIcon from '../../../assets/icons/archive-icon-white.svg'
import DollarIcon from '../../../assets/icons/badge-dollar-sign.svg'

interface SmallCategoryCardPropTypes {
    category: categoryListTypes
}

const SmallCategoryCard: React.FC<SmallCategoryCardPropTypes> = ({
                                                                     category,
                                                                 }) => {
    const { name, description, id, slug, full_icon_url } = category
    return (
        <div className="relative w-fit">
            <div className="absolute z-0 bottom-0 right-0 top-0 left-0 bg-white rounded"></div>
            <div className="flex cursor-pointer flex-col pt-[1.125rem] pb-6 px-9 w-full  max-w-[500px] rounded border border-[#646464] bg-black overflow-hidden shadow-lg transition-transform transform hover:-translate-x-1 hover:-translate-y-1">
                <div className="flex flex-row items-start content-start gap-3">
                    <img
                        width={80}
                        height={58}
                        src={full_icon_url}
                        alt={name}
                    />
                    <div className="flex w-full flex-col justify-center items-start p-2.5 gap-[14px]">
                        <div className=" text-white flex flex-wrap font-[mabry pro] text-2xl font-medium leading-[normal]">
                            {name}
                        </div>
                        <div className="self-stretch flex-wrap text-white font-[mabry pro] text-lg leading-[normal]">
                            {description}
                        </div>
                    </div>
                </div>
                <hr className="mb-6 mt-4 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
                <div className="flex w-full items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center gap-2">
                        <img
                            width={16}
                            height={16}
                            src={AccountIcon}
                            alt="account"
                        />

                        <div className="text-white [.80] whitespace-nowrap font-[mabry pro] text-sm leading-[normal]">
                            9K Creators
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <img
                            width={16}
                            height={16}
                            src={ArchiveIcon}
                            alt="archive"
                        />

                        <div className="text-white [.80] whitespace-nowrap font-[mabry pro] text-sm leading-[normal]">
                            34K Products
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <img width={16} height={16} src={DollarIcon} alt="$" />
                        <div className="text-white [.80] whitespace-nowrap font-[mabry pro] text-sm leading-[normal]">
                            10M Sales
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SmallCategoryCard