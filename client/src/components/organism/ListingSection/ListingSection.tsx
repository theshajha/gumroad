import React from 'react'
import ListingCard from '../../atom/ListingCard'
import listings from '../../../constants/dummyData/listing'

const Frame40120 = () => (
    <div className="flex flex-col justify-center items-start gap-6 py-6 px-2">
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
)

export default Frame40120
