import React from 'react'

const Footer = () => (
    <div className="flex justify-center items-center gap-9 self-stretch py-8 px-20 border-t border-t-[#646464] bg-black">
        <div className="flex items-center gap-10 text-white font-[mabry pro] text-4xl leading-[normal]">
            With Gumroad, anyone can earn their first dollar online.
        </div>
        <div className="flex items-center gap-2 py-3 px-4 rounded bg-[#ff90e7]">
            <div className="text-[#292929] font-[mabry pro] leading-[normal]">
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

export default Footer
