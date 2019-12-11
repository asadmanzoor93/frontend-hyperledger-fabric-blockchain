import { combineReducers } from 'redux';

import { productsFetch } from '../pages/product/containers/productListingContainer/reducers/index';
import { addProduct } from '../pages/addProduct/containers/addProductContainer/reducer';
import { updateProduct } from '../pages/updateProduct/containers/updateProductContainer/reducer';

export const rootReducer = combineReducers({
  PRODUCTS: productsFetch,
  ADD_PRODUCT: addProduct,
  UPDATE_PRODUCT: updateProduct
});
