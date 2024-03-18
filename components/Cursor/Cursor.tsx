'use client'

import { motion, useMotionValue, useSpring } from 'framer-motion'
import React, { useEffect } from 'react'
const Cursor = () => {

    const cursor = { x: useMotionValue(0), y: useMotionValue(0) }

    /*  const smoothMouse = {
         x: useSpring(cursor.x),
         y: useSpring(cursor.y)
     } */

    useEffect(() => {
        const moveMouse = ({ clientX: x, clientY: y }) => {
            cursor.x.set(x)
            cursor.y.set(y)
            console.log({ x, y });

        }
        window.addEventListener('mousemove', moveMouse)
        return () => {
            window.removeEventListener('mousemove', moveMouse)
        }
    }, [])




    return (
        <motion.div className='h-10 w-10 fixed top-0 left-0 rounded-full pointer-events-none z-50 bg-black text-white' style={{
            left: cursor.x.get(),
            top: cursor.y.get()
        }}>
            {cursor.x.get()}
        </motion.div>
    )
}

export default Cursor