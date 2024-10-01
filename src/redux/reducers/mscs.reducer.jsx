import { createSlice } from '@reduxjs/toolkit';
import { fetchAllMSCS } from '../actions/mscs.action';

const initialState = {
  mscs: [],
  selectedRoadmap: null,
  loading: false,
  error: null,
};

const mscsSlice = createSlice({
  name: 'mscs',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch all MSCS roadmaps
      .addCase(fetchAllMSCS.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAllMSCS.fulfilled, (state, action) => {
        state.loading = false;
        state.mscs = action.payload;
      })
      .addCase(fetchAllMSCS.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
    
  },
});

export default mscsSlice.reducer;
