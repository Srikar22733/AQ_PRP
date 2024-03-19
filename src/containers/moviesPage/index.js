import React, { useEffect, useState } from 'react'
import movieData, { category } from '../../services/movieApi'
import { Grid, Pagination, Box, Typography } from '@mui/material'
import MovieCard from '../../components/mediaCard'
import apiConfig from '../../services/apiConfig'

const MoviesPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const params = {
        page: currentPage,
    }

    const [moviesList, setMoviesList] = useState([]);
    useEffect(() => {
        const getMovies = async () => {
            try {
                setIsLoading(true);
                const response = await movieData?.getMoviesList(category.movie, params);
                if (response) {
                    setMoviesList(response?.data?.results);
                }
                console.log(response)
            }
            catch (error) {
                console.log(error)
            }
            finally {
                setIsLoading(false);
            }
        }
        getMovies();
    }, [currentPage]);

    const handlePageChange = (event, page) => {
        setCurrentPage(page);
        console.log(currentPage);
    }

    return (
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
                                listType='movie'
                                key={index}
                                movieId={movies?.id}
                                imageurl={apiConfig?.originalImg(movies?.poster_path)}
                                imgtitle={movies?.overview}
                                movietitle={movies?.original_title}
                                favourited={movies?.isFavourite}
                                watchlisted={movies?.isWatchList}
                            />
                        </Grid>
                    ))
                }
            </Grid>
            <Grid item>
                <Box display='flex' justifyContent='center'>
                    <Pagination
                        sx={{
                            '& .MuiPaginationItem-root': {
                                color: 'white'
                            },
                            '& .Mui-selected': {
                                color: 'green'
                            },
                        }}
                        variant="outlined"
                        color="primary"
                        count={500}
                        onChange={handlePageChange}
                        defaultPage={1}
                        siblingCount={0}
                        showFirstButton
                        showLastButton />
                </Box>
            </Grid>
        </Grid>
    )
}

export default MoviesPage