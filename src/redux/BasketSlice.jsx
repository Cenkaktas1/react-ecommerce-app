import { createSlice } from "@reduxjs/toolkit";

const getBasketFromLocalStorage = () => {
    if(localStorage.getItem("basket")) {
        return JSON.parse(localStorage.getItem("basket"));
    }
    return [];
}

const writeBasketToLocalStorage = (item) => {
    localStorage.setItem("basket", JSON.stringify(item));
}

export const basketSlice = createSlice({
    name: "basket",
    initialState: {
        products: getBasketFromLocalStorage(),
    },
    reducers: {
        addToBasket: (state, action) => {
            const findProduct = state.products && state.products.find((item) => item.id === action.payload.id);
            if(findProduct) {
                const filteredProducts = state.products.filter((item) => item.id !== action.payload.id);
                findProduct.quantity += action.payload.quantity;
                state.products = [...filteredProducts, findProduct];
                writeBasketToLocalStorage(state.products);
            }
            else {
                state.products = [...state.products, action.payload];
                writeBasketToLocalStorage(state.products);
            }
        },
        deletefromBasket: (state, action) => {
            const filteredProducts = state.products.filter((item) => item.id !== action.payload.id);
            state.products = filteredProducts;
            writeBasketToLocalStorage(state.products);
        },
        incrementQuantity: (state, action) => {
            const findProduct = state.products.find((item) => item.id === action.payload.id);
            if(findProduct) {
                findProduct.quantity += 1;
                writeBasketToLocalStorage(state.products);
            }
        },
        decrementQuantity: (state, action) => {
            const findProduct = state.products.find((item) => item.id === action.payload.id);
            if(findProduct && findProduct.quantity > 1) {
                findProduct.quantity -= 1;
                writeBasketToLocalStorage(state.products);
            }
        }
    },
})

export const { addToBasket, deletefromBasket, incrementQuantity, decrementQuantity } = basketSlice.actions;
export default basketSlice.reducer;