import axiosClient from './axiosClient';

const productApi = {
  // Get all products list
  getAll(params) {
    const url = '/products';
    return axiosClient.get(url, { params: params });
  },

  getById(id) {
    const url = `/products/${id}`;
    return axiosClient.get(url);
  },

  add(data) {
    const url = '/products';
    return axiosClient.post(url, data);
  },

  update(data) {
    const url = `/products/${data.id}`;
    return axiosClient.patch(url, data);
  },

  remove(id) {
    const url = `/products/${id}`;
    return axiosClient.delete(url);
  },
};

export default productApi;
