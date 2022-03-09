import React from 'react';
import PropTypes from 'prop-types';
import Slider from './components/Slider';
import sliderData from '../../assets/fake-data-api/slider';

HomePageFeature.propTypes = {};

function HomePageFeature(props) {
  return (
    <div>
      <Slider data={sliderData}></Slider>
    </div>
  );
}

export default HomePageFeature;
