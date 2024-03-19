import { useSelector } from "react-redux"
import MediaCard from "../../components/mediaCard";
import { Grid, Box, Typography } from "@mui/material";

const WatchList = () => {

  const watchListMovieData = useSelector(state => state.media.movieWatch);
    const watchTvShowData = useSelector(state => state.media.tvShowWatch);

  return (
    (watchListMovieData.length > 0 || watchTvShowData.length > 0) ?
            (
                <Box sx={{ bgcolor: 'black',  paddingTop:'5rem'}}>
                    {
                        watchListMovieData.length > 0 && (
                            <>

                                <Typography color='white' variant='h4' sx={{ userSelect: 'none', pb: 5 }}>Movies</Typography>

                                <Grid container>
                                    {
                                        watchListMovieData.map((movies) => (
                                            <Grid item
                                                sx={{ display: 'grid', placeItems: 'center', p: '5px' }}
                                                xs={12} sm={6} md={4} lg={3} xl={2}
                                            >
                                                <MediaCard
                                                    key={movies?.is}
                                                    listType={movies?.listType}
                                                    movieId={movies?.id}
                                                    imageurl={movies.imageurl}
                                                    mediatitle={movies?.mediatitle}
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
                                        watchTvShowData.map((tvshow) => (
                                            <Grid item
                                                sx={{ display: 'grid', placeItems: 'center', p: '5px' }}
                                                xs={12} sm={6} md={4} lg={3} xl={2}
                                            >
                                                <MediaCard
                                                    key={tvshow?.id}
                                                    listType={tvshow?.listType}
                                                    tvId={tvshow?.id}
                                                    imageurl={tvshow?.imageurl}
                                                    mediatitle={tvshow?.mediatitle}
                                                    watchlisted={tvshow?.isWatchListed}
                                                    favourited={tvshow?.isFavourite}
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
            <Typography color='white' sx={{ paddingTop:'5rem'}}>No data to show</Typography>
  )
}

export default WatchList