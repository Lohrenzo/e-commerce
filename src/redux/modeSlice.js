import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isDarkMode: false, // Initial mode is light
};

export const modeSlice = createSlice({
  name: 'mode',
  initialState,
  reducers: {
    toggleMode: (state) => {
      state.isDarkMode = !state.isDarkMode;
    },
  },
});

export const { toggleMode } = modeSlice.actions;

export default modeSlice.reducer;
