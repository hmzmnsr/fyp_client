import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/api";

// Fetch all albums
export const fetchAlbums = createAsyncThunk(
  'gallery/fetchAlbums',
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get('/gallery/', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching albums:', error);
      return rejectWithValue('Failed to fetch albums');
    }
  }
);