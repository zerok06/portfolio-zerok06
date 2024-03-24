'use client'
import React from 'react'
import DATA from '@/profile.json'
import { useFormState, useFormStatus } from 'react-dom'
import { formContact } from '@/lib/actions'

const FormContact = () => {

    const { formContact: { topics } } = DATA

    const [errorMessage, action] = useFormState(formContact, undefined)
    return (
        <form action={action} className='flex flex-col gap-4'>
            <div className='flex gap-4'>
                <div className='flex-1'>
                    <input className='px-3 py-3 w-full border-b border-b-white/20 outline-none bg-transparent' type="text" name="email" placeholder='Email' required />
                </div>
                <div className='flex-1'>
                    <input className='px-3 py-3 w-full border-b border-b-white/20 outline-none bg-transparent' type="text" name="name" placeholder='Name' required />
                </div>
                <div className='flex-1'>
                    <select name="subject" className='px-3 py-3 w-full border-b border-b-white/20 outline-none bg-transparent' required>
                        <option selected disabled>Select Topic</option>
                        {
                            topics.map(topic =>
                                <option value={topic.name} className='text-black' key={topic.id}>{topic.name}</option>
                            )
                        }
                    </select>
                </div>
            </div>
            <div>
                <textarea className='px-3 py-3 w-full border-b border-b-white/20 outline-none bg-transparent resize-none' rows={6} name="message" placeholder='Message' required />
            </div>
            <div className='flex justify-center'>
                <ButtonSubmit />
            </div>
        </form>
    )
}


const ButtonSubmit = () => {

    const { pending } = useFormStatus()

    return (
        <button className='text-black min-w-[150px] px-4 py-2 rounded-full font-medium bg-white flex justify-center'>{pending ? <Spinner /> : "Send"}</button>
    )
}

const Spinner = () => {
    return (
        <div className='size-6 border-[3px] rounded-full animate-[spin_2s_infinite_ease] border-t-black border-b-transparent border-l-transparent border-r-transparent'></div>
    )
}


export default FormContact