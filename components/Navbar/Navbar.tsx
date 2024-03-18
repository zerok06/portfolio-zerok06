import React from 'react'
import { Logo } from '../Logo'
import DATA from '@/profile.json'


const Navbar = () => {

    const { navbar } = DATA

    return (
        <nav className='h-28 px-10 flex justify-between items-center'>
            <Logo />
            <div className='flex gap-16 uppercase font-medium text-sm'>
                {navbar.map(({ title, url }) =>
                    <a href={url} className='px-6 py-3 hover:text-white/60 transition-colors duration-500'>{title}</a>
                )}
            </div>
        </nav>
    )
}

export default Navbar