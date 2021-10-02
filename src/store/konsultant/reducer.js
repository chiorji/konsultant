import types from './actionTypes';

const initialState = {
  users: [],
  links: [],
  totalUsers: null,
  schedules: [],
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
    
    case types.K_GET_SCHEDULES_SUCCESS:
      return {
        ...state,
        schedules: action.payload
      }
    
    case types.K_CANCEL_SCHEDULE_SUCCESS:
      return {
        ...state,
        schedules: state.schedules.filter(i => i.id !== action.payload)
      }
    
    default:
      return state;
  }
}

export default konsultantReducer;
