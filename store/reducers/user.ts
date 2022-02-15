import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
    name: 'user',
    initialState: {
        data: {},
        loggedIn: false,
    },
    reducers: {
        setMeData(state, { payload }) {
            state.data = payload;
        },
        login(state, { payload }) {
            state.loggedIn = true;
            // localStorage.setItem('refresh_token', payload.refresh_token);
            // asyncLocalStorage.setItem('access_token', payload.access_token);
        },
    },
});

export const { setMeData, login } = slice.actions;

export default slice.reducer;
