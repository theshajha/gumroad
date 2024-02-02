import React from 'react'
import ListingCard from '../../atom/ListingCard'
import listings from '../../../constants/dummyData/listing'
import SmallCategoryCard from '../../atom/SmallCategoryCard'

const ListingSection = () => (
    <div className="flex flex-col justify-center items-start gap-6 py-6 px-2">
        <div className="flex flex-col justify-center items-start gap-6">
            <div className="text-white font-[mabry Pro] text-2xl leading-[normal]">
                Recommended for you
            </div>
            <div className="flex flex-wrap items-start gap-6">
                {listings.map((listing) => (
                    <div key={listing.id}>
                        <ListingCard listing={listing} />
                    </div>
                ))}
            </div>
        </div>
        <div className="flex flex-col justify-center items-start gap-6 py-6 ">
            <div className="text-white font-[mabry Pro] text-2xl leading-[normal]">
                Product by category
            </div>
            <div className="flex flex-wrap items-start gap-6 w-full">
                <SmallCategoryCard />
                <SmallCategoryCard />
                <SmallCategoryCard />
                <SmallCategoryCard />
            </div>
        </div>
    </div>
)

export default ListingSection
