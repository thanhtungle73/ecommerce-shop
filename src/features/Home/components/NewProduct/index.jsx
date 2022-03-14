import React from 'react';
import PropTypes from 'prop-types';
import { Box, Container, Grid, Typography } from '@mui/material';
import ProductList from '../../../../components/ProductList';

NewProduct.propTypes = {};

function NewProduct(props) {
  return (
    <Box mt={4}>
      <Container maxWidth="xl">
        <Grid container>
          <Grid item>
            <Typography variant="h5" fontWeight="500">
              New Arrivals
            </Typography>
          </Grid>
        </Grid>
        <ProductList />
      </Container>
    </Box>
  );
}

export default NewProduct;
