import React from 'react'
import { useDispatch } from 'react-redux'

export const UserMenu = () => {
    const dispatch = useDispatch()

    return (
        <div className='container-user_name'>
            <p className='user-email'>Welcome, {name} </p>
            <button 
            type='button' 
            className='logout-button'
            onClick={() => dispatch(logout())}
            >
                Logout
            </button>
        </div>
    )
}

