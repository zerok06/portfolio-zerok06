import React from 'react'
import { Wrapper } from '../Wrapper'
import DATA from '@/profile.json'

const About = () => {

    const { about: { desc, image, title, name } } = DATA

    return (
        <section className='py-20'>
            <Wrapper>
                <div className='flex flex-wrap justify-center'>
                    <img src={image} alt={title} className='face max-w-[50%] min-w-[312px] grayscale' />
                    <div className='max-w-[50%] min-w-[312px] flex flex-col gap-5 items-start justify-center'>
                        <h2 className='font-bold text-4xl font-title'>{title} <span className='text-primary/70'>{name}</span></h2>
                        <hr className='border-white/30 w-[100px]' />
                        <p className='text-white/70 text-balance text-sm'>{desc}</p>
                        <a href="#contact" className='rounded-full bg-white px-4 py-2 text-black font-medium font-title'>Contact with me</a>
                    </div>
                </div>
            </Wrapper>
        </section>
    )
}

export default About