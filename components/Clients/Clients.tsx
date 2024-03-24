'use client'
import React from 'react'
import { Wrapper } from '../Wrapper'
import PROFILE from '@/profile.json'
import { motion } from 'framer-motion'

const Clients = () => {

    const { clients: { items, title } } = PROFILE

    return (
        <section className='py-20'>
            <Wrapper>
                <h2 className='font-title font-semibold text-4xl tracking-tighter text-center'>{title}</h2>
                <div className='flex mt-6 flex-wrap justify-center'>
                    {items.map(item =>
                        <motion.div >
                            <div className='h-[80px] min-w-[200px] px-3' key={item.id}>
                                <a href={item.url}>
                                    <img src={item.image} className='h-full mx-auto grayscale hover:grayscale-0 transition-all duration-500' alt={item.name} />
                                </a>
                            </div>
                        </motion.div>
                    )}
                </div>
            </Wrapper>
        </section>
    )
}

export default Clients