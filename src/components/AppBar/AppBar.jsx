import { AuthNav } from 'components/AuthNav/AuthNav'
import { Navigation } from 'components/Navigation/Navigation'
import { UserMenu } from 'components/UserMenu/UserMenu'
import React from 'react'
import { useAuth } from 'redux/auth/auth-selectors'

export const AppBar = () => {
  const {isLoggeIn} = useAuth();
  return (
    <div className='header'>
        <Navigation/>
        {isLoggeIn ? 
         <UserMenu/>
          :  
          <AuthNav/>
           } 
    </div>
  )
}

