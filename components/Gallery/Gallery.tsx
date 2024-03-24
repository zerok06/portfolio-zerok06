import React from 'react'
import { Wrapper } from '../Wrapper'
import PROFILE from '@/profile.json'


const Gallery = () => {

    const { gallery: { items, title } } = PROFILE

    return (
        <section className='py-20'>
            <Wrapper>
                <section className='flex flex-wrap justify-center gap-y-8'>
                    {items.map(item =>
                        <div className='min-w-[288px] max-w-[33%] px-4'>
                            <div className='overflow-hidden relative flex h-[200px] group'>
                                <img src={item.scr} alt={item.alt} className='h-full w-[400px] object-cover' />
                            </div>
                        </div>
                    )}
                </section>
            </Wrapper>
        </section>
    )
}

export default Gallery