import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../services/api';

export const fetchAllBSCS = createAsyncThunk(
  'bscs/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get('/bscs');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response ? error.response.data : error.message);
    }
  }
);