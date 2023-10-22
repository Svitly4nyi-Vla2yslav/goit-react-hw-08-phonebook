import React from 'react'
import './AuthNav.css'
import { NavLink } from 'react-router-dom'

export const AuthNav = () => {
    return (
        <div className='header'>
            <NavLink className='app-bar_link' to='/register'>
                Register
            </NavLink>
            <NavLink className='app-bar_link' to='/login'>
                Log In
            </NavLink>
        </div>
    )
}

