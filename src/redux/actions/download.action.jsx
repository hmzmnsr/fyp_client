import api from "../../services/api";
import { createAsyncThunk } from '@reduxjs/toolkit';

// Fetch all downloads
export const fetchDownloads = createAsyncThunk(
    'downloads/fetchDownloads',
    async (_, { rejectWithValue }) => {
        try {
            const response = await api.get('/downloads');
            const downloads = response.data; 
            return downloads;
        } catch (error) {
            return rejectWithValue(error.response ? error.response.data : 'Network error');
        }
    }
);