'use client'
import React from 'react'
import type { Formulario } from '@prisma/client'
import { updateUser } from '@/lib/actions'
import { redirect } from 'next/navigation'

interface FormUpdateProps {
  user: Formulario
  id: string
}

const FormUpdate: React.FC<FormUpdateProps> = ({ user, id }) => {
  return (
    <div>
      <div className="mx-auto block max-w-md rounded-lg border border-white/10 p-6 shadow-4 dark:bg-surface-dark">
        <form
          action={(data: FormData) =>
            updateUser(id, data).then(res => {
              if (res.success) {
                alert('Correo actualizado')
                redirect('/dashboard/user')
              } else {
                alert('Error en actualización')
              }
            })
          }
        >
          <div className="relative mb-6" data-twe-input-wrapper-init>
            <input
              type="text"
              className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
              id="exampleInput7"
              name="nombre"
              placeholder="Name"
              defaultValue={user?.nombre}
            />
          </div>

          <div className="relative mb-6" data-twe-input-wrapper-init>
            <input
              type="email"
              className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
              id="exampleInput8"
              placeholder="Email address"
              defaultValue={user?.email}
              name="email"
            />
          </div>

          <div className="relative mb-6" data-twe-input-wrapper-init>
            <textarea
              className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
              id="exampleFormControlTextarea13"
              rows={3}
              defaultValue={user?.message}
              name="message"
              placeholder="Message"
            ></textarea>
          </div>

          <button
            type="submit"
            className="inline-block w-full rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
            data-twe-ripple-init
            data-twe-ripple-color="light"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  )
}

export default FormUpdate
