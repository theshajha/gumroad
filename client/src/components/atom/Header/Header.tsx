import React, { useState } from 'react'

const Header = () => {
    const [searchInput, setSearchInput] = useState('')

    return (
        <div className="flex justify-between items-center self-stretch py-8 px-20 gap-8 border-b border-b-[#000] bg-[#242423]">
            <div className="flex items-center gap-10 w-[100%]">
                <div className="Pro text-white font-[Mabry Pro] text-4xl font-black leading-[normal]">
                    gumroad
                </div>
                <div className="flex items-center gap-2 py-3 px-4 min-w-[60%] w-[100%] rounded border border-[#dddddd]/[.40] bg-black">
                    <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M9.70711 8.29289C10.0976 8.68342 10.0976 9.31658 9.70711 9.70711L8.41421 11L9.70711 12.2929C10.0976 12.6834 10.0976 13.3166 9.70711 13.7071C9.31658 14.0976 8.68342 14.0976 8.29289 13.7071L6.29289 11.7071C5.90237 11.3166 5.90237 10.6834 6.29289 10.2929L8.29289 8.29289C8.68342 7.90237 9.31658 7.90237 9.70711 8.29289Z"
                            fill="#DDDDDD"
                        />
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12.2929 8.29289C12.6834 7.90237 13.3166 7.90237 13.7071 8.29289L15.7071 10.2929C16.0976 10.6834 16.0976 11.3166 15.7071 11.7071L13.7071 13.7071C13.3166 14.0976 12.6834 14.0976 12.2929 13.7071C11.9024 13.3166 11.9024 12.6834 12.2929 12.2929L13.5858 11L12.2929 9.70711C11.9024 9.31658 11.9024 8.68342 12.2929 8.29289Z"
                            fill="#DDDDDD"
                        />
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M11 4C7.13401 4 4 7.13401 4 11C4 14.866 7.13401 18 11 18C14.866 18 18 14.866 18 11C18 7.13401 14.866 4 11 4ZM2 11C2 6.02944 6.02944 2 11 2C15.9706 2 20 6.02944 20 11C20 15.9706 15.9706 20 11 20C6.02944 20 2 15.9706 2 11Z"
                            fill="#DDDDDD"
                        />
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M15.9929 15.9929C16.3834 15.6024 17.0166 15.6024 17.4071 15.9929L21.7071 20.2929C22.0976 20.6834 22.0976 21.3166 21.7071 21.7071C21.3166 22.0976 20.6834 22.0976 20.2929 21.7071L15.9929 17.4071C15.6024 17.0166 15.6024 16.3834 15.9929 15.9929Z"
                            fill="#DDDDDD"
                        />
                    </svg>
                    <div className="Pro  text-[#dddddd] [.40] text-center font-[Mabry Pro] leading-[normal]">
                        Search products
                    </div>
                </div>
            </div>
            <div className="flex items-center gap-2 py-3 px-4 rounded bg-[#ff90e7]">
                <div className="Pro text-[#292929] font-[Mabry Pro] whitespace-nowrap leading-[normal]">
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
        </div>
    )
}

export default Header
