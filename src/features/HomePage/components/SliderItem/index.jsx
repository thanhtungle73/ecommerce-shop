import { Box, Button, IconButton, Slide, Typography, useTheme } from '@mui/material';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

SliderItem.propTypes = {
  item: PropTypes.object,
  isLeftClick: PropTypes.bool,
  active: PropTypes.bool,
  index: PropTypes.number,
};

function SliderItem({ item = {}, isLeftClick, active, index }) {
  const theme = useTheme();
  const [slideIcon, setSliceIcon] = useState(false);
  return (
    <Slide direction={isLeftClick ? 'right' : 'left'} in={active} timeout={900}>
      <Box
        sx={{
          display: active ? 'block' : 'none',
          width: '100%',
          height: '100%',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: (() => index !== 2 && '10%')(),
            right: '14%',
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
                sx={{
                  bgcolor: theme.palette.common.black,
                  minWidth: '108px',
                  overflow: 'hidden',
                  '&:hover': { bgcolor: theme.palette.grey[800] },
                }}
              >
                {slideIcon && (
                  <Slide direction="right" in={slideIcon}>
                    <ShoppingCartOutlinedIcon sx={{ mr: 1 }} />
                  </Slide>
                )}
                {!slideIcon && 'Shop Now'}
              </Button>
            </Link>
          </Box>
        </Box>

        <Box
          component="div"
          style={{
            width: '100%',
            height: '100%',
            background: `url(${item.imgUrl}) no-repeat top/cover`,
            pt: '43vw',
          }}
        ></Box>
      </Box>
    </Slide>
  );
}

export default SliderItem;
