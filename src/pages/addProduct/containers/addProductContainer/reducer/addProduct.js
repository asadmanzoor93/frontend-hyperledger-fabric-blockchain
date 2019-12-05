import { addProductConstants } from '../constants/addProduct';

const initialState = {
  id: '',
  name: '',
  description: '',
  image: '',
  color: '',
  docType: '',
  quantity: 0,
  make: '',
  owner: '',
  price: 0
};

export function addProduct(state = initialState, action) {
  switch (action.type) {
    case addProductConstants.ADD_PRODUCT:
      return {
        ...state,
        ...action.payload
      };
    case addProductConstants.UPDATE_PRODUCT:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
}
