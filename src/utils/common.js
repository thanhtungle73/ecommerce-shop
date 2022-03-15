export const formatPrice = (number) =>
  new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(number);
