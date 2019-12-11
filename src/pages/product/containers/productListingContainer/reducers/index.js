import { productConstants } from '../constants';

const initialState = {
  max_id: 0,
  products_listing: []
};

export function productsFetch(state = initialState, action) {
  switch (action.type) {
    case productConstants.FETCH_SUCCESS:
      let maximum_id = 0;
      if (action.payload.data) {
        action.payload.data.forEach((product) => {
          if (product.Record.ID > maximum_id) {
            maximum_id = product.Record.ID;
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
    default:
      return state;
  }
}
