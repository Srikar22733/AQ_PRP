import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { Tooltip } from '@mui/material';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

const MovieCard = ({ movieId, imageurl, imgtitle, movietitle, width = 170, height = 280, borderRadius = '20px' }) => {
  const navigate = useNavigate();

  return (
    <>
      <Card sx={{ 
        width: { width }, 
        height: { height }, 
        justifySelf: 'center', 
        borderRadius: { borderRadius } ,
         '&:active': {
          transform: 'scale(0.95)'
        },
        }}>
        <CardMedia sx={{ height: { height } }}
          onClick={() => navigate(`/movieDetail/${movieId}`)}
          component={'img'}
          image={imageurl}
          loading='lazy'
          style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover',
            filter: 'blur(10px)', // Apply blur initially
            transition: 'filter 0.5s ease',
            cursor:'pointer',
          }}
          onLoad={(e) => e.target.style.filter = 'none'} // Removes blur after the image loads
        />
      </Card>
      <Tooltip title={movietitle}>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          noWrap
          color={'white'}
          sx={{ width: { width }, textAlign: 'center', '&:hover': { color: '#E50914', cursor: 'pointer' } }}
        >
          {movietitle}
        </Typography>
      </Tooltip>
    </>
  )
}

export default MovieCard