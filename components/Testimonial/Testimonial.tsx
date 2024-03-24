'use client'
import React, { useState } from 'react'
import { Wrapper } from '../Wrapper'
import { AnimatePresence, motion, type Variants } from 'framer-motion'
import PROFILE from '@/profile.json'

const Testimonial = () => {

    const { testimonials: { title, items } } = PROFILE
    const len = items.length
    const [index, setIndex] = useState(0)

    const nextTestimonial = () => {
        if (index + 1 === len) {
            setIndex(0)
        } else {
            setIndex(state => state + 1)
        }
    }
    const prevTestimonial = () => {
        if (index === 0) {
            setIndex(len - 1)
        } else {
            setIndex(state => state - 1)
        }
    }

    const variants: Variants = {
        initial: {
            y: 100,
            opacity: 0
        },
        animate: {
            y: 0,
            opacity: 1
        },
        exit: {
            y: 100,
            opacity: 0
        },

    }


    return (
        <section className='pb-20 pt-40'>
            <Wrapper>
                <h2 className='text-3xl md:text-5xl tracking-tighter font-semibold inline-block max-w-[500px] font-title mb-14'>{title}</h2>
                <div>
                    <AnimatePresence mode='wait'>
                        {items[index] &&
                            <motion.div className='flex gap-12 flex-wrap'
                                key={items[index].id}
                            >
                                <motion.img
                                    variants={variants}
                                    initial="initial"
                                    animate="animate"
                                    exit='exit'
                                    transition={{
                                        duration: 0.5,
                                        ease: 'linear',
                                        delay: 0
                                    }}

                                    src={items[index].image} alt={items[index].name} className='aspect-square h-[300px] object-cover' />
                                <div className='flex flex-col items-start justify-center gap-4 flex-1'>
                                    <motion.h3 className='text-xl md:text-2xl tracking-tighter font-semibold font-title'
                                        variants={variants}
                                        initial="initial"
                                        animate="animate"
                                        exit='exit'
                                        transition={{
                                            duration: 0.5,
                                            ease: 'linear',
                                            delay: 0
                                        }}
                                    >
                                        {items[index].name}
                                    </motion.h3>
                                    <motion.p
                                        variants={variants}
                                        initial="initial"
                                        animate="animate"
                                        exit='exit'
                                        transition={{
                                            duration: 0.5,
                                            ease: 'linear',
                                            delay: 0.1
                                        }}
                                        className='text-base text-balance text-white/80 italic'
                                    >
                                        &quot;{items[index].comment}&quot;

                                    </motion.p>
                                    <motion.div className='flex gap-4'
                                        variants={variants}
                                        initial="initial"
                                        animate="animate"
                                        exit='exit'
                                        transition={{
                                            duration: 0.5,
                                            ease: 'linear',
                                            delay: 0.2
                                        }}
                                    >
                                        <p className='text-sm text-white/70'>{items[index].job}</p>
                                        <p className='text-sm text-white/70'>{items[index].brand}</p>
                                    </motion.div>
                                    <motion.div
                                        variants={variants}
                                        initial="initial"
                                        animate="animate"
                                        exit='exit'
                                        transition={{
                                            duration: 0.5,
                                            ease: 'linear',
                                            delay: 0.3
                                        }}
                                    >
                                        <div className='flex gap-4'>
                                            <button onClick={prevTestimonial} className='flex size-10 rounded-full bg-white/10 justify-center items-center'>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#fff" fill="none">
                                                    <path d="M15 6C15 6 9.00001 10.4189 9 12C8.99999 13.5812 15 18 15 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </button>
                                            <button onClick={nextTestimonial} className='flex size-10 rounded-full bg-white/10 justify-center items-center'>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#fff" fill="none">
                                                    <path d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </button>
                                        </div>
                                    </motion.div>
                                </div>
                            </motion.div>
                        }
                    </AnimatePresence>
                </div>
            </Wrapper>
        </section>
    )
}

export default Testimonial