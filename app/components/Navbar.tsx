'use client'

import { assets } from "../assets/assets"
import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import Link from 'next/link'

export default function Navbar() {
    const [isScroll, setIsScroll] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false) // Track menu state

    const sideMenuRef = useRef<HTMLUListElement | null>(null)

    const openMenu = () => {
        setIsMenuOpen(true)
    }

    const closeMenu = () => {
        setIsMenuOpen(false)
    }

    useEffect(() => {
        const handleScroll = () => {
            setIsScroll(window.scrollY > 50)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <nav className={`w-full pt-10 lg:pt-4 fixed px-5 lg:px-16 xl:px-[10%] py-4 flex items-center justify-between z-50 transition-all duration-300 ${isScroll ? "bg-white backdrop-blur-lg shadow-md" : ""}`}>
            
            {/* ✅ Logo */}
            <a href="#top">
                <Image src={assets.logo} alt='Logo' className='w-28 lg:w-36 cursor-pointer' />
            </a>

            {/* ✅ Desktop Menu - Hidden on Mobile */}
            <ul className={`hidden lg:flex items-center gap-6 lg:gap-10 rounded-full px-12 py-3 font-medium text-lg ${isScroll ? "text-gray-800" : "text-white font-bold text-xl"}`}>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/services">Services</Link></li>
                <li><a href="#work">My Work</a></li>
                <li><a href="#contact">Contact Me</a></li>
            </ul>

            {/* ✅ Right Section (Sign-in & CTA Button) */}
            <div className='flex items-center gap-4'>
            <a href="/signup" className={`hidden lg:flex items-center gap-3 px-10 py-2.5 border font-medium text-lg border-gray-500 rounded-2xl ml-4 relative overflow-hidden group transition-colors duration-500 ${isScroll ? "text-gray-800 hover:text-black" : "text-white hover:text-black"}`}>
                    <span className="relative z-10">SignUp</span>
                    <span className="absolute inset-0 bg-[#91ff00] scale-x-0 origin-left transition-transform duration-1000 ease-out group-hover:scale-x-100"></span>
                </a>
                <a href="/login" className={`hidden lg:flex items-center gap-3 px-10 py-2.5 border font-medium text-lg border-gray-500 rounded-2xl ml-4 relative overflow-hidden group transition-colors duration-500 ${isScroll ? "text-gray-800 hover:text-black" : "text-white hover:text-black"}`}>
                    <span className="relative z-10">Login</span>
                    <span className="absolute inset-0 bg-[#91ff00] scale-x-0 origin-left transition-transform duration-1000 ease-out group-hover:scale-x-100"></span>
                </a>
                <a href="#contact" className={`hidden lg:flex items-center gap-3 px-10 py-2.5 border font-medium text-lg border-gray-500 rounded-2xl ml-4 relative overflow-hidden group transition-colors duration-500 ${isScroll ? "text-gray-800 hover:text-black" : "text-white hover:text-black"}`}>
                    <span className="relative z-10">Speak to Sales</span>
                    <span className="absolute inset-0 bg-[#91ff00] scale-x-0 origin-left transition-transform duration-1000 ease-out group-hover:scale-x-100"></span>
                </a>

                {/* ✅ Hamburger Menu Button - Visible Only on Mobile */}
                <button className='block lg:hidden ml-3' onClick={openMenu}>
                    <Image src={assets.menu_bar} alt='Menu' className='w-6' />
                </button>
            </div>

            {/* ✅ Mobile Side Menu */}
            <ul 
                ref={sideMenuRef} 
                className={`fixed top-0 right-0 w-full sm:w-64 h-screen bg-white shadow-lg py-20 px-10 transform transition-transform duration-500 ease-in-out z-50 
                ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
            >
                {/* Close Button */}
                <div className='absolute right-6 top-6 cursor-pointer' onClick={closeMenu}>
                    <Image src={assets.logo} alt='Close' className='w-10' />
                </div>

                {/* Mobile Menu Links */}
                <li className="text-lg font-medium text-gray-800 my-4"><a onClick={closeMenu} href="#top">Home</a></li>
                <li className="text-lg font-medium text-gray-800 my-4"><a onClick={closeMenu} href="#about">About Me</a></li>
                <li className="text-lg font-medium text-gray-800 my-4"><a onClick={closeMenu} href="#services">Services</a></li>
                <li className="text-lg font-medium text-gray-800 my-4"><a onClick={closeMenu} href="#work">My Work</a></li>
                <li className="text-lg font-medium text-gray-800 my-4"><a onClick={closeMenu} href="#contact">Contact</a></li>
            </ul>
        </nav>
    )
}
 