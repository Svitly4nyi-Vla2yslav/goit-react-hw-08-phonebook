import { createSlice } from "@reduxjs/toolkit";
import authOperations from './auth-operations'

const initialState = {
    user: { name: null, email: null },
    token: null,
    isLoggeIn: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [authOperations.register.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggeIn = true;
        },
        [authOperations.logIn.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggeIn = true;
        },
    },
});

export default authSlice.reducer;