import { cn } from '@/lib/utils'
import React from 'react'

interface WrapperProps extends React.HTMLProps<HTMLDivElement> {
    children?: React.ReactNode
}

const Wrapper: React.FC<Readonly<WrapperProps>> = ({ children, className }) => {
    return (
        <div className={cn('max-w-6xl mx-auto px-4', className)}>{children}</div>
    )
}

export default Wrapper