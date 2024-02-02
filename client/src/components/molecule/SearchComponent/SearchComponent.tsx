import React, { FC, useState } from 'react'
import { motion } from 'framer-motion'
import CloseIcon from '../../../assets/icons/close-circle-white.svg'
import ListingCard from '../../atom/ListingCard'
import listings from '../../../constants/dummyData/listing'
import CategoryCard from '../../atom/CategoryCard'

interface SearchComponentPropTypes {
    isOpen: boolean
    onClose: CallableFunction
}

const SearchComponent: FC<SearchComponentPropTypes> = ({ isOpen, onClose }) => {
    const overlayVariants = {
        hidden: { opacity: 0, y: '100%' },
        visible: { opacity: 1, y: 0 },
    }

    return (
        <motion.div
            className={`fixed top-[115px] left-0 w-full h-full max-h-[calc(100vh-115px)] bg-black bg-opacity-100 flex flex-col items-center justify-center z-50 ${
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
                <div className="flex justify-between  items-start self-stretch pl-[3.75rem] pr-[3.75rem] p-0">
                    <div className="flex flex-col items-start">
                        <div className="flex flex-col justify-center items-start gap-6 self-stretch py-6 px-2">
                            <div className="text-white font-[mabry pro] text-2xl leading-[normal]">
                                Categories
                            </div>
                            <div className="flex items-start gap-6 self-stretch overflow-auto">
                                <CategoryCard />
                                <CategoryCard />
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-start gap-6 py-6 px-2">
                            <div className="text-white font-[mabry pro] text-2xl leading-[normal]">
                                Products
                            </div>
                            <div className="flex items-start gap-6">
                                <ListingCard listing={listings[0]} />
                                <ListingCard listing={listings[1]} />
                                <ListingCard listing={listings[2]} />
                                <ListingCard listing={listings[3]} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default SearchComponent
