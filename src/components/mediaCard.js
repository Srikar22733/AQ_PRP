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
import { movieAddToFav, movieAddtoWatch, movieRemoveFav, movieremoveWatch, tvShowAddToFav, tvShowAddtoWatch, tvShowRemoveFav, tvShowremoveWatch } from '../redux/movieSlice'
import { useSelector } from "react-redux"


const Mediacard = ({ movieId, tvId, imageurl, imgtitle, movietitle, width = 170, height = 280, borderRadius = '20px', listType, favourite, watchList }) => {
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);
  const [isFavourite, setIsFavourite] = useState(favourite ? favourite : false);
  const [isWatchListed, setIsWatchListed] = useState(watchList ? watchList : false);

  //Get data from redux

  const favMovieData = useSelector(state => state.media.movieFav);
  const favTvShowData = useSelector(state => state.media.tvShowFav);
  const watchListMovieData = useSelector(state => state.media.movieWatch);
  const watchTvShowData = useSelector(state => state.media.tvShowWatch);

  useEffect(() => {
    const isMovieFavourite = favMovieData.some(item => item.movieId === movieId);
    const isTvShowFavourite = favTvShowData.some(item => item.tvId === tvId);
    const isMovieWatchList = watchListMovieData.some(item =>item.movieId === movieId)
    const isTvShowWatchList = watchTvShowData.some(item =>item.tvId === tvId)

    if (isMovieFavourite) {
      setIsFavourite(true);
    }
    if (isTvShowFavourite) {
      setIsFavourite(true);
    }
    if (isMovieWatchList) {
      setIsWatchListed(true);
    }
    if (isTvShowWatchList) {
      setIsWatchListed(true);
    }
  }, [isFavourite,isWatchListed]);

  const movieInfo = { movieId, imageurl, movietitle, listType }
  const tvInfo = { tvId, imageurl, movietitle, listType }
  const dispatch = useDispatch();

  const handleFavourites = () => {
    if (listType === 'movie') {
      if (!isFavourite) {
        dispatch(movieAddToFav({ ...movieInfo, isFavourite: true }));
        setIsFavourite(!isFavourite);
      }
      if (isFavourite) {
        dispatch(movieRemoveFav({ ...movieInfo, isFavourite: false }));
        setIsFavourite(!isFavourite);
      }
    }

    if (listType === 'tv') {
      if (!isFavourite) {
        dispatch(tvShowAddToFav({ ...tvInfo, isFavourite: true }));
        setIsFavourite(!isFavourite);
      }
      if (isFavourite) {
        setIsFavourite(!isFavourite);
        dispatch(tvShowRemoveFav({ ...tvInfo, isFavourite: false }));
      }
    }
  }
  const handleWatchLists = () => {
    if (listType === 'movie') {
      if (!isWatchListed) {
        dispatch(movieAddtoWatch({ ...movieInfo, isWatchListed: true }));
        setIsWatchListed(!isWatchListed);
      }
      if (isWatchListed) {
        dispatch(movieremoveWatch({...movieInfo,isWatchListed : true }));
        setIsWatchListed(!isWatchListed);
      }
    }

    if (listType === 'tv') {
      if (!isWatchListed) {
        dispatch(tvShowAddtoWatch({...tvInfo,isWatchListed : true}));
        setIsWatchListed(!isWatchListed);
      }
      if (isWatchListed) {
        dispatch(tvShowremoveWatch({...tvInfo,isWatchListed : true}));
        setIsWatchListed(!isWatchListed);
      }
    }
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
        <Tooltip title={movietitle}>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            noWrap
            color={'white'}
            sx={{ width: { width }, textAlign: 'center', '&:hover': { color: '#E50914', cursor: 'pointer' }, pt: 1, userSelect: 'none' }}
          >
            {movietitle}
          </Typography>
        </Tooltip>
        <Grid container justifyContent='space-around' >
          <Grid item>
            <IconButton onClick={handleFavourites} >
              {isFavourite ? <FavoriteIcon sx={{ color: 'red' }} /> : <FavoriteBorderIcon color='secondary' /> }
              {/* {favourite !== undefined ? (
                favourite ? <FavoriteIcon sx={{ color: 'red' }} /> : <FavoriteBorderIcon color='secondary' />
              ) : (
                isFavourite ? <FavoriteIcon sx={{ color: 'red' }} /> : <FavoriteBorderIcon color='secondary' />
              )} */}
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton onClick={handleWatchLists} >
              {isWatchListed ? <BookmarkIcon sx={{ color: 'white' }} /> : <BookmarkBorderIcon color="secondary" />}
            </IconButton>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Mediacard