import React, { useEffect, useState } from 'react'
import movieData, { category } from '../../services/movieApi'
import { Grid, Pagination, Box, Typography } from '@mui/material'
import MovieCard from '../../components/movieCard'
import apiConfig from '../../services/apiConfig'

const MoviesPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const params = {
        page: currentPage,
    }

    const [moviesList, setMoviesList] = useState([]);
    useEffect(() => {
        const getMovies = async () => {
            try {
                const response = await movieData?.getMoviesList(category.movie, params);
                if (response) {
                    setMoviesList(response?.data?.results);
                    setTotalPages(response.data.total_results);
                }
                console.log(response)
            }
            catch (error) {
                console.log(error)
            }
        }
        getMovies();
    }, []);

    // const useStyles = makeStyles(() => ({
    //     ul: {
    //       "& .MuiPaginationItem-root": {
    //         color: "#fff"
    //       }
    //     }
    //   }));
    //   const classes = useStyles();

    return (
        <>
            <Grid container direction={'column'}
                sx={{ bgcolor: 'black', padding: '1rem' }}
            >
                <Grid container direction={'row'}>
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
                <Grid item>
                    <Box border={'2px solid red'} >
                        <Pagination count={totalPages} variant="outlined" color="primary" showFirstButton showLastButton />
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default MoviesPage