import { Navigation } from 'components/Navigation/Navigation'
import React from 'react'

export const AppBar = () => {
  return (
    <headr className='header'>
        <Navigation/>
        {isLoggedIn ? <UserMenu/> : <AuthNav/>}
    </headr>
  )
}

