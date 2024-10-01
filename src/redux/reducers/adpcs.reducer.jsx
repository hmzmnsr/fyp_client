import { createSlice } from '@reduxjs/toolkit';
import { fetchAllADPCS } from '../actions/adpcs.action';

const initialState = {
  adpcs: [],
  loading: false,
  error: null,
};

const adpcsSlice = createSlice({
  name: 'adpcs',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch all adpcs roadmaps
      .addCase(fetchAllADPCS.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAllADPCS.fulfilled, (state, action) => {
        state.loading = false;
        state.adpcs = action.payload;
      })
      .addCase(fetchAllADPCS.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default adpcsSlice.reducer;
