import React from 'react'
import { useDispatch } from 'react-redux'
import { logIn } from 'redux/auth/auth-operations';

export const LoginForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        dispatch(
            logIn({
                email: form.elements.email.value,
                password: form.elements.password.value,
            })
        )
        form.reset();
    }
    return (
        <div>
            <form className='form' onSubmit={handleSubmit}>
                <label className='label'>
                    Email
                    <input type="email" name="email" className='input' />
                </label>
                <label className='label'>
                    Password
                    <input type="password" name="password" className='input' />
                </label>
                <button type="submit" className='button-login'>
                    Log In
                </button>
            </form>
        </div>
    )
}
