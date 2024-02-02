import React, { useState } from 'react'
import SearchIcon from '../../../assets/icons/search-icon.svg'
import SearchComponent from '../../molecule/SearchComponent'
import HamburgerMenu from '../HamburgerMenu'

const Header = () => {
    const [isSearchOpen, setIsSearchOpen] = useState(false)
    const [searchInput, setSearchInput] = useState('')

    const handleCloseSearch = () => {
        setIsSearchOpen(false)
    }
    const handleChange = (event: any) => {
        !isSearchOpen && setIsSearchOpen(true)
        if (!event.target.value) setIsSearchOpen(false)
        event.preventDefault()
        setSearchInput(event.target.value)
    }

    return (
        <div className="flex justify-between items-center self-stretch py-8 px-4 sm:px-8 lg:px-20 gap-4 sm:gap-8 border-b border-b-[#000] bg-[#242423]">
            <div className="flex items-center ml-14 sm:ml-0 gap-4 sm:gap-10 w-[100%]">
                <div
                    className=" hidden sm:block text-white font-[Mabry Pro]  sm:text-2xl md:text-3xl lg:text-4xl cursor-pointer font-black leading-[normal]"
                    onClick={() => isSearchOpen && setIsSearchOpen(false)}
                >
                    gumroad
                </div>
                <div className="flex relative items-center justify-between gap-2 py-3 px-4 min-w-[60%] w-[100%] rounded border border-[#dddddd]/[.40] group focus-within:border-[#FF90E7] bg-black">
                    <div className="flex items-center gap-2">
                        <img src={SearchIcon} alt="search" />
                        <input
                            className="h-full w-full absolute pl-8 bg-inherit outline-none text-sm text-[#dddddd] pr-2 font-[Mabry Pro] leading-[normal]"
                            type="text"
                            id="search"
                            value={searchInput}
                            onChange={handleChange}
                            placeholder="Search products"
                        />
                    </div>
                    <div></div>
                </div>
            </div>
            <div className=" hidden sm:flex items-center gap-2 py-3 px-4 rounded bg-[#ff90e7]">
                <div className="Pro  text-[#292929] font-[Mabry Pro] whitespace-nowrap leading-[normal]">
                    Start Selling
                </div>
                <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M3 12L21 12"
                        stroke="#14181F"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M16 7L21 12L16 17"
                        stroke="#14181F"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </div>
            <SearchComponent
                isOpen={isSearchOpen}
                onClose={handleCloseSearch}
                searchInput={searchInput}
            />
        </div>
    )
}

export default Header