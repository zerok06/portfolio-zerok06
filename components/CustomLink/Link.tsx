import { cn } from '@/lib/utils'
import React from 'react'

interface LinkProps extends React.HTMLProps<HTMLAnchorElement> {
    children?: React.ReactNode
}


const Link: React.FC<Readonly<LinkProps>> = ({ href, children, className }, props) => {
    return (
        <a href={href} className={cn('flex justify-center relative items-center gap-2 before:content-[""] before:absolute before:h-[2px] before:bg-white before:w-0 hover:before:left-0 hover:before:w-full before:top-[calc(100%-4px)] before:transition-all before:duration-500 before:right-0 ', className)} {...props}>
            {children}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#fff" fill="none">
                <path d="M17 7L6 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M11 6.13151C11 6.13151 16.6335 5.65662 17.4885 6.51153C18.3434 7.36645 17.8684 13 17.8684 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </a>
    )
}

export default Link