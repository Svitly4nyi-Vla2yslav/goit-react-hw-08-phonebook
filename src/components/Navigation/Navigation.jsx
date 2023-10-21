import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navigation = () => {
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

