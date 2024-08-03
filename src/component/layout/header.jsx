import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
const pages = [{title:'Home', id:'/'}, {title:'About Us', id:'/about'}, {title:'Blogs', id:'/blog'},{title:'Contact Us', id:'/contact'}];
const settings = [{title:'Cricket ID Provider', id:'/cricket-id-provider'}, {title:'Diamond Exchange ID', id:'/diamond-id-provider'},{title:'Casino ID Provider', id:'/casino-id-provider'}, {title:'T20 WorldCup ID Provider', id:'/t20-world-cup'},{title:'IPL ID Provider', id:'/ipl-id-provider'},];

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState()
  const [anchorElUser, setAnchorElUser] =  React.useState()

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{display: 'flex', justifyContent:'space-between'}}>
        <div className="brand-logo d-none d-lg-inline-block">
                            <div className="logo">
                                <Link to="/">
                                    <img src="/assets/images/logo/logo_2.png" alt="logo" />
                                </Link>
                            </div>
        </div>
          <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
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
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography variant='span'  textAlign="center"><NavLink style={{color:'#2c3e50'}} to={page.id}>{page.title}</NavLink></Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <div className="mobile-logo d-lg-none">
                                        <Link to="/"><img src="/assets/images/logo/logo_2.png" alt="logo" /></Link>
           </div>
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center', gap: '30px' }}>
      {pages.map((page, index) => (
        <>
          {page.title === 'Blogs' && (
            // Insert "Games" button after "About Us"
            <Typography key="games" variant='body1' sx={{ textDecoration: 'none' }} textAlign="center">
              <Tooltip title="Open games">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Typography sx={{ color: 'white' }}>Games</Typography>
                </IconButton>
              </Tooltip>
            </Typography>
          )}
          <Typography key={index} variant='body1' sx={{ textDecoration: 'none' }} textAlign="center">
            <NavLink style={{ textDecoration: 'none', color: 'inherit' }} to={page.id}>
              {page.title}
            </NavLink>
          </Typography>
        </>
      ))}
    </Box>
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
                <MenuItem key={setting.id} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center"><NavLink style={{color:'#2c3e50'}} to={setting.id}>{setting.title}</NavLink></Typography>
                </MenuItem>
              ))}
            </Menu>
            <Typography className='d-lg-none' key="games" variant='body1' sx={{ textDecoration: 'none' }} textAlign="center">
              <Tooltip title="Open games">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Typography sx={{ color: 'white' }}>Games</Typography>
                </IconButton>
              </Tooltip>
            </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
