import React from 'react';
import PropTypes from 'prop-types';

import ClientAuthTopNav from './ClientAuthTopNav';

const ClientAuthLayout = ({children}) => {
  return (
    <>
      <ClientAuthTopNav />
      {children}
    </>
  )
}

ClientAuthLayout.propTypes = {
  children: PropTypes.node.isRequired
}

export default ClientAuthLayout;
