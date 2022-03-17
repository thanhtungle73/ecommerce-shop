import { Box, Button, ButtonGroup, Fade, Grow, Tooltip, Typography, useTheme } from '@mui/material';
import { products } from 'assets/fake-products';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import { AUTH_TEXT_COLOR, IMG_PLACEHOLDER_URL, SALE_PRICE_COLOR } from 'constants';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { formatPrice } from 'utils';

Product.propTypes = {
  products: PropTypes.object,
};

function Product({ product = {} }) {
  const navigate = useNavigate();
  const theme = useTheme();
  const [productActions, setProductActions] = useState(false);
  const primaryThumbnailUrl = product.thumbnailUrls[0] || IMG_PLACEHOLDER_URL;
  const secondaryThumbnailUrl = product.thumbnailUrls[1] || IMG_PLACEHOLDER_URL;

  // Navigate to details page.
  const handleProductClick = () => {
    navigate(`/products/${product.id}`);
  };

  const handleProductMouseOver = () => {
    setProductActions(true);
  };

  const handleProductMouseLeave = () => {
    setProductActions(false);
  };

  return (
    <Box
      mb={4}
      sx={{ cursor: 'pointer', borderRadius: '2px' }}
      onClick={handleProductClick}
      onMouseOver={handleProductMouseOver}
      onMouseLeave={handleProductMouseLeave}
    >
      <Box
        sx={{
          position: 'relative',
          '&:hover img:nth-of-type(1)': { opacity: 0 },
          '&:hover img:nth-of-type(2)': { opacity: 1 },
        }}
      >
        <Box
          sx={{
            position: 'relative',
            height: '100%',
          }}
        >
          <Box
            component="img"
            src={primaryThumbnailUrl}
            width="100%"
            height="100%"
            sx={{
              display: 'block',
              position: 'absolute',
              zIndex: 1,
              borderRadius: '2px',
              transition: '0.4s',
            }}
          />
          <Box
            component="img"
            src={secondaryThumbnailUrl}
            width="100%"
            height="100%"
            sx={{ display: 'block', borderRadius: '2px', transition: '0.4s' }}
          />
        </Box>

        <Box sx={{ position: 'absolute', top: '0%', height: '100%', width: '100%', zIndex: 2 }}>
          {
            <Box
              mt={2}
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                transition: 'opacity 0.35s ease',
                opacity: (() => (productActions ? 0 : 1))(),
              }}
            >
              {product.isNew && (
                <Typography
                  variant="subtitle2"
                  color={theme.palette.common.white}
                  sx={{
                    bgcolor: theme.palette.grey[900],
                    padding: '2px 12px',
                    borderRadius: '2px',
                  }}
                >
                  NEW
                </Typography>
              )}

              {product.promotionPercent && (
                <Typography
                  variant="subtitle2"
                  color={theme.palette.common.white}
                  sx={{
                    bgcolor: SALE_PRICE_COLOR,
                    padding: '2px 12px',
                    ml: 'auto',
                    borderRadius: '2px',
                  }}
                >
                  {`-${product.promotionPercent}%`}
                </Typography>
              )}
            </Box>
          }
          <Grow
            in={productActions}
            style={{ transformOrigin: '50% 100% 0' }}
            {...(productActions ? { timeout: 500 } : {})}
          >
            <Box
              sx={{
                position: 'absolute',
                right: '1%',
                bottom: '5%',
              }}
            >
              {productActions && (
                <Box
                  size="small"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                  }}
                >
                  <Tooltip title="Quick View" placement="right">
                    <Button
                      sx={{
                        mb: 1,
                        bgcolor: theme.palette.common.white,
                        color: theme.palette.common.black,
                        '&:hover': {
                          color: theme.palette.common.white,
                          bgcolor: theme.palette.common.black,
                        },
                      }}
                    >
                      <RemoveRedEyeOutlinedIcon />
                    </Button>
                  </Tooltip>

                  <Tooltip title="Like" placement="right">
                    <Button
                      sx={{
                        mb: 1,
                        bgcolor: theme.palette.common.white,
                        color: theme.palette.common.black,
                        '&:hover': {
                          color: theme.palette.common.white,
                          bgcolor: theme.palette.common.black,
                        },
                      }}
                    >
                      <FavoriteBorderOutlinedIcon />
                    </Button>
                  </Tooltip>

                  <Tooltip title="Add to cart" placement="right">
                    <Button
                      sx={{
                        mb: 1,
                        bgcolor: theme.palette.common.white,
                        color: theme.palette.common.black,
                        '&:hover': {
                          color: theme.palette.common.white,
                          bgcolor: theme.palette.common.black,
                        },
                      }}
                    >
                      <ShoppingBasketOutlinedIcon />
                    </Button>
                  </Tooltip>
                </Box>
              )}
            </Box>
          </Grow>
        </Box>
      </Box>

      <Box mt={2} sx={{ textAlign: 'center' }}>
        <Typography component="h4" variant="body2" fontWeight="500" color={AUTH_TEXT_COLOR}>
          {product.name}
        </Typography>

        <Box mt={1}>
          <Typography component="span" variant="subtitle1" fontWeight="500" mr={2}>
            {formatPrice(Number.parseFloat(product.salePrice))}
          </Typography>

          {product.isPromotion && (
            <Typography
              component="span"
              variant="body2"
              color={SALE_PRICE_COLOR}
              sx={{ textDecoration: 'line-through' }}
            >
              {formatPrice(Number.parseFloat(product.originalPrice))}
            </Typography>
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default Product;
