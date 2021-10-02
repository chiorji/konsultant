import types from './actionTypes';

export const getUsers = () => ({
  type: types.GET_USERS,
})

export const getUsersSuccess = (payload) => ({
  type: types.GET_USERS_SUCCESS,
  payload
})

export const deleteUser = (payload) => ({
  type: types.K_DELETE_USER,
  payload
})

export const deleteUserSuccess = (payload) => ({
  type: types.K_DELETE_USER_SUCCESS,
  payload
})

export const getSchedules = () => ({
  type: types.K_GET_SCHEDULES,
})

export const getSchedulesSuccess = (payload) => ({
  type: types.K_GET_SCHEDULES_SUCCESS,
  payload
})

export const cancelSchedule = (payload) => ({
  type: types.K_CANCEL_SCHEDULE,
  payload
})

export const cancelScheduleSuccess = (payload) => ({
  type: types.K_CANCEL_SCHEDULE_SUCCESS,
  payload
})