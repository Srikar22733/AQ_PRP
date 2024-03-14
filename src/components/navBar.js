import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import logo from '../assets/moviereel.png';
import { useNavigate } from 'react-router-dom';
import CustomButton from './customButton';

const pages = ['Movies', 'TV Shows'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Navbar = ({bgc="black", opacity=1}) => {
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const navigate = useNavigate();

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handlePage = (page) => {
        if(page === 'Movies')
            navigate('/movies');
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="sticky"
        sx={{bgcolor:bgc, opacity:opacity}}
        >
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <img src={logo} style={{backgroundColor:'white'}} width='30px' height='30px'/>
                    <CustomButton onClick={ () => navigate('/')} />
                    {/* <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        // href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            // letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                            marginLeft: '0.5%',
                            cursor: 'pointer'
                        }}
                    >
                        SRK Movies
                    </Typography> */}
                    
                    <Box sx={{ flexGrow: 2, 
                        display: { xs: 'flex', md: 'flex' }, 
                        justifyContent:'flex-end', 
                        marginRight:6
                        }}>
                        {pages?.map((page) => (
                            <Button
                                key={page}
                                onClick={()=>handlePage(page)}
                                sx={{ my: 2, color: 'white', display: 'block', m:2 }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
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