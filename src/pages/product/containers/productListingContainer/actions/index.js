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
        if (error.response) {
          store.addNotification({
            title: 'There was an error fetching products listing!',
            message: error.response,
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
