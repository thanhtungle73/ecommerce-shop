import { Box, Button, Container, Grid, Skeleton, Typography, useTheme } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import ArrowRightAltRoundedIcon from '@mui/icons-material/ArrowRightAltRounded';

Category.propTypes = {
  categories: PropTypes.array,
  loading: PropTypes.bool,
};

function Category({ categories = [], loading = true }) {
  const theme = useTheme();
  return (
    <Box mt={4}>
      <Container maxWidth="xl">
        <Grid container>
          <Grid item lg={12}>
            {loading ? (
              <Skeleton variant="text" width={250} height={32} />
            ) : (
              <Typography component="h2" variant="h5" fontWeight={500}>
                Our Popular Categories
              </Typography>
            )}
          </Grid>
        </Grid>
        {loading ? (
          <Grid container spacing={2}>
            {Array.from({ length: 4 }, (_, index) => (
              <Grid key={index} item xs={6} sm={4} lg={3}>
                <Skeleton variant="rectangular" width={320} height={390} />
              </Grid>
            ))}
          </Grid>
        ) : (
          <Grid container spacing={1}>
            {categories.map((category, index) => (
              <Grid key={index} item xs={6} sm={4} lg={3}>
                <Box
                  mt={2}
                  sx={{
                    position: 'relative',
                    width: '320px',
                    height: '390px',
                    overflow: 'hidden',
                    borderRadius: '2px',
                    '&:hover img': {
                      cursor: 'pointer',
                      transform: 'scale(1.1)',
                    },
                  }}
                >
                  <Link to={category.path}>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                        flexFlow: 'column',
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        zIndex: 1,
                        borderRadius: '2px',
                        backgroundImage:
                          'linear-gradient(0deg, rgba(0, 0, 0, 0.35), rgba(255, 255, 255, 0))',
                        '&:hover': { backgroundImage: 'none' },
                      }}
                    >
                      <Box component="div" p={3}>
                        <Typography
                          variant="h6"
                          color={theme.palette.common.white}
                          textAlign="center"
                          sx={{ textShadow: '0px 0px 1px #000' }}
                        >
                          {category.name}
                        </Typography>
                        <Button
                          variant="contained"
                          size="small"
                          sx={{
                            color: theme.palette.grey[100],
                            bgcolor: theme.palette.action.hover,
                            '&:hover': { bgcolor: theme.palette.common.black },
                          }}
                        >
                          Go to shop
                          <ArrowRightAltRoundedIcon />
                        </Button>
                      </Box>
                    </Box>

                    <Box
                      component="img"
                      src={category.thumbnailUrl}
                      alt="category-img"
                      sx={{
                        display: 'block',
                        width: '320px',
                        height: '390px',
                        borderRadius: '2px',
                        transition: 'transform 0.8s ease',
                      }}
                    />
                  </Link>
                </Box>
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </Box>
  );
}

export default Category;
