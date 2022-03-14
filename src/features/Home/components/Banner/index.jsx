import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import { HOME_BANNER_IMG_URL } from 'constants';
import { Link } from 'react-router-dom';

Banner.propTypes = {};

function Banner(props) {
  return (
    <Box mt={8}>
      <Link to="/categories/autumn-collection">
        <Box component="img" src={HOME_BANNER_IMG_URL} sx={{ width: '100%' }}></Box>
      </Link>
    </Box>
  );
}

export default Banner;
