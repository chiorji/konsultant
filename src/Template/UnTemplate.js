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

export const UnTempOthers = ({ children }) => {
  return (
    <>
      <UnAuthTopNav color="primary.light" textColor="#fff" />
      {children}
    </>
  )
}

UnTemplate.propTypes = {
  children: PropTypes.node.isRequired
}

export default UnTemplate;
