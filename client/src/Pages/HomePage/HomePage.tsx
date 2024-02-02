import React, { useState } from 'react'
import Header from '../../components/atom/Header'
import SideNav from '../../components/atom/SideNav'
import NavOptions from '../../constants/NavOptions'
import ListingSection from '../../components/organism/ListingSection'
import Footer from '../../components/atom/Footer'

const HomePage: React.FC = () => {
    const [selectedOptionId, setSelectedOptionId] = useState(NavOptions[0].id)

    return (
        <div className="App bg-[#242423] min-h-screen relative">
            <Header />
            <div className="grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                <div className="bg-[#242423] border-r h-[calc(100vh-115px)] border-r-[#000] p-4 shadow-md overflow-auto">
                    <SideNav
                        selectedOptionId={selectedOptionId}
                        setSelectedOptionId={setSelectedOptionId}
                    />
                </div>
                <div className="bg-[#242423] h-[calc(100vh-115px)] p-4 col-span-2 lg:col-span-3 xl:col-span-4 shadow-md overflow-auto">
                    <ListingSection />
                </div>
            </div>
            <div className="fixed bottom-0 right-0 left-0">
                {/*<Footer />*/}
            </div>
        </div>
    )
}

export default HomePage
