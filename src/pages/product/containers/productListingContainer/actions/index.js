import { productConstants } from '../constants';
import { productService } from '../../../../../services';
import { store } from 'react-notifications-component';

export const productActions = {
  fetchProducts
};

function fetchProducts() {
  return (dispatch) => {
    productService
      .fetchProducts()
      .then((products) => {
        Promise.resolve(
          dispatch({
            type: productConstants.FETCH_SUCCESS,
            payload: products.data
          })
        );
      })
      .catch((error) => {
        dispatch({
          type: productConstants.FETCH_FAILURE,
          payload: error
        });
        if (error.message) {
          store.addNotification({
            title: 'There is an error fetching products listing!',
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
}
