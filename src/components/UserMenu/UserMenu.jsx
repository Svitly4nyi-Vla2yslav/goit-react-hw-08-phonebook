import React from 'react'
import '../ContactList/ContactList.css'
import { useDispatch } from 'react-redux'
import { logOut } from 'redux/auth/auth-operations';
import { useAuth } from 'redux/auth/auth-selectors';

export const UserMenu = () => {
    const dispatch = useDispatch();
    const {user} = useAuth()

    return (
        <div className='container-user_name'>
            <p className='Contact__item'>Welcome, {user.name} </p>
            <button 
            type='button' 
            className='Delete'
            onClick={() => dispatch(logOut())}
            >
                Logout
            </button>
        </div>
    )
}

