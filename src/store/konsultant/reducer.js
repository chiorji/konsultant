import types from './actionTypes';

const initialState = {
  users: [],
  links: [],
  totalUsers: null,
}

const konsultantReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_USERS_SUCCESS:
      return {
        ...state,
        totalUsers: action.payload.count,
        users: action.payload.users,
        links: action.payload.links,
      }
    
    default:
      return state;
  }
}

export default konsultantReducer;
