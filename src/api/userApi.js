import axiosClient from './axiosClient';

// Define the register and login api call
const userApi = {
  register(data) {
    const url = 'api/auth/register';
    return axiosClient.post(url, data);
  },

  login(data) {
    const url = 'api/auth/login';
    return axiosClient.post(url, data);
  },
};

export default userApi;
