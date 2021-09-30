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

AuthTemplate.propTypes = {
  children: PropTypes.node.isRequired
}

export default AuthTemplate;
