import { createSlice } from '@reduxjs/toolkit'

export const movieSlice = createSlice({
    name: 'media',
    initialState: {
        movieFav: [],
        movieWatch: [],
        tvShowFav: [],
        tvShowWatch: []
    },
    reducers: {
        movieAddToFav: (state, action) => {
                state.movieFav = [...state.movieFav, action?.payload]
        },
        movieAddtoWatch: (state, action) => {
            state.movieWatch = [...state.movieWatch, action?.payload];
        },
        movieRemoveFav: (state, action) => {
            state.movieFav = [...state.movieFav.filter(item => item?.movieId !== action?.payload?.movieId)];
        },
        movieremoveWatch: (state, action) => {
            state.movieWatch = [...state.movieWatch.filter(item => item?.movieId !== action?.payload?.movieId)];
        },
        tvShowAddToFav: (state, action) => {
            state.tvShowFav = [...state.tvShowFav, action?.payload];
        },
        tvShowAddtoWatch: (state, action) => {
            state.tvShowWatch = [...state.tvShowWatch, action?.payload];
        },
        tvShowRemoveFav: (state, action) => {
            state.tvShowFav = [...state.tvShowFav.filter(item => item?.tvId !== action?.payload?.tvId)];
        },
        tvShowremoveWatch: (state, action) => {
            state.tvShowWatch = [...state.tvShowWatch.filter(item => item?.tvId !== action?.payload?.tvId)];
        },
    },
})

export const { movieAddToFav, movieAddtoWatch, movieRemoveFav, movieremoveWatch,
    tvShowAddToFav, tvShowAddtoWatch, tvShowRemoveFav, tvShowremoveWatch } = movieSlice.actions;

export default movieSlice.reducer;