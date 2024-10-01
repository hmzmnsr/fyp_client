import { createSlice } from '@reduxjs/toolkit';
import { fetchAllBSSE } from '../actions/bsse.action';

const initialState = {
  bsse: [],
  loading: false,
  error: null,
};

const bsseSlice = createSlice({
  name: 'bsse',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch all BSSE roadmaps
      .addCase(fetchAllBSSE.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAllBSSE.fulfilled, (state, action) => {
        state.loading = false;
        state.bsse = action.payload;
      })
      .addCase(fetchAllBSSE.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default bsseSlice.reducer;
