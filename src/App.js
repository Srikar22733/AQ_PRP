import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import Navbar from './components/navBar';
import Home from './containers/home';
import MediaDetails from './containers/mediaDetailsPage';
import { useEffect, useState } from 'react'
import MoviesPage from './containers/moviesPage';
import TvShowPage from './containers/tvShowPage';
import FavouritesList from './containers/favourites';
import WatchList from './containers/watchList';

function App() {

  const [isTransparent, setIsTransparent] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      setIsTransparent(scrollTop === 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
          <Navbar opacity={isTransparent ? 1 : 0.9} />
          <Routes>
            <Route path='/' Component={Home} />
            <Route path='/movieDetail/:Id/:type' Component={MediaDetails} />
            <Route path='/movies' Component={MoviesPage} />
            <Route path='/tvshow' Component={TvShowPage} />
            <Route path='/fav' Component={FavouritesList} />
            <Route path='/watchList' Component={WatchList} />
            <Route path='*' />
          </Routes>
    </div>
  );
}

export default App;
