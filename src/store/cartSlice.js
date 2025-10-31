import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  total: 0,
  itemCount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { product, quantity = 1, options = {} } = action.payload;
      
      // Check if item already exists with same options
      const existingItemIndex = state.items.findIndex(
        (item) => 
          item.id === product.id && 
          item.selectedSize === options.selectedSize &&
          item.selectedStorage === options.selectedStorage &&
          item.selectedFabric === options.selectedFabric &&
          item.selectedHeadboard === options.selectedHeadboard
      );

      if (existingItemIndex >= 0) {
        // Update quantity if item exists
        state.items[existingItemIndex].quantity += quantity;
      } else {
        // Add new item
        state.items.push({
          id: product.id,
          name: product.name,
          image: product.image,
          price: product.price,
          originalPrice: product.originalPrice,
          quantity,
          selectedSize: options.selectedSize || '',
          selectedStorage: options.selectedStorage || '',
          selectedFabric: options.selectedFabric || '',
          selectedHeadboard: options.selectedHeadboard || '',
        });
      }
      
      // Recalculate totals
      cartSlice.caseReducers.calculateTotals(state);
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item, index) => index !== action.payload);
      cartSlice.caseReducers.calculateTotals(state);
    },
    updateQuantity: (state, action) => {
      const { index, quantity } = action.payload;
      if (state.items[index]) {
        state.items[index].quantity = Math.max(1, quantity);
        cartSlice.caseReducers.calculateTotals(state);
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.total = 0;
      state.itemCount = 0;
    },
    calculateTotals: (state) => {
      state.itemCount = state.items.reduce((total, item) => total + item.quantity, 0);
      state.total = state.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

