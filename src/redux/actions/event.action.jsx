import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../services/api';

// Fetch all faculty members
export const fetchEvent = createAsyncThunk(
  'event/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get('/event');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response ? error.response.data : error.message);
    }
  }
);