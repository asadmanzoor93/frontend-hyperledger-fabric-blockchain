const axios = require('axios');

export const productService = {
  fetchProducts,
  addProduct
};
function fetchProducts() {
  // const url = 'https://9b7cc18d.ngrok.io/list-products';
  const url = 'http://5ddf59224a658b0014c48899.mockapi.io/products';
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    url
  };
  return axios(requestOptions);
}

function addProduct() {
  const url = 'https://9b7cc18d.ngrok.io/store-product';
  const requestOptions = {
    method: 'GET',
    url
  };
  return axios(requestOptions);
}
