import React, { useEffect } from 'react'
import { Grid, TextField, CircularProgress, Dialog, DialogTitle, DialogContent, Typography, List, ListItem, ListItemText } from '@mui/material';
import { useState } from 'react';
import movieData from '../services/movieApi';
import CustomButton from './customButton';
import Mediacard from './mediaCard';
import apiConfig from '../services/apiConfig';
import { useLocation } from 'react-router-dom';

const SearchBar = () => {

    const location = useLocation();
    useEffect(() => {
        console.log(location.pathname, "location.pathname");
    }, [location])

    const [currentPage, setCurrentPage] = useState(1);
    const params = {
        page: currentPage,
    }

    const [searchInput, setSearchInput] = useState('');
    const [searchResult, setSearchResults] = useState([]);
    const [isdialog, setIsDialog] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [movieType, setMovieType] = useState([]);
    const [tvType, setTvType] = useState([]);

    const handleSearch = async (event) => {
        console.log(event.target.value, "Search")
        handleDialogBoxOpen();
        const input = event.target.value;
        setSearchInput(input);
        if (searchInput.trim() !== '') {
            setIsLoading(true);
            try {
                movieData.searchMulti(searchInput, params)
                    .then(response => {
                        setSearchResults(response?.data?.results);
                        console.log("api response in search", searchResult)
                        const movie = [...searchResult.filter(item => item.media_type === 'movie')];
                        setMovieType(movie);
                        const tv = [...searchResult.filter(item => item.media_type === 'tv')];
                        setTvType(tv);
                        console.log(movie, "Movie sub_array")
                        console.log(tv, "tv sub_array")
                    });
            } catch (error) {
                console.error('Error fetching search results:', error);
            } finally {
                setIsLoading(false);
            }
        } else {
            setSearchResults([]); // Clear search results if search term is empty
        }
    }
    const handleDialogBoxOpen = () => {
        setIsDialog(true);
        console.log("dialog box")
    }

    const handleDialogBoxClose = () => {
        setIsDialog(false);
        setSearchInput('');
        setSearchResults([]);
    }

    return (
        location.pathname !== '/' &&
        <>
            <CustomButton
                label='Search'
                onClick={handleDialogBoxOpen} />
            <Dialog open={isdialog} onClose={handleDialogBoxClose} sx={{ width: '100%' }}>
                <DialogTitle>Search Movies / TV Shows</DialogTitle>
                <DialogContent>
                    <TextField
                        label="Search"
                        value={searchInput}
                        onChange={(e) => handleSearch(e)}
                        variant="outlined"
                    />
                    {isLoading && <CircularProgress />} {/* Show loading indicator while fetching data */}
                    {movieType.length > 0 && (movieType?.map((movie, index) => (
                        <Grid container sx={{ display: 'flex' }}>
                            <Grid item>
                                <Mediacard
                                    key={index}
                                    listType='movie'
                                    movieId={movie.id}
                                    imageurl={apiConfig?.originalImg(movie?.poster_path)}
                                    mediatitle={movie?.name}
                                />
                            </Grid>
                        </Grid>
                    ))
                    )
                    }
                </DialogContent>
            </Dialog>
        </>
    )
}

export default SearchBar
