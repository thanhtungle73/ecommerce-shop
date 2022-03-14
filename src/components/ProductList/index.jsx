import React from 'react';
import PropTypes from 'prop-types';
import { Box, Container, Grid } from '@mui/material';
import Product from 'components/Product';
import { products } from '../../assets/fake-products';

ProductList.propTypes = {};

function ProductList(props) {
  return (
    <Box mt={4}>
      <Container maxWidth="xl">
        <Grid container lg={3} sm={6} xs={6}>
          <Grid item>
            {products.map((product, index) => {
              <Product key={index} product={product} />;
            })}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ProductList;
