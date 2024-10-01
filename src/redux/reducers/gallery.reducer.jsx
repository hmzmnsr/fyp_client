import { createSlice } from "@reduxjs/toolkit";
import { fetchAlbums } from "../actions/gallery.action.jsx";

const initialState = {
  albums: [],
  loading: false,
  error: null,
};

export const gallerySlice = createSlice({
  name: "GALLERY",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch Albums
      .addCase(fetchAlbums.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAlbums.fulfilled, (state, action) => {
        state.loading = false;
        state.albums = action.payload;
      })
      .addCase(fetchAlbums.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default gallerySlice.reducer;
