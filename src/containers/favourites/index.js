import { useSelector } from "react-redux"
import Mediacard from "../../components/mediaCard";
import { Grid, Box, Typography } from "@mui/material";

const FavouritesList = () => {
    const favMovieData = useSelector(state => state.media.movieFav);
    const favTvShowData = useSelector(state => state.media.tvShowFav);
    // const watchListMovieData = useSelector(state => state.media.movieWatch);
    // const watchTvShowData = useSelector(state => state.media.tvShowWatch);
    console.log(favMovieData, "movie")
    console.log(favTvShowData, "tv")

    return (
        (favMovieData.length > 0 || favTvShowData.length > 0) ?
            (
                <Box sx={{ bgcolor: 'black', padding: '1rem' }}>
                    {
                        favMovieData.length > 0 && (
                            <>

                                <Typography color='white' variant='h4' sx={{ userSelect: 'none', pb: 5 }}>Favourite Movies</Typography>

                                <Grid container>
                                    {
                                        favMovieData.map((movies, index) => (
                                            <Grid item
                                                sx={{ display: 'grid', placeItems: 'center', p: '5px' }}
                                                xs={12} sm={6} md={4} lg={3} xl={2}
                                                key={index}
                                            >
                                                <Mediacard
                                                    key={index}
                                                    listType={movies?.listType}
                                                    movieId={movies?.id}
                                                    imageurl={movies.imageurl}
                                                    mediatitle={movies?.mediatitle}
                                                    favourite={movies?.isFavourite}
                                                />
                                            </Grid>
                                        ))
                                    }
                                </Grid>
                            </>
                        )
                    }
                    {
                        favTvShowData.length > 0 && (
                            <>
                                <Typography color='white' variant='h4' sx={{ userSelect: 'none', pt: 5, pb: 5 }}>Favourite TV Shows</Typography>
                                <Grid container>
                                    {
                                        favTvShowData.map((tvshow, index) => (
                                            <Grid item
                                                sx={{ display: 'grid', placeItems: 'center', p: '5px' }}
                                                xs={12} sm={6} md={4} lg={3} xl={2}
                                                key={index}
                                            >
                                                <Mediacard
                                                    key={index}
                                                    listType={tvshow?.listType}
                                                    tvId={tvshow?.id}
                                                    imageurl={tvshow?.imageurl}
                                                    mediatitle={tvshow?.mediatitle}
                                                    favourited={tvshow?.isFavourite}
                                                    watchlisted={tvshow?.isWatchListed}
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
            <Typography color='white'>No data to show</Typography>
    )
}

export default FavouritesList