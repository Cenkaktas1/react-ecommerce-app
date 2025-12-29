import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./ProductSlice";
import basketReducer from "./BasketSlice";

export const store = configureStore({
        reducer: {
            products: productReducer,
            basket: basketReducer,
        },
    })