import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import Navbar from './components/navBar';
import Home from './containers/home';
import MoviesDetails from './containers/moviesDetailsPage';
import { useEffect, useState } from 'react'
import MoviesPage from './containers/moviesPage';

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
            <Route path='/movieDetail/:movieId' Component={MoviesDetails} />
            <Route path='/movies' Component={MoviesPage} />
            <Route path='*' />
          </Routes>
    </div>
  );
}

export default App;
