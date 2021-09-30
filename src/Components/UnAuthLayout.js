import React from 'react';
import PropTypes from 'prop-types';

import UnAuthTopNav from './UnAuthTopNav';

const UnAuthLayout = ({children}) => {
  return (
    <>
      <UnAuthTopNav />
      {children}
    </>
  )
}

UnAuthLayout.propTypes = {
  children: PropTypes.node.isRequired
}

export default UnAuthLayout;
