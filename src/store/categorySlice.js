import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedCategory: null,
  categories: [],
};

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
    clearSelectedCategory: (state) => {
      state.selectedCategory = null;
    },
  },
});

export const { setSelectedCategory, setCategories, clearSelectedCategory } = categorySlice.actions;
export default categorySlice.reducer;

