import types from './actionTypes';

export const login = (payload) => ({
  type: types.LOGIN,
  payload
})

export const loginSuccess = (payload) => ({
  type: types.LOGIN_SUCCESS,
  payload
})

export const logout = () => ({
  type: types.LOGOUT,
})

export const signup = (payload) => ({
  type: types.SIGNUP,
  payload
})