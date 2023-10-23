import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from 'redux/auth/auth-selectors'

export const Navigation = () => {
  const {isLoggeIn} = useAuth();
  return (

    
    <nav>
        <NavLink  className='app-bar_link' to='/'>
        Home
        </NavLink>
        {isLoggeIn && (
        <NavLink  className='Phonebook__title-header' to='/contacts'>
            Phonebook
        </NavLink>
        )}
    </nav>
  )
}

