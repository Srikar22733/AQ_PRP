import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import { Box, Grid } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import logo from '../assets/moviereel.png';
import { useNavigate } from 'react-router-dom';
import CustomButton from './customButton';
import MenuIcon from '@mui/icons-material/Menu'

const pages = ['Movies', 'TvShows', 'Favourites', 'WatchList'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Navbar = ({ bgc = "black", opacity = 1 }) => {
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const navigate = useNavigate();

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handlePage = (page) => {
        if (page === 'Movies') {
            navigate('movies');
        }
        if (page === 'TvShows') {
            navigate('tvshow');
        }
        if (page === 'Favourites') {
            navigate('fav');
        }
        if (page === 'WatchList') {
            navigate('watchList');
        }
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="sticky"
            sx={{ bgcolor: bgc, opacity: opacity }}
        >
            <Container maxWidth="xl">
                <Toolbar disableGutters>

                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}
                        onClick={() => navigate('/')}
                    >
                        <img src={logo} style={{ backgroundColor: 'white' }} width='30px' height='30px' />
                        <Box>
                            <CustomButton onClick={() => navigate('/')} sx={{ display: { xs: 'none', md: 'flex' } }} />
                        </Box>
                    </Box>

                    {/* // For the Menu Bar & Pages List for small screen*/}
                
                    <Box sx={{
                        display: { xs: 'flex', md: 'none' },
                        justifyContent: 'flex-start',
                        // border:'1px solid red',
                        // maxWidth:'50px' ,
                    }}
                    >
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page}
                                    color='white'
                                    onClick={handleCloseNavMenu}
                                >
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    {/* // For the Menu Bar & Pages List for small screen*/}

                    <Box
                        sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center', justifyContent: 'center' }}
                        onClick={() => navigate('/')}
                    >
                        <img src={logo} style={{ backgroundColor: 'white' }} width='30px' height='30px' />
                        <Box>
                            <CustomButton onClick={() => navigate('/')} sx={{ display: { xs: 'none', md: 'flex', mr: 1 } }} />
                        </Box>
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
                        {pages?.map((page) => (
                            <CustomButton
                                key={page}
                                label={page}
                                onClick={() => handlePage(page)}
                            >
                                {page}
                            </CustomButton>
                        ))}
                    </Box>

                    {/* Settings Icon */}
                    <Box sx={{ flexGrow: 0, justifyContent: 'flex-end' }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Navbar