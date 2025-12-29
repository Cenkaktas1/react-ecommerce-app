import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://fakestoreapi.com";

export const getAllProducts = createAsyncThunk("getAllProducts", async () => {
    const response = await axios.get(`${BASE_URL}/products`);
    return response.data;
})

export const productSlice = createSlice({
    name: "products",
    initialState: {
        products: [],
        displayProducts: [],
        selected: {},
        loading: false,
    },
    reducers: {
        filterProducts: (state, action) => {
            const keyword = action.payload.toLowerCase();
            if (keyword === "") {
                state.displayProducts = state.products;
            }
            else {
                state.displayProducts = state.products.filter((item) => 
                    item.title.toLowerCase().includes(keyword)
                );
            }
        },
        filterCategory: (state, action) => {
            const categoryName = action.payload;
            if(categoryName === "All") {
                state.displayProducts = state.products;
            }
            else {
                state.displayProducts = state.products.filter((item) => 
                    item.category === categoryName
                );
            }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getAllProducts.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getAllProducts.fulfilled, (state, action) => {
            state.products = action.payload;
            state.loading = false;
            state.displayProducts = action.payload;
        })
    },
});

export const { filterProducts, filterCategory } = productSlice.actions;
export default productSlice.reducer;