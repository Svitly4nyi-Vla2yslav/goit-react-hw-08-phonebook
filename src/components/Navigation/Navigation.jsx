import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from 'redux/auth/auth-selectors'

export const Navigation = () => {
  const {isLoggeIn} = useAuth();
  return (

    
    <nav>
        <NavLink  className='title-bar' to='/'>
        Home
        </NavLink>
        {isLoggeIn && (
        <NavLink  className='title-bar' to='/contacts'>
            Phonebook
        </NavLink>
        )}
    </nav>
  )
}

