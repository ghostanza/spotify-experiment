import React from 'react';
import {Link} from 'react-router-dom';

class GenreArtists extends React.Component {
  render() {
    return (
      <div className="results-container">
        <ul>
          { this.props.artists.map((artist) => {
            return (
              <li key={artist.id} style={{'backgroundImage' : artist.images.length >= 2 && artist.images[1].url ? (`url(${artist.images[1].url})`) : ('none')}}>
                <Link to={`/artist/${artist.id}`}>
                  <span className='genre-hover'>{artist.name}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    );
  }

}

export default GenreArtists;
