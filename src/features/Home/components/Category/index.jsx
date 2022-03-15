import { Box, Container, Grid, Skeleton, Typography, useTheme } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

Category.propTypes = {
  categories: PropTypes.array,
  loading: PropTypes.bool,
};

function Category({ categories = [], loading = true }) {
  const theme = useTheme();
  return (
    <Box mt={8}>
      <Container maxWidth="xl">
        <Grid container>
          <Grid item lg={12}>
            {loading ? (
              <Skeleton variant="text" width={250} height={32} />
            ) : (
              <Typography component="h2" variant="h4" mb={6} textAlign="center" fontWeight="500">
                Our popular categories
              </Typography>
            )}
          </Grid>
        </Grid>

        {loading ? (
          <Grid container spacing={4}>
            {Array.from({ length: 4 }, (_, index) => (
              <Grid key={index} item xs={6} sm={4} lg={3}>
                <Skeleton variant="rectangular" width={320} height={390} />
              </Grid>
            ))}
          </Grid>
        ) : (
          <Grid container spacing={4}>
            {categories.map((category, index) => (
              <Grid key={index} item xs={6} sm={6} lg={3}>
                <Box
                  sx={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    overflow: 'hidden',
                    borderRadius: '4px',
                    '&:hover img': {
                      cursor: 'pointer',
                      transform: 'scale(1.05)',
                    },
                  }}
                >
                  <Link to={category.path}>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'flex-end',
                        justifyContent: 'flex-start',
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        zIndex: 1,
                        backgroundImage: 'none',
                        '&:hover': {
                          backgroundImage:
                            'linear-gradient(0deg, rgba(0, 0, 0, 0.35), rgba(255, 255, 255, 0))',
                        },
                      }}
                    >
                      <Box component="div" p={2}>
                        <Typography
                          variant="h5"
                          mr="auto"
                          fontWeight={500}
                          textAlign="center"
                          color={theme.palette.common.white}
                          sx={{ textShadow: '0px 0px 1px #000' }}
                        >
                          {category.name}
                        </Typography>
                      </Box>
                    </Box>

                    <Box
                      component="img"
                      src={category.thumbnailUrl}
                      alt="category-img"
                      sx={{
                        display: 'block',
                        width: '100%',
                        height: '100%',
                        borderRadius: '4px',
                        transition: 'transform 0.5s ease',
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
