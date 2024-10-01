import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../services/api';

export const fetchAllADPCS = createAsyncThunk(
  'adpcs/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get('/adpcs');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response ? error.response.data : error.message);
    }
  }
);