import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: []
};

const videoSlice = createSlice({
  name: 'video',
  initialState,
  reducers: {
    setData(state, action) {
      state.data = action.payload
    },
  },
});

export const { setData } = videoSlice.actions;
export default videoSlice.reducer;