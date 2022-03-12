import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Box, Button, Grow, Slide, Typography, useTheme } from '@mui/material';
import PropTypes from 'prop-types';
import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

SliderItem.propTypes = {
  item: PropTypes.object,
  isLeftClick: PropTypes.bool,
  active: PropTypes.bool,
  index: PropTypes.number,
};

function SliderItem({ item = {}, index }) {
  const theme = useTheme();
  const [slideIcon, setSliceIcon] = useState(false);
  const containerRef = useRef(null);

  // Set slide in duration time.
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: (() => index !== 2 && '10%')(),
          right: '12%',
          transform: 'translateY(-50%)',
          maxWidth: '500px',
          p: 4,
          color: theme.palette.grey[900],
          textAlign: 'center',
        }}
      >
        <Typography variant="h3" sx={{ fontWeight: '600', textTransform: 'uppercase' }}>
          {item.title}
        </Typography>
        <Typography variant="body1" mt={2} sx={{ color: theme.palette.text.secondary }}>
          {item.description}
        </Typography>

        <Box mt={2} sx={{ '& a': { textDecoration: 'none' } }}>
          <Link to={item.path}>
            <Button
              variant="contained"
              onMouseOver={() => setSliceIcon(true)}
              onMouseLeave={() => setSliceIcon(false)}
              ref={containerRef}
              sx={{
                minWidth: '116px',
                minHeight: '37px',
                overflowX: 'hidden',
                bgcolor: theme.palette.grey[900],
                '&:hover': { bgcolor: theme.palette.common.black },
              }}
            >
              {slideIcon && (
                <Slide direction="right" in={slideIcon} container={containerRef.current}>
                  <ShoppingCartOutlinedIcon sx={{ mr: 1 }} />
                </Slide>
              )}

              {!slideIcon && (
                <Slide direction="left" in={!slideIcon} container={containerRef.current}>
                  <Typography
                    variant="subtitle2"
                    fontSize="1rem"
                    sx={{ color: theme.palette.common.white }}
                  >
                    Shop Now
                  </Typography>
                </Slide>
              )}
            </Button>
          </Link>
        </Box>
      </Box>

      <Box
        component="img"
        src={item.imgUrl}
        alt="slider-img"
        style={{
          display: 'block',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      ></Box>
    </Box>
  );
}

export default SliderItem;
