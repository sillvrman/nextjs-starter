import { isServer } from '@lib/isServer';
import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';
const auth = createSlice({
    name: 'auth',
    initialState: {
        loginData: Cookies.get('token'),
        loggedIn: !!Cookies.get('token'),
    },
    reducers: {
        login(state, { payload }) {
            Cookies.set('access_token', payload.access_token);
            Cookies.set('refresh_token', payload.refresh_token);
            state.loginData = payload;
            state.loggedIn = true;
        },

        logout(state, action) {
            Cookies.remove('access_token');
            Cookies.remove('refresh_token');
            state.loggedIn = false;
            state.loginData = undefined;
        },
    },
});

export const { login, logout } = auth.actions;

export default auth.reducer;
