import React, { useState, useEffect } from 'react'
import MovieCard from '../components/movieCard'
import { Grid } from '@mui/material'
import movieData, { category } from '../services/movieApi'
import apiConfig from '../services/apiConfig'
import Carousel from 'react-material-ui-carousel'

const Home = () => {

    const [moviesList, setMoviesList] = useState([]);
    useEffect(() => {
        const getMovies = async () => {
            try {
                const response = await movieData?.getMoviesList(category.movie);
                if (response)
                    setMoviesList(response?.data?.results);
            }
            catch (error) {
                console.log(error)
            }
        }
        getMovies();
    }, []);

    return (

        <Grid container
            sx={{ bgcolor: 'black', padding: '1rem' }}
        >
            {/* <Carousel animation="slide" 
            sx={{
                width: '100%', // Set the width to 100% of the parent container
                height: '600px', // Set the height to 400 pixels
                '& .MuiPaper-root': { // Target the individual items inside the Carousel
                  display: 'flex',
                  justifyContent: 'center', 
                  alignItems: 'center', 
                },
                '& img': {
                  maxWidth: '100%', 
                  maxHeight: '100%', 
                },
              }}
            >
                {
                moviesList.map((movie,index) => (
                    <img key={index} src={apiConfig.originalImg(movie.backdrop_path)}/>
                ))
                }
            </Carousel> */}
            {
                moviesList.map((movies, index) => (
                    <Grid item
                        sx={{ display: 'grid', placeItems: 'center', p: '5px' }}
                        xs={12} sm={6} md={4} lg={3} xl={2}
                        key={index}
                    >
                        <MovieCard
                            key={index}
                            movieId={movies?.id}
                            imageurl={apiConfig?.originalImg(movies?.poster_path)}
                            imgtitle={movies?.overview}
                            movietitle={movies?.original_title}
                        />
                    </Grid>
                ))
            }
        </Grid>

    )
}

export default Home