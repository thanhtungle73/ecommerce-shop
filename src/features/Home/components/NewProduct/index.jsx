import React from 'react';
import PropTypes from 'prop-types';
import { Box, Container, Grid, Typography } from '@mui/material';
import ProductList from '../../../../components/ProductList';

NewProduct.propTypes = {};

function NewProduct(props) {
  return (
    <Box mt={8}>
      <Container maxWidth="xl">
        <Grid container>
          <Grid item lg={12}>
            <Typography variant="h5" textAlign="center" textTransform="uppercase">
              New arrivals
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <ProductList />
    </Box>
  );
}

export default NewProduct;
