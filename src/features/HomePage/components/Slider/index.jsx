import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import SliderItem from '../SliderItem';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

Slider.propTypes = {
  data: PropTypes.array,
};

function Slider({ data }) {
  return (
    <Box
      sx={{
        position: 'relative',
        height: '43vw',
      }}
    >
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <SliderItem item={item} index={index} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}

export default Slider;
