import React from 'react'
import { useDispatch } from 'react-redux'
import { register } from 'redux/auth/auth-operations'
import './RegisterForm.css'

export const RegisterForm = () => {

    const dispatch = useDispatch()

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        dispatch(
            register({
                name: form.elements.name.value,
                email: form.elements.email.value,
                password: form.elements.password.value
            })
        )
        form.reset();
    }
    return (
       
            <form className='form' onSubmit={handleSubmit}>
                <label className='label'>
                    Username
                    <input type="text" name='name' className='input'/>
                </label>
                <label className='label' >
                    Email
                    <input type="email" name='email'  className='input'/>
                </label>
                <label  className='label'>
                    Password
                    <input type="password" name='password' className='input'/>
                </label>
                <button type='submit' className='button'> Register</button>
            </form>
    
    )
}

