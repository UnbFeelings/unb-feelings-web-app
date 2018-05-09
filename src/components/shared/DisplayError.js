import React from 'react';

const DisplayError = ({ check, message }) => {
  if (check) {
    return (
      <span className="btn-danger">{message()}</span>
    );
  }

  return null;
};

export default DisplayError;
