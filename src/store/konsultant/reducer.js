import types from './actionTypes';

const initialState = {
  users: [],
}

const konsultantReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload
      }
    
    default:
      return state;
  }
}

export default konsultantReducer;
