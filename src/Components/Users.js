import React, { useEffect } from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Button } from '@mui/material';

import * as action from '../store/konsultant/actions';

const Users = ({ getUsers, users, total, links, deleteUser }) => {
  
  useEffect(() => {
    getUsers()
  }, [ getUsers ]);
  
  return (
    <Box>
      <Typography variant="h4" component="h2">
        {users && users.length.toString()} {users && users.length > 1 ? 'Users' : 'User'}</Typography>
        {users && <TablerUserList users={users} delete={deleteUser}/>}
    </Box>
  )
}

function TablerUserList(props) {
  return (
    <Paper sx={{ width: '100%', overflow: 'hidden', my: 3 }}>
      <TableContainer>
        <Table>
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>Full Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Gender</TableCell>
              <TableCell>Appointments</TableCell>
              <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.users.map((user, i) => (
            <TableRow key={i}>
              <TableCell>
                <img src={user.avatar} alt={user.fullname}
                  width='40px'
                  height='40px'/>
              </TableCell>
              <TableCell>{user.fullname}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.gender}</TableCell>
              <TableCell>
                <Button size="small"
                  sx={{
                    textTransform: 'none',
                    fontSize: "14px",
                }}>View</Button>
              </TableCell>
              <TableCell>
                <Button size="small"
                  sx={{
                    color: 'warning.light',
                    fontSize: "14px",
                    textTransform: 'none'
                  }}
                  onClick={()=> props.delete(user.id)}
                >Delete User</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </TableContainer>
    </Paper>
  )
}

const mapState = ({ konsultant }) => ({
  users: konsultant.users,
  total: konsultant.totalUsers,
  links: konsultant.links
})

const mapDispatch = (dispatch) => ({
  getUsers: () => dispatch(action.getUsers()),
  deleteUser: (payload) => dispatch(action.deleteUser(payload))
})

export default connect(mapState, mapDispatch)(Users);
