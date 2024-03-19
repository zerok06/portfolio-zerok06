'use client'

import { motion, useMotionValue, useSpring } from 'framer-motion'
import React, { useEffect } from 'react'
const Cursor = () => {

    const cursor = { x: useMotionValue(0), y: useMotionValue(0) }

    const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 }
    const smoothMouse = {
        x: useSpring(cursor.x, smoothOptions),
        y: useSpring(cursor.y, smoothOptions)
    }

    useEffect(() => {
        const moveMouse = ({ clientX: x, clientY: y }) => {
            cursor.x.set(x - 20)
            cursor.y.set(y - 20)
            console.log({ x, y });

        }
        window.addEventListener('mousemove', moveMouse)
        return () => {
            window.removeEventListener('mousemove', moveMouse)
        }
    }, [])




    return (
        <motion.div className='h-10 w-10 fixed top-0 left-0 rounded-full pointer-events-none z-50 bg-white mix-blend-difference ' style={{
            left: smoothMouse.x,
            top: smoothMouse.y
        }}>
        </motion.div>
    )
}

export default Cursor