import { createSlice } from '@reduxjs/toolkit';
import { fetchAllBSCS } from '../actions/bscs.action';

const initialState = {
  bscs: [],
  loading: false,
  error: null,
};

const bscsSlice = createSlice({
  name: 'bscs',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch all BSCS roadmaps
      .addCase(fetchAllBSCS.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAllBSCS.fulfilled, (state, action) => {
        state.loading = false;
        state.bscs = action.payload;
      })
      .addCase(fetchAllBSCS.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default bscsSlice.reducer;
