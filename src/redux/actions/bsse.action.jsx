import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../services/api';

export const fetchAllBSSE = createAsyncThunk(
  'bsse/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get('/bsse');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response ? error.response.data : error.message);
    }
  }
);