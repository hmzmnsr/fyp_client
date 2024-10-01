import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../services/api';

// Fetch all faculty members
export const fetchFaculty = createAsyncThunk(
  'faculty/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get('/faculty');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response ? error.response.data : error.message);
    }
  }
);
