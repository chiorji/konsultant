import types from './actionTypes';

const initialState = {
  schedules: [],
};

const clientReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_SCHEDULES_SUCCESS:
      return {
        ...state,
        schedules: [...action.payload]
      }
    
    case types.CANCEL_SCHEDULES_SUCCESS:
      return {
        ...state,
        schedules: state.schedules.filter(i => i.id !== action.payload)
      }
    
    default:
      return state;
  }
}

export default clientReducer;
