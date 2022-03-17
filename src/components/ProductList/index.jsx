import React from 'react';
import PropTypes from 'prop-types';
import { Box, Container, Grid } from '@mui/material';
import Product from 'components/Product';

ProductList.propTypes = {
  products: PropTypes.array,
};

function ProductList({ products = [] }) {
  return (
    <Box mt={6}>
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          {products.map((product, index) => (
            <Grid item key={index} lg={3} sm={6} xs={6}>
              <Product product={product} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default ProductList;
