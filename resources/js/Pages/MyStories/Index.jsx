import Base from '@/Layouts/Base'
import React from 'react'

const Index = ({auth, permissions, result}) => {
  return (
    <Base user={auth.user} permissions={permissions}>
      {JSON.stringify(result)}
    </Base>
  )
}

export default Index