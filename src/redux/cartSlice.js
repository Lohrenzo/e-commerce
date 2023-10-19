import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartItems: [], // Initialize an empty array to store cart items
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      // Add the item details to the cartItems array
      state.cartItems.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.cartItems.splice(action.payload.id-1, 1);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
