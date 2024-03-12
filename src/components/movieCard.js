import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Tooltip } from '@mui/material';
import Typography from '@mui/material/Typography';

const MovieCard = ({imageurl, imgtitle, movietitle, width = 200, height = 200, borderRadius = '20px'}) => {
  return (
    <Card sx={{width: {width}, justifySelf:'center', borderRadius:{borderRadius} }}>
      <CardMedia
        sx={{ height: {height} }}
        image={imageurl}
        // title={imgtitle}
      />
      <CardContent>
        <Tooltip title={movietitle}>
        <Typography gutterBottom variant="h5" component="div" noWrap>
          {movietitle}
        </Typography>
        </Tooltip>
      </CardContent>
    </Card>
  )
}

export default MovieCard