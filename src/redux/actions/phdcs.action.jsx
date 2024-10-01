import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../services/api';

export const fetchAllPHDCS = createAsyncThunk(
  'phdcs/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get('/phdcs');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response ? error.response.data : error.message);
    }
  }
);
