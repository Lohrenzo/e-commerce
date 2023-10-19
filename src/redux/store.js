import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import modeReducer from './modeSlice';

export default configureStore({
    reducer: {
        cart: cartReducer,
        // mode: modeReducer,
    },
})

