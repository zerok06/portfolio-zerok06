import React from 'react'
import { Logo } from '../Logo'
import DATA from '@/profile.json'


const Navbar = () => {

    const { navbar } = DATA

    return (
        <nav className='h-16 rounded-full px-10 md:w-[70%] flex fixed top-10 -translate-x-[50%] left-[50%] justify-between items-center backdrop-blur-lg z-10 bg-white/5'>
            <Logo />
            <div className='flex md:gap-2 lg:gap-4 font-title font-medium text-sm'>
                {navbar.map(({ title, url }) =>
                    <a href={url} className='px-4 shadow-2xl hover:shadow-white/20  text-white/70 font-medium hover:text-white transition-all rounded-full py-2  hover:bg-white/10 duration-500'>{title}</a>
                )}
                <a href="#" className='px-4 shadow-2xl hover:shadow-white/20   text-black font-medium  transition-all rounded-full py-2  bg-white duration-500'>Contact with me</a>
            </div>
        </nav>
    )
}

export default Navbar