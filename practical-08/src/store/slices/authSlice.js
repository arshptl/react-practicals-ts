import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
    isLoggedIn: false,
    userData: {
        name: '',
        avatar: '',
        email: '',
        phoneNo: '',
        password: ''
    }
}

const getLocalStorageData = () => {
    const data = JSON.parse(localStorage.getItem("userObj"));
    console.log(data);
    return data;
}

// created one Slice which handles the actions and reducers
const authSlice = createSlice({
    name: "authentication",
    initialState: getLocalStorageData() === null ? initialAuthState : getLocalStorageData,
    reducers: {
        login: {

            reducer: (state, action) => {
                const userObj = {
                    isLoggedIn: true,
                    userData: {
                        name: action.payload.name,
                        avatar: action.payload.profilePic,
                        email: action.payload.email,
                        phoneNo: action.payload.phoneNo,
                        password: action.payload.password
                    }
                }
                localStorage.setItem("userObj", JSON.stringify(userObj));
                console.log(action.payload.name);
                return {
                    isLoggedIn: true,
                    userData: {
                        name: action.payload.name,
                        avatar: action.payload.profilePic,
                        email: action.payload.email,
                        phoneNo: action.payload.phoneNo,
                        password: action.payload.password,
                    }
                }
            },

            prepare: (data) => {
                return { payload: data }
            }

        },
        logout: (state) => {
            localStorage.clear('userObj');
            return initialAuthState;
        },
    }
})

export const authActions = authSlice.actions;
export const authReducer = authSlice.reducer; 
