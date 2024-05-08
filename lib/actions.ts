'use server'

import { Resend } from 'resend'
import { z } from 'zod'

const ContactSchema = z.object({
  email: z.string(),
  name: z.string(),
  subject: z.string(),
  message: z.string(),
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
    return { success: true }
  } catch (error) {
    return { success: false }
  }
}
