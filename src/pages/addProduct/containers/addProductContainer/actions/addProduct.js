import { store } from 'react-notifications-component';

import { addProductConstants } from '../constants/addProduct';
import { productService } from '../../../../../services';

const addProduct = (payload) => {
  return (dispatch) => {
    productService
      .addProduct(payload)
      .then((productData) => {
        dispatch({
          type: addProductConstants.ADD_PRODUCT,
          payload: productData.data
        });
        store.addNotification({
          title: 'New Product Addition',
          message: 'New Product Added Successfully',
          type: 'success',
          insert: 'top',
          container: 'top-right',
          animationIn: ['animated', 'fadeIn'],
          animationOut: ['animated', 'fadeOut'],
          dismiss: {
            duration: 5000,
            onScreen: true
          }
        });
      })
      .catch((error) => {
        if (error.message) {
          store.addNotification({
            title: 'New Product Addition Failed',
            message: error.message,
            type: 'danger',
            insert: 'top',
            container: 'top-right',
            animationIn: ['animated', 'fadeIn'],
            animationOut: ['animated', 'fadeOut'],
            dismiss: {
              duration: 5000,
              onScreen: true
            }
          });
        }
      });
  };
};

const updateProduct = (payload) => {
  return (dispatch) => {
    productService
      .updateProduct(payload)
      .then((productData) => {
        dispatch({
          type: addProductConstants.UPDATE_PRODUCT,
          payload: productData.data
        });
        store.addNotification({
          title: 'Product Update',
          message: 'New Product Updated Successfully',
          type: 'success',
          insert: 'top',
          container: 'top-right',
          animationIn: ['animated', 'fadeIn'],
          animationOut: ['animated', 'fadeOut'],
          dismiss: {
            duration: 5000,
            onScreen: true
          }
        });
      })
      .catch((error) => {
        store.addNotification({
          title: 'Product Update Failed',
          message: error.message,
          type: 'response',
          insert: 'top',
          container: 'top-right',
          animationIn: ['animated', 'fadeIn'],
          animationOut: ['animated', 'fadeOut'],
          dismiss: {
            duration: 5000,
            onScreen: true
          }
        });
      });
  };
};

export const addProductActions = {
  addProduct,
  updateProduct
};
