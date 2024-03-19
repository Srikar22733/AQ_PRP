import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { Grid, IconButton, Tooltip } from '@mui/material';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/system';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import NoImage from '../assets/NoImage.jpg';
import { useDispatch } from 'react-redux';
import { movieAddToFav, movieAddtoWatch, movieRemoveFav, movieremoveWatch, tvShowAddToFav, tvShowAddtoWatch, tvShowRemoveFav, tvShowremoveWatch, } from '../redux/movieSlice'
import { useSelector } from "react-redux"


const Mediacard = ({ movieId, tvId, imageurl, imgtitle, mediatitle, width = 170, height = 280, borderRadius = '20px', listType, favourited, watchlisted }) => {
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);
  const [isFavourite, setIsFavourite] = useState(favourited ? favourited : false);
  const [isWatchListed, setIsWatchListed] = useState(watchlisted ? watchlisted : false);

  //Get data from redux

  const favMovieData = useSelector(state => state.media.movieFav);
  const favTvShowData = useSelector(state => state.media.tvShowFav);
  const watchListMovieData = useSelector(state => state.media.movieWatch);
  const watchTvShowData = useSelector(state => state.media.tvShowWatch);

  useEffect(() => {

    console.log("Entering useEffect");
    console.log(isFavourite,"text fav")
    console.log(favourited,"favourited")
    const isMovieFavourite = favMovieData.some(item => item.id === movieId);
    const isTvShowFavourite = favTvShowData.some(item => item.id === tvId);
    const isMovieWatchList = watchListMovieData.some(item => item.id === movieId)
    const isTvShowWatchList = watchTvShowData.some(item => item.id === tvId)

    if (isMovieFavourite || isTvShowFavourite) {
      setIsFavourite(true);
    }
    // else {
    //   setIsFavourite(false)
    // }
    if (isMovieWatchList || isTvShowWatchList) {
      setIsWatchListed(true);
    }
    // else {

    //   setIsWatchListed(false)
    // }
  }, [movieId, tvId]);

  useEffect(()=>{
    console.log(isFavourite)
  },[isFavourite])

  // const movieInfo = { movieId, imageurl, movietitle, listType }
  // const tvInfo = { tvId, imageurl, movietitle, listType }
  const dispatch = useDispatch();

  const handleFavourites = () => {
    const mediaInfo = { id: listType === 'movie' ? movieId : tvId, imageurl, mediatitle, listType, isFavourite: true };
    if (!isFavourite) {
      dispatch(listType === 'movie' ? movieAddToFav(mediaInfo) : tvShowAddToFav(mediaInfo));
    } else {
      dispatch(listType === 'movie' ? movieRemoveFav(mediaInfo) : tvShowRemoveFav(mediaInfo));
    }
    setIsFavourite(!isFavourite);
  }
  const handleWatchLists = () => {
    const mediaInfo = { id: listType === 'movie' ? movieId : tvId, imageurl, mediatitle, listType, isWatchListed: true };
    if (!isWatchListed) {
      dispatch(listType === 'movie' ? movieAddtoWatch(mediaInfo) : tvShowAddtoWatch(mediaInfo));
    } else {
      dispatch(listType === 'movie' ? movieremoveWatch(mediaInfo) : tvShowremoveWatch(mediaInfo));
    }
    setIsWatchListed(!isWatchListed);
  }

  const handleImageLoad = () => {
    setIsLoaded(true);
  }
  return (
    <>
      <Box sx={{ pb: 5 }} >
        <Card sx={{
          width: { width },
          height: { height },
          justifySelf: 'center',
          borderRadius: { borderRadius },
          '&:active': {
            transform: 'scale(0.95)'
          },
        }}>
          <CardMedia sx={{ height: { height } }}
            onClick={() => navigate(`/movieDetail/${listType === 'movie' ? movieId : tvId}/${listType}`)}
            component={'img'}
            // image={imageurl ? imageurl : NoImage}
            image={imageurl || NoImage}
            loading='lazy'
            onLoad={handleImageLoad}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              filter: !isLoaded ? 'blur(10px)' : 'none', // Apply blur initially
              transition: 'filter 0.5s ease',
              cursor: 'pointer',
            }}
          />
        </Card>
        <Tooltip title={mediatitle}>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            noWrap
            color={'white'}
            sx={{ width: { width }, textAlign: 'center', '&:hover': { color: '#E50914', cursor: 'pointer' }, pt: 1, userSelect: 'none' }}
          >
            {mediatitle}
          </Typography>
        </Tooltip>
        <Grid container justifyContent='space-around' >
          <Grid item>
            <Tooltip title='Favourites' >
              <IconButton onClick={handleFavourites} >
                {isFavourite ? <FavoriteIcon sx={{ color: 'red' }} /> : <FavoriteBorderIcon color='secondary' />}
              </IconButton>
            </Tooltip>
            {/* {favourite !== undefined ? (
                favourite ? <FavoriteIcon sx={{ color: 'red' }} /> : <FavoriteBorderIcon color='secondary' />
              ) : (
                isFavourite ? <FavoriteIcon sx={{ color: 'red' }} /> : <FavoriteBorderIcon color='secondary' />
              )} */}
          </Grid>
          <Grid item>
            <Tooltip title='WatchList' >
              <IconButton onClick={handleWatchLists} >
                {isWatchListed ? <BookmarkIcon sx={{ color: 'white' }} /> : <BookmarkBorderIcon color="secondary" />}
              </IconButton>
            </Tooltip>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Mediacard