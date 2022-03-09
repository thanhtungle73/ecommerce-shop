import { Box, Button, Slide, Typography, useTheme } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

SliderItem.propTypes = {
  item: PropTypes.object,
};

function SliderItem({ item = {}, isLeftClick, active }) {
  const theme = useTheme();
  return (
    <Slide
      direction={isLeftClick ? 'right' : 'left'}
      in={active}
      timeout={theme.transitions.duration.standard}
    >
      <Box
        sx={{
          display: active ? 'block' : 'none',
          width: '100%',
          height: '100%',
        }}
      >
        <Box sx={{ position: 'absolute' }}>
          <Typography>{item.title}</Typography>
          <Typography>{item.description}</Typography>

          <Box>
            <Link to={item.path}>
              <Button variant="contained">Shop Now</Button>
            </Link>
          </Box>
        </Box>

        <Box
          component="img"
          src={item.imgUrl}
          style={{
            width: '100%',
            height: '100%',
          }}
        />
      </Box>
    </Slide>
  );
}

export default SliderItem;
