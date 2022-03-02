import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { AppBar, Badge, Box, Button, Container, createTheme, Grid, IconButton, Link, Toolbar, Typography } from '@mui/material';
import { HEADER_LOGO_URL } from 'constants';
import React from 'react';

Header.propTypes = {

};

function Header() {
    const theme = createTheme();
    const pages = ['Shop', 'Blog', 'About Us', 'Contact'];

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundColor: theme.palette.grey[50] }} >
                <Container>
                    <Grid container>
                        <Grid item lg={12}>
                            <Toolbar>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'flex-start',
                                        flexGrow: 1,
                                    }}>
                                    <Typography
                                        variant="h6"
                                        noWrap
                                        component="div"
                                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                                    >
                                        <Link
                                            href='#'
                                            sx={{ '& img': { display: 'block', padding: '4px' } }}
                                        >
                                            <img
                                                src={HEADER_LOGO_URL}
                                                alt="logo"
                                                height="74px"
                                            />
                                        </Link>
                                    </Typography>

                                    <Box
                                        sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}
                                    >
                                        {pages.map((page) => (
                                            <Button
                                                key={page}
                                                sx={{ my: 2, color: 'white', display: 'block', textTransform: 'none', fontSize: '1rem', fontWeight: 400, color: theme.palette.common.black }}
                                            >
                                                {page}
                                            </Button>
                                        ))}
                                    </Box>
                                </Box>


                                <Box
                                    sx={{ display: { xs: 'none', md: 'flex', color: theme.palette.common.black } }}
                                >
                                    <IconButton
                                        size="large"
                                        aria-label="show 4 new mails"
                                        color="inherit"
                                    >
                                        <SearchOutlinedIcon />
                                    </IconButton>

                                    <IconButton
                                        size="large"
                                        aria-label="show 17 new notifications"
                                        color="inherit"
                                    >
                                        <Badge badgeContent={17} color="warning">
                                            <ShoppingCartOutlinedIcon />
                                        </Badge>
                                    </IconButton>

                                    <Button
                                        color="inherit"
                                        sx={{ textTransform: 'none', fontSize: '1rem' }}
                                    >
                                        Login
                                    </Button>
                                </Box>
                            </Toolbar>
                        </Grid>
                    </Grid>
                </Container>
            </AppBar >
        </Box >

    );
}

export default Header;