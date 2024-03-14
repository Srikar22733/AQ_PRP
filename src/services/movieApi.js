import axiosClient from "./axiosClient";
import apiConfig from "./apiConfig";

export const category = {
    movie: 'movie',
    tvshow: 'tvshow'
}

const movieData = {
    getMoviesList: (category, params) => {
        const url = `${apiConfig?.baseUrl}discover/${category}`
        const page = params && params.page ? params.page : 1;
        const queryParams = { api_key: apiConfig.api_key, ...params, page };
        return axiosClient.get(url, { params: queryParams });
    },
    getMovieById: (movieId, params) => {
        const url = `${apiConfig?.baseUrl}movie/${movieId}`;
        return axiosClient.get(url, { params: { api_key: apiConfig.api_key, ...params } })
    }
}

export default movieData;