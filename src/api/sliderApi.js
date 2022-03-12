import axiosClient from './axiosClient';

// Define the register and login api call
const sliderApi = {
  getAllSliders(params) {
    const url = '/sliders';
    return axiosClient.get(url, { params: params });
  },

  getSliderById(id) {
    const url = `/sliders/${id}`;
    return axiosClient.get(url);
  },
};

export default sliderApi;
