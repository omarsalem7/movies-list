import React from 'react';
import { NavLink } from 'react-router-dom';

const MovieItem = ({ movie }) => {
  const { overview, backdrop_path, title, id } = movie;
  return (
    <div className="item">
      <NavLink to={`/movie/${id}`}>
        <h3>{title}</h3>
        <p>{overview.substring(0, 50)} ...</p>
        <img src={`https://image.tmdb.org/t/p/w500${backdrop_path}`} />
      </NavLink>
    </div>
  );
};

export default MovieItem;
