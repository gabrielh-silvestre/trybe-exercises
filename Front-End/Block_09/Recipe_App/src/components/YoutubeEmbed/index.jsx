import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

function YoutubeEmbed({ url }) {
  return (
    <div className="video-container">
      <iframe
        data-testid="video"
        width="853"
        height="480"
        src={ `https://www.youtube.com/embed/${url.split('v=')[1]}` }
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write;
        encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
}

YoutubeEmbed.propTypes = {
  url: PropTypes.string.isRequired,
};

export default YoutubeEmbed;
