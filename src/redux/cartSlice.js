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
      // state.cartItems.push(action.payload);

      const { product } = action.payload;

      // Check if the product is already in the cart
      const existingItem = state.cartItems.find((item) => item.product.id === product.id);

      if (existingItem) {
        // If the product is already in the cart, increase its quantity
        existingItem.quantity += 1;
      } else {
        // If it's not in the cart, add it with a quantity of 1
        state.cartItems.push({ product, quantity: 1 });
      }

    },
    removeFromCart: (state, action) => {
      // state.cartItems.splice(action.payload.id-1, 1);
      const productId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.product.id !== productId);
    },
    decreaseCartItemQuantity: (state, action) => {
      const itemId = action.payload;
      const existingItem = state.cartItems.find((item) => item.product.id === itemId);
      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity--;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart, decreaseCartItemQuantity } = cartSlice.actions;

export default cartSlice.reducer;
