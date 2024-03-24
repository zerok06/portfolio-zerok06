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
        /* const exitMoveMouse = (e) => {
            cursor.x.set(100)
            cursor.y.set(100)
            console.log(e)
        } */
        window.addEventListener('mousemove', moveMouse)
        /* window.addEventListener('mouseout', exitMoveMouse) */
        return () => {
            window.removeEventListener('mousemove', moveMouse)
            /* window.removeEventListener('mouseout', exitMoveMouse) */
        }
    }, [])




    return (
        <motion.div className='h-10 w-10 fixed top-0 left-0 rounded-full pointer-events-none z-50 bg-white/50' style={{
            left: smoothMouse.x,
            top: smoothMouse.y
        }}>
        </motion.div>
    )
}

export default Cursor