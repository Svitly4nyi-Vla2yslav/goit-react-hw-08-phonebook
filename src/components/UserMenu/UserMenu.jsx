import React from 'react'
import '../ContactList/ContactList.css'
import { useDispatch } from 'react-redux'
import { logOut } from 'redux/auth/auth-operations';
import { useAuth } from 'redux/auth/auth-selectors';
import { NavLink } from 'react-router-dom';

export const UserMenu = () => {
    const dispatch = useDispatch();
    const { user } = useAuth()

    return (
        <div className='container-user_name'>
            <p className='Contact__item'>Welcome, 👨‍💻 {user.name} </p>
            <NavLink to='/'>
                <button
                    type='button'
                    className='Delete log'
                    onClick={() => dispatch(logOut())}
                >
                    Logout
                </button>
            </NavLink>
        </div>
    )
}

