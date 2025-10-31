import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchQuery: '',
  searchResults: [],
  isSearchActive: false,
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
      state.isSearchActive = action.payload.length > 0;
    },
    setSearchResults: (state, action) => {
      state.searchResults = action.payload;
    },
    clearSearch: (state) => {
      state.searchQuery = '';
      state.searchResults = [];
      state.isSearchActive = false;
    },
  },
});

export const { setSearchQuery, setSearchResults, clearSearch } = searchSlice.actions;
export default searchSlice.reducer;

