import { productConstants } from '../constants';

const initialState = {
  max_id: 0,
  products_listing: []
};

const initialUserState = {
  user_id: 'ASAD12',
  name: 'Asad Manzoor',
  credit: 2000,
  purchased_product: [],
  product_reviews: []
};

export function productsFetch(state = initialState, action) {
  switch (action.type) {
    case productConstants.FETCH_SUCCESS:
      let maximum_id = 0;
      if (action.payload.data) {
        action.payload.data.forEach((product) => {
          let product_id = product.Record.id.replace('ID', '');
          product_id = parseInt(product_id);
          if (product_id > maximum_id) {
            maximum_id = product_id;
          }
        });
      }

      return {
        ...state,
        max_id: parseInt(maximum_id) + 1,
        products_listing: action.payload.data ? action.payload.data : []
      };
    case productConstants.FETCH_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    case productConstants.PURCHASE_PRODUCT_SUCCESS:
      return {
        ...state,
        error: action.payload
      };
    case productConstants.PURCHASE_PRODUCT_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
}

export function userFetch(state = initialUserState, action) {
  switch (action.type) {
    case productConstants.FETCH_USER_SUCCESS:
      return {
        ...state,
        user_id: action.payload.user_id,
        name: action.payload.name,
        credit: action.payload.credit,
        purchased_product: action.payload.purchased_product,
        product_reviews: action.payload.product_reviews
      };
    case productConstants.FETCH_USER_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
}
