import { Box, Grid, Typography } from '@mui/material';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import movieData from '../../services/movieApi';
import apiConfig from '../../services/apiConfig';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { Rating } from '@mui/material';
import { StarOutline } from '@mui/icons-material';

const MediaDetails = () => {

    const [detail, setDetail] = useState([]);
    const { Id, type } = useParams();
    const [rating, setRating] = useState(0);

    useEffect(() => {
        const getMovieById = async () => {
            try {
                if (type === 'movie') {
                    const response = await movieData?.getMovieById(Id);
                    setDetail(response?.data);

                }
                if (type === 'tv') {
                    console.log('going in')
                    const response = await movieData.getTvListById(Id);
                    setDetail(response?.data);
                }
            }
            catch (error) {
                console.log(error)
            }
        }
        getMovieById();
    }, []);

    useEffect(() => {
        setRating(detail.vote_average);
    }, [detail]);

    console.log(detail,"Details")

    return (
        <Box
            sx={{
                height: 'calc(87vh - 64px)',
                overflow: 'hidden',
                backgroundImage: ` linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9)), url(${apiConfig?.originalImg(detail?.backdrop_path)})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                alignItems: 'center',
                paddingTop: '5%',
            }}
        >
            <Grid container flexWrap='nowrap'>
                <Grid item xs={5} display={'flex'} justifyContent={'center'}>
                    <Card sx={{
                        width: '40%',
                        height: '100%',
                        justifySelf: 'center',
                        borderRadius: '30px',
                    }}>
                        <CardMedia sx={{ height: 280 }}
                            component={'img'}
                            image={`${apiConfig?.originalImg(detail?.poster_path)}`}
                            loading='lazy'
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                filter: 'blur(10px)',
                                transition: 'filter 0.5s ease',
                                cursor: 'pointer',
                            }}
                            onLoad={(e) => e.target.style.filter = 'none'}
                        />
                    </Card>
                </Grid>
                <Grid item xs={7} >
                    <Box>
                        <Typography sx={{ userSelect: 'none' }} color={'white'} variant='h3'>{detail?.original_title ? detail?.original_title : detail?.original_name}</Typography>
                        <Grid container spacing={1}>
                            {detail?.genres?.map((genre, index) => (
                                <Grid item
                                    key={index}
                                >
                                    <Box
                                        p='4px 8px'
                                        border='2px solid white'
                                        borderRadius='20px'
                                        textAlign='center'
                                        sx={{ cursor: 'pointer', userSelect: 'none' }}
                                    >
                                        <Typography color={'white'} >{genre.name}</Typography>
                                    </Box>
                                </Grid>
                            ))
                            }
                        </Grid>
                        {
                            rating ?
                        <Grid container sx={{ mt: 2 }} spacing={2}>
                            <Grid item >
                                <Typography sx={{ userSelect: 'none' }} color='white'>Rating</Typography>
                            </Grid>
                            <Grid item>
                                <Rating
                                    name="read-only"
                                    value={(rating / 2)}
                                    readOnly
                                    emptyIcon={<StarOutline style={{ color: 'white' }} />}
                                />
                            </Grid>
                            <Grid item>
                                <Typography sx={{ userSelect: 'none'}} color='white'>({detail.vote_count})</Typography>
                            </Grid>
                        </Grid>
                        :
                        <Typography sx={{ userSelect: 'none', pt:2 }} color='white' >No Rating</Typography>
                        }
                        <Box sx={{ width: '70%', mt: 5 }}>
                            <Typography sx={{ userSelect: 'none' }} color={'white'}>{detail?.overview}</Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default MediaDetails