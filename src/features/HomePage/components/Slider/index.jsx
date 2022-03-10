import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Box, IconButton, MobileStepper } from '@mui/material';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import SliderItem from '../SliderItem';

Slider.propTypes = {
  data: PropTypes.array,
};

function Slider({ data, timeOut = null }) {
  const [activeSlice, setActiveSlice] = useState(0);
  const [isLeftClick, setIsLeftClick] = useState(false);
  const timeOutAuto = timeOut || 5000;

  // Increase index when click next.
  const nextSlide = () => {
    setIsLeftClick(false);
    const index = activeSlice + 1 >= data.length ? 0 : activeSlice + 1;
    setActiveSlice(index);
  };

  // Decrease index when click previous button.
  const prevSlide = () => {
    const index = activeSlice - 1 < 0 ? data.length - 1 : activeSlice - 1;
    setActiveSlice(index);
    setIsLeftClick(true);
  };

  // Autoplay slides.
  useEffect(() => {
    const autoPlay = setTimeout(() => {
      nextSlide();
    }, timeOutAuto);

    // Clear Timeout.
    return () => {
      clearTimeout(autoPlay);
    };
  }, [nextSlide, timeOutAuto, data]);

  return (
    <Box sx={{ position: 'relative', height: '43vw' }} className="active">
      {data.map((item, index) => (
        <SliderItem
          key={index}
          item={item}
          isLeftClick={isLeftClick}
          active={activeSlice === index}
          index={index}
        />
      ))}

      <IconButton
        size="large"
        onClick={prevSlide}
        sx={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', ml: 4 }}
      >
        <ArrowBackIosIcon />
      </IconButton>
      <IconButton
        size="large"
        onClick={nextSlide}
        sx={{
          position: 'absolute',
          top: '50%',
          right: 0,
          mr: 4,
          transform: 'translateY(-50%)',
        }}
      >
        <ArrowForwardIosIcon />
      </IconButton>

      <MobileStepper
        variant="dots"
        steps={data.length}
        activeStep={activeSlice}
        sx={{
          justifyContent: 'center',
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
          backgroundColor: 'transparent',
        }}
      />
    </Box>
  );
}

export default Slider;
