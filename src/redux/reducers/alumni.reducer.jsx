import { createSlice } from '@reduxjs/toolkit';
import { fetchAlumni } from "../actions/alumni.action.jsx";

const initialState = {
  alumni: [],
  loading: false,
  error: null,
};

const alumniSlice = createSlice({
  name: 'alumni',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch all alumni
      .addCase(fetchAlumni.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAlumni.fulfilled, (state, action) => {
        state.loading = false;
        state.alumni = action.payload;
      })
      .addCase(fetchAlumni.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default alumniSlice.reducer;
