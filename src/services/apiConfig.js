const apiConfig = {
    baseUrl : `https://api.themoviedb.org/3/`,
    api_key : 'b7ae278e722268e544e18fd001e74c27',
    originalImg : (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Img : (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;