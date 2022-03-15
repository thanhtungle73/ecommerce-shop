import { Box, Typography } from '@mui/material';
import { AUTH_TEXT_COLOR, IMG_PLACEHOLDER_URL, SALE_PRICE_COLOR } from 'constants';
import PropTypes from 'prop-types';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { formatPrice } from 'utils';

Product.propTypes = {
  products: PropTypes.object,
};

function Product({ product = {} }) {
  const navigate = useNavigate();
  const thumbnailUrl = product.thumbnailUrls[0] || IMG_PLACEHOLDER_URL;

  // Navigate to details page.
  const handleProductClick = () => {
    navigate(`/products/${product.id}`);
  };

  return (
    <Box sx={{ cursor: 'pointer' }} onClick={handleProductClick}>
      <Box component="img" src={thumbnailUrl} width="100%" height="100%" />

      <Box mt={1}>
        <Typography component="h4" variant="body2" fontWeight="500" color={AUTH_TEXT_COLOR}>
          {product.name}
        </Typography>

        <Box mt={1}>
          <Typography component="span" variant="subtitle1" fontWeight="500" mr={2}>
            {formatPrice(Number.parseFloat(product.salePrice))}
          </Typography>

          <Typography
            component="span"
            variant="body2"
            sx={{ textDecoration: 'line-through' }}
            color={SALE_PRICE_COLOR}
          >
            {formatPrice(Number.parseFloat(product.originalPrice))}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
// sx={{ textAlign: 'center' }}

export default Product;
