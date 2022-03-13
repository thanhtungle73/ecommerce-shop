import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import { HOME_BANNER_IMG_URL } from 'constants';

Banner.propTypes = {};

function Banner(props) {
  return (
    <Box mt={8}>
      <Box component="img" src={HOME_BANNER_IMG_URL} sx={{ width: '100%' }}></Box>
    </Box>
  );
}

export default Banner;
