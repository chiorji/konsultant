/* eslint-disable import/no-anonymous-default-export */
let BASE_PATH = process.env.REACT_APP_BASE_PATH_LOC;
if (process.env.NODE_ENV === 'production') {
  BASE_PATH = process.env.REACT_APP_BASE_PATH;
}

export default {
  login: (data) => ({
    url: `${BASE_PATH}/auth/login`,
    data
  }),

  signup: (data) => ({
    url: `${BASE_PATH}/auth/signup`,
    data
  })
}