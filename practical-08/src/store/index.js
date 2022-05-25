import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from './slices/authSlice';

// Redux store, which stores the state
const store = configureStore({
    reducer: {
        auth: authReducer,
    }
})

export default store;