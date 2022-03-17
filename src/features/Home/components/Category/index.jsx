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
              <Typography
                component="h2"
                variant="h5"
                mb={6}
                textAlign="center"
                textTransform="uppercase"
              >
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
          <Grid container spacing={2}>
            {categories.map((category, index) => (
              <Grid key={index} item xs={6} sm={6} lg={3}>
                <Link to={category.path} style={{ textDecoration: 'none' }}>
                  <Box
                    sx={{
                      position: 'relative',
                      width: '100%',
                      height: '90%',
                      overflow: 'hidden',
                      borderRadius: '2px',
                      '&:hover img': {
                        cursor: 'pointer',
                        transform: 'scale(1.05)',
                      },
                    }}
                  >
                    <Box
                      sx={{
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
                    ></Box>

                    <Box
                      component="img"
                      src={category.thumbnailUrl}
                      alt="category-img"
                      sx={{
                        display: 'block',
                        width: '100%',
                        height: '100%',
                        borderRadius: '2px',
                        transition: 'transform 0.5s ease',
                      }}
                    />
                  </Box>
                  <Box component="div" p={2}>
                    <Typography
                      variant="body2"
                      mr="auto"
                      fontWeight={500}
                      textAlign="center"
                      color={theme.palette.text.primary}
                      sx={{ textTransform: 'uppercase' }}
                    >
                      {category.name}
                    </Typography>
                  </Box>
                </Link>
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </Box>
  );
}

export default Category;
