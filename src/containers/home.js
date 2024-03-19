import React, { useState, useEffect } from 'react'
import Mediacard from '../components/mediaCard'
import { Grid, Typography } from '@mui/material'
import movieData, { category, type } from '../services/movieApi'
import apiConfig from '../services/apiConfig'
import { Box } from '@mui/system'

const Home = () => {

    const [moviesList, setMoviesList] = useState([]);
    const [tvList, setTvList] = useState([]);
    useEffect(() => {
        const getData = async () => {
            try {
                const response = await movieData?.getTopRatedMoviesList(category.movie, type.toprated);
                if (response) {
                    setMoviesList(response?.data?.results);
                }

                const tvresponse = await movieData?.getTopRatedTVList(category.tv, type.toprated);
                if (tvresponse) {
                    setTvList(tvresponse?.data?.results);
                }
            }
            catch (error) {
                console.log(error)
            }
        }
        getData();
    }, []);

    return (

        <>
            <Box
                sx={{ padding: '5rem' }}>
                <Typography color='white' variant='h4' textAlign='center' sx={{ userSelect: 'none', pb: 5 }}>Top rated Movies</Typography>
                <Grid container
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
                                <Mediacard
                                    key={index}
                                    listType='movie'
                                    movieId={movies?.id}
                                    imageurl={apiConfig?.originalImg(movies?.poster_path)}
                                    mediatitle={movies?.original_title}
                                />
                            </Grid>
                        ))
                    }
                </Grid>
                <Typography color='white' variant='h4' sx={{ userSelect: 'none', pt: 5, pb: 5 }}>Top rated TV Shows</Typography>
                <Grid container>
                    {
                        tvList.map((tvshow, index) => (
                            <Grid item
                                sx={{ display: 'grid', placeItems: 'center', p: '5px' }}
                                xs={12} sm={6} md={4} lg={3} xl={2}
                                key={index}
                            >
                                <Mediacard
                                    key={index}
                                    listType='tv'
                                    tvId={tvshow?.id}
                                    imageurl={apiConfig?.originalImg(tvshow?.poster_path)}
                                    mediatitle={tvshow?.original_name}
                                />
                            </Grid>
                        ))
                    }
                </Grid>
            </Box>
        </>
    )
}

export default Home