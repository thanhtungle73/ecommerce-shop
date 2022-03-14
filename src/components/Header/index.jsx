import React, { useState } from 'react';
import CloseSharpIcon from '@mui/icons-material/CloseSharp';
import PersonIcon from '@mui/icons-material/Person';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import {
  AppBar,
  Badge,
  Box,
  Button,
  Container,
  createTheme,
  Dialog,
  DialogContent,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@mui/material';
import { HEADER_LOGO_URL, MODE, StorageKeys, TEXT_COLOR } from 'constants';
import Login from 'features/Auth/components/Login';
import Register from 'features/Auth/components/Register';
import { Link, NavLink } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from 'firebase-config';

Header.propTypes = {};

function Header() {
  const theme = createTheme();

  const pages = ['Home', 'Shop', 'Blog', 'About Us', 'Contact'];
  const [openDialog, setOpenDialog] = useState(false);
  const [mode, setMode] = useState(MODE.LOGIN);
  const [anchorEl, setAnchorEl] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const unregisterAuthObserver = onAuthStateChanged(
    auth,
    async (currentUser) => {
      setIsLoggedIn(Boolean(currentUser));
      if (!currentUser) {
        // User logs out, handle something here
        console.log('User is not logged in');
        return;
      }

      // User is logged in
      console.log('Logged in user');

      return () => unregisterAuthObserver();
    },
    []
  );

  const handleClickOpen = () => {
    setOpenDialog(true);
    setMode(MODE.LOGIN);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };

  const handleUserClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  // handle sign out click and remove localStorage.
  const handleLogoutClick = async () => {
    setAnchorEl(null);

    await signOut(auth);

    localStorage.removeItem(StorageKeys.TOKEN);
    localStorage.removeItem(StorageKeys.USER);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: theme.palette.grey[50] }}>
        <Container maxWidth="xl">
          <Grid container>
            <Grid item lg={12}>
              <Toolbar>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    flexGrow: 1,
                  }}
                >
                  <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                  >
                    <Link to="/">
                      <img
                        src={HEADER_LOGO_URL}
                        alt="logo"
                        height="70px"
                        style={{ display: 'block' }}
                      />
                    </Link>
                  </Typography>

                  <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                    {pages.map((page) => (
                      <NavLink
                        key={page}
                        to={`${page.toString().toLowerCase().replaceAll(' ', '')}`}
                        style={{ color: TEXT_COLOR, textDecoration: 'none' }}
                      >
                        <Button
                          sx={{
                            my: 2,
                            display: 'block',
                            textTransform: 'none',
                            fontSize: '1rem',
                            fontWeight: 400,
                            color: 'inherit',
                          }}
                        >
                          {page}
                        </Button>
                      </NavLink>
                    ))}
                  </Box>
                </Box>

                <Box sx={{ display: { xs: 'none', md: 'flex', color: TEXT_COLOR } }}>
                  <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                    <SearchOutlinedIcon />
                  </IconButton>

                  <IconButton size="large" aria-label="show 17 new notifications" color="inherit">
                    <Badge badgeContent={17} color="warning">
                      <ShoppingBagOutlinedIcon />
                    </Badge>
                  </IconButton>

                  {!isLoggedIn && (
                    <Button
                      color="inherit"
                      sx={{ textTransform: 'none', fontSize: '1rem' }}
                      onClick={handleClickOpen}
                    >
                      Login
                    </Button>
                  )}

                  {isLoggedIn && (
                    <IconButton
                      color="inherit"
                      onClick={handleUserClick}
                      size="large"
                      aria-label="account of current user"
                      aria-controls="menu-appbar"
                      aria-haspopup="true"
                    >
                      <PersonIcon />
                    </IconButton>
                  )}
                </Box>
              </Toolbar>
            </Grid>
          </Grid>
        </Container>
      </AppBar>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        MenuListProps={{ 'aria-labelledby': 'basic-button' }}
      >
        <MenuItem onClick={handleClose} sx={{ fontSize: '0.875rem' }}>
          Profile
        </MenuItem>
        <MenuItem onClick={handleClose} sx={{ fontSize: '0.875rem' }}>
          My account
        </MenuItem>
        <MenuItem onClick={handleLogoutClick} sx={{ fontSize: '0.875rem' }}>
          Logout
        </MenuItem>
      </Menu>

      <Dialog open={openDialog} onClose={handleClose} disableEscapeKeyDown>
        <IconButton
          size="small"
          sx={{ position: 'absolute', top: '1.5%', left: '2.5%' }}
          onClick={handleClose}
        >
          <CloseSharpIcon />
        </IconButton>

        <DialogContent sx={{ p: 0 }}>
          {mode === MODE.LOGIN && (
            <>
              <Login closeDialog={handleClose} />
              <Box textAlign="center" m={theme.spacing(2.5, 0)}>
                <Typography component="span" variant="body2" mr={1}>
                  Don't have account?
                </Typography>
                <Typography
                  component="span"
                  variant="subtitle2"
                  color="inherit"
                  sx={{ cursor: 'pointer' }}
                  onClick={() => setMode(MODE.REGISTER)}
                >
                  Sign Up
                </Typography>
              </Box>
              <Box p={theme.spacing(2.5, 0)} bgcolor={theme.palette.grey[100]} textAlign="center">
                <Typography component="span" variant="body2" mr={1}>
                  Forgot your password?
                </Typography>
                <Typography
                  component="span"
                  variant="subtitle2"
                  color="inherit"
                  sx={{ cursor: 'pointer' }}
                >
                  Reset It
                </Typography>
              </Box>
            </>
          )}

          {mode === MODE.REGISTER && (
            <>
              <Register closeDialog={handleClose} />
              <Box
                component="div"
                p={theme.spacing(2.5, 0)}
                bgcolor={theme.palette.grey[100]}
                textAlign="center"
              >
                <Typography component="span" variant="body2" mr={1}>
                  Have an account with us?
                </Typography>
                <Typography
                  component="span"
                  variant="subtitle2"
                  color="inherit"
                  fontSize="inherit"
                  sx={{ cursor: 'pointer' }}
                  onClick={() => setMode(MODE.LOGIN)}
                >
                  Login
                </Typography>
              </Box>
            </>
          )}
        </DialogContent>
      </Dialog>
    </Box>
  );
}

export default Header;
