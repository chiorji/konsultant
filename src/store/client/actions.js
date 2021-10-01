import types from './actionTypes';

/**
 * 
 * @param {object} payload date, title, description
 * @returns 
 */
export const schedule = (payload) => ({
  type: types.SCHEDULE,
  payload
})

/**
 * 
 * @param {string} payload meeting ID
 * @returns 
 */
export const cancelSchedule = (payload) => ({
  type: types.CANCEL_SCHEDULE,
  payload
})

export const getSchedules = (payload) => ({
  type: types.GET_SCHEDULES,
  payload
})

export const getScheduleSuccess = (payload) => ({
  type: types.GET_SCHEDULES_SUCCESS,
  payload
})

export const cancelScheduleSuccess = (payload) => ({
  type: types.CANCEL_SCHEDULES_SUCCESS,
  payload
})