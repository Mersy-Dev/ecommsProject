import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { authService } from './userService';
import { toast } from 'react-toastify';
import { config } from '../../utils/axiosConfig';





export const registerUser = createAsyncThunk(
    "auth/registerUser",
    async (userData, thunkAPI) => {
        try {
            return await authService.registerUser(userData);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    });


export const loginUser = createAsyncThunk(
    "auth/loginUser",
    async (userData, thunkAPI) => {
        try {
            return await authService.loginUser(userData);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
});

export const getWishList = createAsyncThunk(
    "user/getWishList",
    async (thunkAPI) => {
        try {
            return await authService.getWishList(config);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);




const getCustomerFromLocalStorage = localStorage.getItem("customer") ? JSON.parse(localStorage.getItem("customer")) : null;


const initialState = {
    user: getCustomerFromLocalStorage,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",

}




export const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(registerUser.pending, (state) => {
            state.isLoading = true
        }).addCase(registerUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.isError = false;
            state.userCreated = action.payload;
            if (state.isSuccess === true) {
                toast.success("User registered successfully");
            }
        }).addCase(registerUser.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error;
            if (state.isError === true) {
                toast.error("User registration failed");
            }
        }).addCase(loginUser.pending, (state) => {
            state.isLoading = true
        }).addCase(loginUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.isError = false;
            state.user = action.payload;
            if (state.isSuccess === true) {
                localStorage.setItem('token', action.payload.token);
                toast.success("User logged in successfully");
            }
        }).addCase(loginUser.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error;
            if (state.isError === true) {
                toast.error("User login failed");
            }
        }).addCase(getWishList.pending, (state) => {
            state.isLoading = true
        }
        ).addCase(getWishList.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.isError = false;
            state.UserWishlist = action.payload;
        }).addCase(getWishList.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error;
        })
    },
});



export default authSlice.reducer;