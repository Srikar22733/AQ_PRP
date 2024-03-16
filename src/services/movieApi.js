import axiosClient from "./axiosClient";
import apiConfig from "./apiConfig";

export const category = {
    movie: 'movie',
    tv: 'tv',
}
export const type = {
    popular: 'popular',
    toprated: 'top_rated',
}

const movieData = {
    getMoviesList: (category, params) => {
        const url = `${apiConfig?.baseUrl}discover/${category}`
        const page = params && params.page ? params.page : 1;
        const queryParams = { api_key: apiConfig.api_key, page };
        return axiosClient.get(url, { params: queryParams });
    },
    getTVList: (category, params) => {
        const url = `${apiConfig?.baseUrl}discover/${category}`
        const page = params && params.page ? params.page : 1;
        const queryParams = { api_key: apiConfig.api_key, page };
        return axiosClient.get(url, { params: queryParams });
    },
    getTopRatedMoviesList: (category,params) => {
        const url = `${apiConfig?.baseUrl}${category}/top_rated`
        const page = params && params.page ? params.page : 1;
        const queryParams = { api_key: apiConfig.api_key, page };
        return axiosClient.get(url, { params: queryParams });
    },
    getTopRatedTVList: (category,params) => {
        const url = `${apiConfig?.baseUrl}${category}/popular`
        const page = params && params.page ? params.page : 1;
        const queryParams = { api_key: apiConfig.api_key, page };
        return axiosClient.get(url, { params: queryParams });
    },
    getMovieById: (Id, params) => {
        const url = `${apiConfig?.baseUrl}movie/${Id}`;
        return axiosClient.get(url, { params: { api_key: apiConfig.api_key, ...params } })
    },
    getTvListById: (Id, params) => {
        const url = `${apiConfig?.baseUrl}tv/${Id}`;
        return axiosClient.get(url, { params: { api_key: apiConfig.api_key, ...params } })
    }
}

export default movieData;