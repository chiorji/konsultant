/* eslint-disable import/no-anonymous-default-export */
let BASE_PATH =  'http://localhost:3001' //process.env.PORT || 3001;
if (process.env.NODE_ENV === 'production') {
  BASE_PATH = 'https://kkserver.herokuapp.com'
}

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

  // TODO: Implements pagination
  getUsers: (data) => ({
    url: `${BASE_PATH}/clients?_page=1&_limit=10`
  }),

  listSchedules: () => ({
    url: `${BASE_PATH}/schedules`
  }),

  // Without pagination
  listUsers: () => ({
    url: `${BASE_PATH}/clients`
  }),

  deleteUser: (id) => ({
    url: `${BASE_PATH}/clients/${id}`
  })
}