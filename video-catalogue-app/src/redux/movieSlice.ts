import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = "e5fe2594"; // Replace with your OMDB API key

export const fetchMovies = createAsyncThunk(
  "movies/fetchMovies",
  async ({ search, page, type }: { search: string; page: number; type: string }) => {
    const response = await axios.get(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}&page=${page}&type=${type}`
    );
    return response.data;
  }
);

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    loading: false,
    error: "",
    totalResults: 0,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload.Response === "True") {
          state.movies = action.payload.Search;
          state.totalResults = action.payload.totalResults;
        } else {
          state.movies = [];
          state.totalResults = 0;
          state.error = action.payload.Error;
        }
      })
      .addCase(fetchMovies.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to fetch movies.";
      });
  },
});

export default movieSlice.reducer;
