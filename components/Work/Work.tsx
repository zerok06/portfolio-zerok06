import React from 'react'
import { Wrapper } from '../Wrapper'
import PROFILE from '@/profile.json'
import { cn } from '@/lib/utils'


const Work = () => {

    const { work: { desc, items, title } } = PROFILE
    const len = Math.round(items.length / 2)
    const currentItems = [items.slice(0, len), items.slice(len)]
    return (
        <section>
            <Wrapper>
                <div>
                    <h2 className='text-5xl tracking-tighter font-semibold inline-block max-w-[400px] font-title mb-14'>{title}</h2>
                    <div className='flex flex-wrap gap-y-4 py-6'>

                        {currentItems.map((item, index) =>

                            <div className={cn('px-6 min-w-[312px] md:min-w-[432px] max-w-[50%]', {
                                'translate-y-20': index === 1
                            })}>
                                {item.map(element =>
                                    <div className='flex flex-col gap-3'>
                                        <img src={element.image} className='aspect-square object-cover grayscale hover:grayscale-0 transition-all duration-500' alt={element.title} />
                                        <h3 className='text-lg font-title font-semibold'>{element.title}</h3>
                                        <p className='text-sm text-balance text-white/70 '>{element.desc}</p>
                                    </div>
                                )}
                            </div>

                        )}

                    </div>
                </div>
            </Wrapper>
        </section>
    )
}

export default Work