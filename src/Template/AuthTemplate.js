import React from 'react';
import PropTypes from 'prop-types';

import ClientAuthTopNav from '../Components/ClientAuthTopNav';

const AuthTemplate = ({children}) => {
  return (
    <>
      <ClientAuthTopNav />
      {children}
    </>
  )
}

export const AdminTemp = ({children}) => {
  return (
    <>
      <ClientAuthTopNav />
      {children}
    </>
  )
}

AuthTemplate.propTypes = {
  children: PropTypes.node.isRequired
}

AdminTemp.propTypes = {
  children: PropTypes.node.isRequired
}

export default AuthTemplate;
