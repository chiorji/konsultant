/* eslint-disable import/no-anonymous-default-export */
let BASE_PATH = 'http://localhost:3001';
// if (process.env.NODE_ENV === 'production') {
//   BASE_PATH = process.env.REACT_APP_BASE_PATH;
// }

export default {
  login: ({email, password}) => ({
    url: `${BASE_PATH}/clients?email=${email}&password=${password}`,
  }),

  signup: (data) => ({
    url: `${BASE_PATH}/clients`,
    data
  }),

  schedule: (data) => ({
    url: `${BASE_PATH}/schedules`,
    data
  }),

  getSchedules: (data) => ({
    url: `${BASE_PATH}/schedules?clientId=${data}`,
  }),

  cancelSchedule: (data) => ({
    url: `${BASE_PATH}/schedules/${data}`
  }),

  getUsers: (data) => ({
    url: `${BASE_PATH}/clients?_page=1&_limit=10`
  })
}