import FormUpdate from '@/components/Users/FormUpdate'
import { fetchUser, updateUser } from '@/lib/actions'
import React from 'react'

const Page = async ({ params: { id } }: { params: { id: string } }) => {
  const { user } = await fetchUser(id)
  return (
    <>
      <FormUpdate id={id} user={user!} />
    </>
  )
}

export default Page
