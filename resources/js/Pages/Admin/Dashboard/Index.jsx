import Base from '@/Layouts/Base'
import React from 'react'

const Index = ({ auth, permissions }) => {
  return (
    <Base user={auth.user} permissions={permissions}>
    </Base>
  )
}

export default Index