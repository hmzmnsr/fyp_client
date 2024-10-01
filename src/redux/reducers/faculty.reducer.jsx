import { createSlice } from '@reduxjs/toolkit';
import { fetchFaculty } from '../actions/faculty.action';

const initialState = {
  faculties: [],
  loading: false,
  error: null,
};

const facultySlice = createSlice({
  name: 'faculty',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch all faculty members
      .addCase(fetchFaculty.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchFaculty.fulfilled, (state, action) => {
        state.loading = false;
        state.faculties = action.payload;
      })
      .addCase(fetchFaculty.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default facultySlice.reducer;
