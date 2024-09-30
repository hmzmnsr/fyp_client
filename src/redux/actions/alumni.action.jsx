import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../services/api';

// Fetch all faculty members
export const fetchAlumni = createAsyncThunk(
  'alumni/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get('/alumni');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response ? error.response.data : error.message);
    }
  }
);

  
  