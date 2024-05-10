import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { contactService } from './contactService';



const contactState = {
    contact: "",
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
}

 
export const postQuery = createAsyncThunk(
    'contact/postQuery',
    async (contactData, thunkAPI) => {
        try {
            return await contactService.postQuery(contactData);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);


const contactSlice = createSlice({
    name: 'contact',
    initialState: contactState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(postQuery.pending, (state) => {
            state.isLoading = true
        }).addCase(postQuery.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.isError = false;
            state.contact = action.payload;
        }).addCase(postQuery.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error.message;
        })
    }
});


export default contactSlice.reducer;