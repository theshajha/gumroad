import React, { useState } from 'react'
import { motion } from 'framer-motion'
import SideNav from '../SideNav'

const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className=" w-full">
            {/* Hamburger Icon */}

            {/* Menu */}
            <motion.div
                className={`menu bg-white z-10 top-0 left-0 right-0 bottom-0 absolute ${
                    isOpen ? 'open' : ''
                }`}
                initial={false}
                animate={{ x: isOpen ? 0 : '-100%' }}
                transition={{ duration: 0.3 }}
            ></motion.div>
        </div>
    )
}

export default HamburgerMenu