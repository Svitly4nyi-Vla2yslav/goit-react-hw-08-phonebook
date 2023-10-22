import React from 'react'
import { useDispatch } from 'react-redux'
import { logOut } from 'redux/auth/auth-operations';
import { useAuth } from 'redux/auth/auth-selectors';

export const UserMenu = () => {
    const dispatch = useDispatch();
    const {user} = useAuth()

    return (
        <div className='container-user_name'>
            <p className='user-email'>Welcome, {user.name} </p>
            <button 
            type='button' 
            className='logout-button'
            onClick={() => dispatch(logOut())}
            >
                Logout
            </button>
        </div>
    )
}

