import React, { useEffect, useState } from 'react'
import movieData, { category } from '../../services/movieApi'
import { Grid, Pagination, Box, Typography } from '@mui/material'
import Mediacard from '../../components/mediaCard'
import apiConfig from '../../services/apiConfig'

const TvShowPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const params = {
        page: currentPage,
    }

    const [tvShowList, setTvShowList] = useState([]);
    useEffect(() => {
        const getMovies = async () => {
            try {
                const response = await movieData?.getTVList(category.tv, params);
                if (response) {
                    setTvShowList(response?.data?.results);
                }
                console.log(response)
            }
            catch (error) {
                console.log(error)
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
            sx={{ bgcolor: 'black', paddingTop: '5rem' }}
        >
            <Grid container direction={'row'}>
                {
                    tvShowList.map((tvshow, index) => (
                        <Grid item
                            sx={{ display: 'grid', placeItems: 'center', p: '5px' }}
                            xs={12} sm={6} md={4} lg={3} xl={2}
                        >
                            <Mediacard
                                key={tvshow?.id}
                                listType='tv'
                                tvId={tvshow?.id}
                                imageurl={apiConfig?.originalImg(tvshow?.poster_path)}
                                imgtitle={tvshow?.overview}
                                mediatitle={tvshow?.original_name}
                                favourited={tvshow?.isFavourite}
                                watchlisted={tvshow?.isWatchListed}
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

export default TvShowPage