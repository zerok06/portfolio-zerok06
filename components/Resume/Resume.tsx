import React from 'react'
import PROFILE from '@/profile.json'
import { Wrapper } from '../Wrapper'
import { Link } from '../CustomLink'


const Resume = () => {
    const { resume: { workExperience, education, onlineCourses, skills, tools } } = PROFILE
    const len = Math.round(tools.items.length / 2)
    const currentTools = [tools.items.slice(0, len), tools.items.slice(len)]
    console.log(currentTools);


    return (
        <section className='py-20'>
            <Wrapper>
                <h2 className='h2 mb-14'>Resume</h2>
                <section className='flex flex-wrap justify-center'>
                    <div className='min-w-[312px] md:min-w-[432px] max-w-[50%] px-4'>
                        <div className='flex flex-col items-start mb-14'>
                            <h3 className='h3 mb-6'>{workExperience.title}</h3>
                            <div className='flex flex-col gap-4 items-start'>
                                {
                                    workExperience.items.map(item =>
                                        <div className='flex flex-col gap-1 items-start'>
                                            <h4 className='text-xl font-medium'>
                                                <Link href='#'>
                                                    {item.name}
                                                </Link>
                                            </h4>
                                            <p className='text-sm text-white/90'>{item.job}</p>
                                            <p className='text-sm text-white/70'>{item.desc}</p>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                        <div className='flex flex-col items-start mb-14'>
                            <h3 className='h3 mb-6'>{skills.title}</h3>
                            <div className='flex gap-4 w-full'>
                                <div className='flex-1 flex flex-col items-start gap-4 text-sm text-white/80'>
                                    {
                                        skills.items.Design.items.map(item =>
                                            <p>{item}</p>
                                        )
                                    }
                                </div>
                                <div className='flex-1 flex flex-col items-start gap-4 text-sm text-white/80'>
                                    {
                                        skills.items.Development.items.map(item =>
                                            <p>{item}</p>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col items-start mb-14'>
                            <h3 className='h3 mb-6'>{tools.title}</h3>
                            <div className='flex gap-4 w-full'>
                                {
                                    currentTools.map(item =>

                                        <div className='flex-1 flex flex-col items-start gap-4 text-sm text-white/80'>
                                            {item.map(value =>
                                                <p>{value}</p>
                                            )
                                            }
                                        </div>

                                    )
                                }

                            </div>
                        </div>
                    </div>
                    <div className=' min-w-[312px] md:min-w-[432px] max-w-[50%] '>
                        <div className='flex flex-col items-start mb-14'>
                            <h3 className='h3 mb-6'>{education.title}</h3>
                            <div className='flex flex-col gap-4 items-start'>
                                {
                                    education.items.map(item =>
                                        <div className='flex flex-col gap-1 items-start'>
                                            <h4 className='text-xl font-medium'>
                                                <Link href='#'>
                                                    {item.institution}
                                                </Link>
                                            </h4>
                                            <p className='text-sm text-white/90'>{item.title}</p>
                                            <p className='text-sm text-white/70'>{item.duration}</p>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                        <div className='flex flex-col items-start mb-14'>
                            <h3 className='h3 mb-6'>{onlineCourses.title}</h3>
                            <div className='flex flex-col gap-4 items-start'>
                                {
                                    onlineCourses.items.map(item =>
                                        <div className='flex flex-col gap-1 items-start'>
                                            <h4 className='text-xl font-medium'>
                                                <Link href='#'>
                                                    {item.institution}
                                                </Link>
                                            </h4>
                                            <p className='text-sm text-white/90'>{item.title}</p>
                                            <p className='text-sm text-white/70'>{item.duration}</p>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </section>
            </Wrapper>
        </section>
    )
}

export default Resume