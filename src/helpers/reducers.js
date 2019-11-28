import { combineReducers } from 'redux';

import { productsFetch } from '../pages/product/containers/productListingContainer/reducers/index';

export const rootReducer = combineReducers({
  PRODUCTS: productsFetch
});
