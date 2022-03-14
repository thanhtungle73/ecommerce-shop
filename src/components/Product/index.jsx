import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';

Product.propTypes = {
  products: PropTypes.object,
};

function Product({ products = {} }) {
  return <Box></Box>;
}

export default Product;
