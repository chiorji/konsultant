import React from 'react';
import PropTypes from 'prop-types';

import UnAuthTopNav from '../Components/UnAuthTopNav';

const UnTemplate = ({children}) => {
  return (
    <>
      <UnAuthTopNav />
      {children}
    </>
  )
}

UnTemplate.propTypes = {
  children: PropTypes.node.isRequired
}

export default UnTemplate;
