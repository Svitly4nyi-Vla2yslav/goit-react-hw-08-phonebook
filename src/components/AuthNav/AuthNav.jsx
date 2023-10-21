import React from 'react'
import { NavLink } from 'react-router-dom'

export const AuthNav = () => {
    return (
        <div>
            <NavLink className='app-bar_link' to='/register'>
                Register
            </NavLink>
            <NavLink className='app-bar_link' to='/login'>
                Log In
            </NavLink>
        </div>
    )
}

