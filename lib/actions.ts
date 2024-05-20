'use server'

import { Resend } from 'resend'
import { z } from 'zod'
import prisma from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

const ContactSchema = z.object({
  email: z.string().transform(value => value.trim()),
  name: z.string().transform(value => value.trim()),
  subject: z.string(),
  message: z.string(),
})

const ContactSchemaUpdate = z.object({
  email: z
    .string()
    .transform(value => value.trim())
    .optional(),
  nombre: z
    .string()
    .transform(value => value.trim())
    .optional(),
  message: z.string().optional(),
})

const resend = new Resend(process.env.RESEND_API_KEY)
const toEmail = process.env.RESEND_EMAIL
export async function formContact(
  /* prevState: string | undefined, */
  formData: FormData
) {
  try {
    const { email, message, name, subject } = ContactSchema.parse({
      ...Object.fromEntries(formData.entries()),
    })
    /* const { data, error } = await resend.emails.send({
      from: `${name} <onboarding@resend.dev>`,
      to: [toEmail!],
      subject: subject,
      html: `<h1>Hello, ${name}.</h1> <p>${message}</p> <p>${email}</p>`,
    })
    if (error) {
      throw error
    } */

    await prisma?.formulario.create({
      data: {
        nombre: name,
        email,
        topic: subject,
        message,
      },
    })
    revalidatePath('/dashboard/')
    return { success: true }
  } catch (error) {
    console.log(error)
    return { success: false }
  }
}

export const fetchUsers = async () => {
  try {
    const all = await prisma?.formulario.findMany()
    return { success: false, users: all }
  } catch (error) {
    return { success: false }
  }
}

export const fetchUser = async (id: string) => {
  try {
    const user = await prisma?.formulario.findUnique({ where: { id } })
    return { success: false, user }
  } catch (error) {
    return { success: false }
  }
}

export const deleteUser = async (id: string) => {
  try {
    await prisma?.formulario.delete({
      where: { id },
    })
    revalidatePath('/dashboard/')
    return { success: true }
  } catch (error) {
    return { success: false }
  }
}
export const updateUser = async (id: string, data: FormData) => {
  try {
    const props = ContactSchemaUpdate.parse({
      ...Object.fromEntries(data.entries()),
    })

    await prisma?.formulario.update({
      data: { ...props },
      where: {
        id,
      },
    })
    revalidatePath('/dashboard/')
    return { success: true }
  } catch (error) {
    return { success: false }
  }
}
