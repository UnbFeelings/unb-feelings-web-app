import React from 'react';
import PropTypes from 'prop-types';

const DisplayError = ({ check, message }) => {
  if (check) {
    return (
      <span className="btn-danger">{message()}</span>
    );
  }

  return null;
};

DisplayError.propTypes = {
  check: PropTypes.bool.isRequired,
  message: PropTypes.func.isRequired,
};

export default DisplayError;
