import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../services/api';

export const fetchAllMSCS = createAsyncThunk(
  'mscs/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get('/mscs');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response ? error.response.data : error.message);
    }
  }
);