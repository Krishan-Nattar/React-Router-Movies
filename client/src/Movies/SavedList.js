import React from 'react';
import {Link} from 'react-router-dom';

const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map((movie,index) => (
      <span className="saved-movie" key={index}><Link to={`/movies/${movie.id}`}>{movie.title}</Link></span>
    ))}
    <Link to="/" className="home-button">Home</Link>
  </div>
);

export default SavedList;
