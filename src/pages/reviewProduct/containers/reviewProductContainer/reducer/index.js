import { reviewProductConstants } from '../constants';

const initialState = {
  id: '',
  user_id: '',
  review_detail: ''
};

export function reviewProduct(state = initialState, action) {
  switch (action.type) {
    case reviewProductConstants.UPDATE_REVIEW:
      return {
        ...state,
        ...action.payload
      };
    case reviewProductConstants.ADD_REVIEW:
      return {
        ...state,
        id: action.payload.ID ? action.payload.ID : '',
        user_id: action.payload.user_id ? action.payload.user_id : '',
        review_detail: action.payload.review_detail ? action.payload.review_detail : ''
      };
    default:
      return state;
  }
}
