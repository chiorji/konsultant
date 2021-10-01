import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import * as action from '../store/konsultant/actions';

const Users = ({ getUsers, users }) => {
  
  useEffect(() => {
    getUsers()
    console.log(users)
  }, [ getUsers ]);
  
  return (
    <p>Users</p>
  )
}

const mapState = ({ konsultant }) => ({
  users: konsultant.users,
})

const mapDispatch = (dispatch) => ({
  getUsers: () => dispatch(action.getUsers())
})

export default connect(mapState, mapDispatch)(Users);
