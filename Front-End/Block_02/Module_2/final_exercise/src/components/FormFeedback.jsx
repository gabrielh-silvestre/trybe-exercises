import React from 'react';
import PropTypes from 'prop-types';

export default function FormFeedback(props) {
  return (
    <section>
      {Object.entries(props.user).map(([key, value]) => (
        <div key={key}>
          <h3>{key}</h3>
          <p>{value}</p>
        </div>
      ))}
    </section>
  );
}

FormFeedback.propTypes = {
  user: PropTypes.object.isRequired,
};
