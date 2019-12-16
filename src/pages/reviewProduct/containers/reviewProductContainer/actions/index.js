import { store } from 'react-notifications-component';

import { reviewProductConstants } from '../constants';
import { productService } from '../../../../../services';
import { history } from '../../../../../helpers';

const reviewProduct = (payload) => {
  return (dispatch) => {
    productService
      .updateProduct(payload)
      .then((productData) => {
        dispatch({
          type: reviewProductConstants.ADD_REVIEW,
          payload: productData.data
        });

        history.push('/');
        store.addNotification({
          title: 'Product Review',
          message: 'Product Reviewed Successfully',
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
            title: 'Product Review Failed',
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

export const reviewProductActions = {
  reviewProduct
};
