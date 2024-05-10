import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { blogServices } from './blogServices';
import { config } from '../../utils/axiosConfig';




const blogState = {
    blogs: "",
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
}


export const getBlogs = createAsyncThunk(
    'blogs/getBlogs',
    async (thunkAPI) => {
        try {
            return await blogServices.getBlogs();
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const getBlog = createAsyncThunk(
    'blogs/getBlog',
    async (id, thunkAPI) => {
        try {
            return await blogServices.getBlog(id );
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);


const blogSlice = createSlice({
    name: 'blogs',
    initialState: blogState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getBlogs.pending, (state) => {
            state.isLoading = true
        }).addCase(getBlogs.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.isError = false;
            state.blogs = action.payload;
        }).addCase(getBlogs.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error.message;
            toast.error(state.message);
        }).addCase(getBlog.pending, (state) => {
            state.isLoading = true
        }).addCase(getBlog.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.isError = false;
            state.singleBlog = action.payload;
        }).addCase(getBlog.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error.message;
            toast.error(state.message);
        })
    }
});


export default blogSlice.reducer;