import types from './actionTypes';

const initialState = {
  isLoggedIn: false,
  fullname: '',
  email:   null,
  token:  null,
  role: 'USER',
  id: null,
  avatar: null,
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        ...action.payload,
      }
    
    case types.LOGOUT:
      return initialState;
    
    default:
      return state;
  }
}

export default authReducer;
