import config from '../config';

const axios = require('axios');

export const productService = {
  fetchProducts,
  fetchUser,
  addProduct,
  updateProduct,
  purchaseProduct
};
function fetchProducts() {
  const url = config.BASE_URL + config.API_ENDPOINTS.FETCH_PRODUCTS;
  // const url = 'http://5ddf59224a658b0014c48899.mockapi.io/products';
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    url
  };
  return axios(requestOptions);
}

function fetchUser() {
  // const url = config.BASE_URL + config.API_ENDPOINTS.FETCH_USER;
  const url = 'http://5ddf59224a658b0014c48899.mockapi.io/user';
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    url
  };
  return axios(requestOptions);
}

function addProduct(product) {
  const { id, name, description, image, color, docType, make, price, quantity } = product;
  const url = config.BASE_URL + config.API_ENDPOINTS.STORE_PRODUCTS;

  let bodyFormData = new FormData();
  bodyFormData.set('id', id);
  bodyFormData.set('image', image);
  bodyFormData.set('name', name);
  bodyFormData.set('description', description);
  bodyFormData.set('color', color);
  bodyFormData.set('type', docType);
  bodyFormData.set('make', make);
  bodyFormData.set('price', price);
  bodyFormData.set('quantity', quantity);

  const requestOptions = {
    method: 'POST',
    withCredentials: false,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'X-Requested-With': 'XMLHttpRequest'
    },
    data: bodyFormData,
    url
  };
  return axios(requestOptions);
}

function updateProduct(product) {
  const url = config.BASE_URL + config.API_ENDPOINTS.STORE_PRODUCTS;
  const { id, name, description, image, color, docType, make, price, quantity } = product;

  let bodyFormData = new FormData();
  bodyFormData.set('id', id);
  bodyFormData.set('name', name);
  bodyFormData.set('description', description);
  bodyFormData.set('image', image);
  bodyFormData.set('color', color);
  bodyFormData.set('type', docType);
  bodyFormData.set('make', make);
  bodyFormData.set('price', price);
  bodyFormData.set('quantity', quantity);

  const requestOptions = {
    method: 'POST',
    withCredentials: true,
    headers: {
      Accept: '*/*',
      'Content-Type': 'application/x-www-form-urlencoded',
      'X-Requested-With': 'XMLHttpRequest'
    },
    data: bodyFormData,
    url
  };
  return axios(requestOptions);
}

function purchaseProduct(product_id, user_id) {
  const url = config.BASE_URL + config.API_ENDPOINTS.PURCHASE_PRODUCT;

  let bodyFormData = new FormData();
  bodyFormData.set('product_id', product_id);
  bodyFormData.set('user_id', user_id);

  const requestOptions = {
    method: 'POST',
    withCredentials: false,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'X-Requested-With': 'XMLHttpRequest'
    },
    data: bodyFormData,
    url
  };
  return axios(requestOptions);
}
