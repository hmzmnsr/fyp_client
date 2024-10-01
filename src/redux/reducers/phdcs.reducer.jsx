import { createSlice } from '@reduxjs/toolkit';
import { fetchAllPHDCS } from '../actions/phdcs.action';

const initialState = {
  phdcs: [],
  selectedRoadmap: null,
  loading: false,
  error: null,
};

const phdcsSlice = createSlice({
  name: 'phdcs',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch all PHDCS roadmaps
      .addCase(fetchAllPHDCS.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAllPHDCS.fulfilled, (state, action) => {
        state.loading = false;
        state.phdcs = action.payload;
      })
      .addCase(fetchAllPHDCS.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
  },
});

export default phdcsSlice.reducer;
