import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function AlbumsList({
  artworkUrl100,
  artistName,
  collectionId,
  collectionName,
}) {
  return (
    <section>
      <Link
        to={ `/album/${collectionId}` }
        data-testid={ `link-to-album-${collectionId}` }
      >
        <img src={ artworkUrl100 } alt={ artistName } />
        <div>
          <h3>{`Álbum ${collectionName}`}</h3>
          <h4>{artistName}</h4>
        </div>
      </Link>
    </section>
  );
}

AlbumsList.propTypes = {
  collectionName: PropTypes.string.isRequired,
  artworkUrl100: PropTypes.string.isRequired,
  artistName: PropTypes.string.isRequired,
  collectionId: PropTypes.number.isRequired,
};
