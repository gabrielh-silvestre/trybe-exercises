import React from 'react';
import PropTypes from 'prop-types';

export default function FormFeedback(props) {
  return (
    <div>
      {Object.entries(props.user).map(([key, value]) => (
        <>
          <h3>{key}</h3>
          <p>{value}</p>
        </>
      ))}
    </div>
  );
}

FormFeedback.propTypes = {
  user: PropTypes.object.isRequired,
};
