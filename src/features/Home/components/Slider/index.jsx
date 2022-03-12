import { Box, Skeleton } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import SliderItem from '../SliderItem';

Slider.propTypes = {
  slidersData: PropTypes.array,
  loading: PropTypes.bool,
};

function Slider({ slidersData = [], loading = true }) {
  return (
    <Box
      sx={{
        position: 'relative',
        height: '43vw',
      }}
    >
      {loading && <Skeleton variant="rectangular" width="100%" height="100%" />}

      {!loading && (
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {slidersData.map((item, index) => (
            <SwiperSlide key={index}>
              <SliderItem item={item} index={index} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </Box>
  );
}

export default Slider;
