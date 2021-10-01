import types from './actionTypes';

export const getUsers = () => ({
  type: types.GET_USERS,
})

export const getUsersSuccess = (payload) => ({
  type: types.GET_USERS_SUCCESS,
  payload
})