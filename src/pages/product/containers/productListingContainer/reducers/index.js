import { productConstants } from '../constants';

const initialState = {
  products_listing: []
};

export function productsFetch(state = initialState, action) {
  switch (action.type) {
    case productConstants.FETCH_SUCCESS:
      return {
        ...state,
        products_listing: action.payload.data
      };
    case productConstants.FETCH_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
}
