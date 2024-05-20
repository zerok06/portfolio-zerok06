import TableRender from '@/components/Users/TableRender'
import { fetchUsers } from '@/lib/actions'
import React from 'react'

const Page = async () => {
  const { users } = await fetchUsers()
  return (
    <div>
      <TableRender users={users!} />
    </div>
  )
}

export default Page
