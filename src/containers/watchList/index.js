import { useSelector } from "react-redux"
import MovieCard from "../../components/mediaCard";
import { Grid, Box, Typography } from "@mui/material";

const WatchList = () => {

  const watchListMovieData = useSelector(state => state.media.movieWatch);
    const watchTvShowData = useSelector(state => state.media.tvShowWatch);

  return (
    (watchListMovieData.length > 0 || watchTvShowData.length > 0) ?
            (
                <Box sx={{ bgcolor: 'black', padding: '1rem' }}>
                    {
                        watchListMovieData.length > 0 && (
                            <>

                                <Typography color='white' variant='h4' sx={{ userSelect: 'none', pb: 5 }}>Movies</Typography>

                                <Grid container>
                                    {
                                        watchListMovieData.map((movies, index) => (
                                            <Grid item
                                                sx={{ display: 'grid', placeItems: 'center', p: '5px' }}
                                                xs={12} sm={6} md={4} lg={3} xl={2}
                                                key={index}
                                            >
                                                <MovieCard
                                                    key={index}
                                                    listType={movies?.listType}
                                                    movieId={movies?.movieId}
                                                    imageurl={movies.imageurl}
                                                    movietitle={movies?.movietitle}
                                                    watchList={movies?.isWatchListed}
                                                />
                                            </Grid>
                                        ))
                                    }
                                </Grid>
                            </>
                        )
                    }
                    {
                        watchTvShowData.length > 0 && (
                            <>
                                <Typography color='white' variant='h4' sx={{ userSelect: 'none', pt: 5, pb: 5 }}>TV Shows</Typography>
                                <Grid container>
                                    {
                                        watchTvShowData.map((tvshow, index) => (
                                            <Grid item
                                                sx={{ display: 'grid', placeItems: 'center', p: '5px' }}
                                                xs={12} sm={6} md={4} lg={3} xl={2}
                                                key={index}
                                            >
                                                <MovieCard
                                                    key={index}
                                                    listType={tvshow?.listType}
                                                    tvId={tvshow?.tvId}
                                                    imageurl={tvshow?.imageurl}
                                                    movietitle={tvshow?.movietitle}
                                                    watchList={tvshow?.isWatchListed}
                                                />
                                            </Grid>
                                        ))
                                    }
                                </Grid>
                            </>
                        )
                    }
                </Box>
            )
            :
            <Typography>No data to show</Typography>
  )
}

export default WatchList