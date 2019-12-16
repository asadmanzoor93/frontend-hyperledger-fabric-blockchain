import { reviewProductConstants } from '../constants';

const initialState = {
  user_id: '',
  product_id: '',
  description: ''
};

export function reviewProduct(state = initialState, action) {
  switch (action.type) {
    case reviewProductConstants.UPDATE_REVIEW:
      return {
        ...state,
        ...action.payload
      };
    case reviewProductConstants.ADD_REVIEW:
      let product = action.product;

      return {
        ...state,
        id: product.Record.ID ? product.Record.ID : '',
        name: product.Record.name ? product.Record.name : '',
        description: product.Record.description ? product.Record.description : ''
      };
    default:
      return state;
  }
}
