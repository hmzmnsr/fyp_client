import { createSlice } from '@reduxjs/toolkit';
import { fetchDownloads } from '../actions/download.action';

const initialState = {
  downloads: [],
  loading: false,
  error: null,
};

const downloadSlice = createSlice({
  name: 'downloads',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch downloads
      .addCase(fetchDownloads.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchDownloads.fulfilled, (state, action) => {
        state.loading = false;
        state.downloads = action.payload;
      })
      .addCase(fetchDownloads.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default downloadSlice.reducer;
