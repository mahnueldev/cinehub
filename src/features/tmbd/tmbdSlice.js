import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://api.themoviedb.org/3';

// Fetch all movies
export const fetchMovies = createAsyncThunk('movies/fetchMovies', async () => {
  try {
    const config = {
      params: {
        api_key: process.env.REACT_APP_TMBD_API_KEY,
      },
    };
    const { data } = await axios.get(`${url}/discover/movie`, config);
    console.log('Response data:', data);
    return data.results;
  } catch (error) {
    console.log(error);
    return error.response.data;
  }
});
export const fetchTrending = createAsyncThunk(
  'trending/fetchTrending',
  async () => {
    try {
      const config = {
        params: {
          api_key: process.env.REACT_APP_TMBD_API_KEY,
        },
      };
      const { data } = await axios.get(`${url}/trending/all/week`, config);
      console.log('Response data:', data);
      return data.results;
    } catch (error) {
      console.log(error);
      return error.response.data;
    }
  }
);

export const fetchGenre = createAsyncThunk(
  'genre/fetchGenre',
  async () => {
    try {
      const config = {
        params: {
          api_key: process.env.REACT_APP_TMBD_API_KEY,
        },
      };
      const { data } = await axios.get(`${url}/genre/movie/list`, config);
      console.log('Response data:', data);
      return data.results;
    } catch (error) {
      console.log(error);
      return error.response.data;
    }
  }
);

export const tmbdSlice = createSlice({
  name: 'tmbd',
  initialState: {
    movies: [],
    trending: [],
    genre: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.movies = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchTrending.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTrending.fulfilled, (state, action) => {
        state.trending = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchTrending.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchGenre.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchGenre.fulfilled, (state, action) => {
        state.genre = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchGenre.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default tmbdSlice.reducer;
