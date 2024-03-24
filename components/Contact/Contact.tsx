import React from 'react'
import { Wrapper } from '../Wrapper'
import FormContact from './FormContact'
import DATA from '@/profile.json'


const Contact = () => {

    const { formContact: { title, tag } } = DATA

    return (
        <section className='py-20' id='contact'>
            <Wrapper>
                <h2 className='h1 text-5xl'>{title}</h2>
                <p className='mb-14 text-white/70'>{tag}</p>
                <FormContact />
            </Wrapper>
        </section>
    )
}

export default Contact