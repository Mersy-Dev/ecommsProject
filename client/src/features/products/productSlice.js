import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { productService } from './productService';


const productState = {
    products: "",
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
}


export const getProducts = createAsyncThunk(
    'products/getProducts',
    async (thunkAPI) => {
        try {
            return await productService.getProducts();
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const addToWishlist = createAsyncThunk(
    'products/addToWishlist',
    async (prodId, thunkAPI) => {
        try {
            return await productService.addToWishlist(prodId);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);



const productSlice = createSlice({
    name: 'products',
    initialState: productState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getProducts.pending, (state) => {
            state.isLoading = true
        }).addCase(getProducts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.isError = false;
            state.getAllProducts = action.payload;
        }).addCase(getProducts.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error.message;
            toast.error(state.message);
        }).addCase(addToWishlist.pending, (state) => {
            state.isLoading = true
        }).addCase(addToWishlist.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.isError = false;
            state.addTwishlist = action.payload;
            // toast.success("Product added to wishlist");
        }).addCase(addToWishlist.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error.message;
            toast.error(state.message);
        });
    }
});



export default productSlice.reducer;


