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
            const favData = action?.payload;
            console.log(action?.payload, "favdata")
            const isDuplicate = state.movieFav?.some(item => item.Id === favData.id);
            if (!isDuplicate) {
                state.movieFav = [...state.movieFav, action?.payload]
            }
        },
        movieAddtoWatch: (state, action) => {
            const favData = action?.payload;
            console.log(action?.payload, "favdata")
            const isDuplicate = state.movieWatch?.some(item => item.Id === favData.id);
            if (!isDuplicate) {
                state.movieWatch = [...state.movieWatch, action?.payload];
            }
        },
        movieRemoveFav: (state, action) => {
            state.movieFav = [...state.movieFav.filter(item => item?.id !== action?.payload?.id)];
        },
        movieremoveWatch: (state, action) => {
            state.movieWatch = [...state.movieWatch.filter(item => item?.id !== action?.payload?.id)];
        },
        tvShowAddToFav: (state, action) => {
            const favData = action?.payload;
            console.log(action?.payload, "favdata")
            const isDuplicate = state.tvShowFav?.some(item => item.Id === favData.id);
            if (!isDuplicate) {
                state.tvShowFav = [...state.tvShowFav, action?.payload];
            }
            console.log(state.tvShowFav, "TV Fav Slice")
        },
        tvShowAddtoWatch: (state, action) => {
            const favData = action?.payload;
            console.log(action?.payload, "favdata")
            const isDuplicate = state.tvShowWatch?.some(item => item.Id === favData.id);
            if (!isDuplicate) {
                state.tvShowWatch = [...state.tvShowWatch, action?.payload];
            }
        },
        tvShowRemoveFav: (state, action) => {
            state.tvShowFav = [...state.tvShowFav.filter(item => item?.id !== action?.payload?.id)];
        },
        tvShowremoveWatch: (state, action) => {
            state.tvShowWatch = [...state.tvShowWatch.filter(item => item?.id !== action?.payload?.id)];
        },
    },
})

export const { movieAddToFav, movieAddtoWatch, movieRemoveFav, movieremoveWatch,
    tvShowAddToFav, tvShowAddtoWatch, tvShowRemoveFav, tvShowremoveWatch } = movieSlice.actions;

export default movieSlice.reducer;