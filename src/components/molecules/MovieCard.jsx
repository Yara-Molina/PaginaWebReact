import React from 'react';
import './MovieCard.css';

const MovieCard = ({ pelicula }) => {
  return (
    <div className="pelicula">
      <img src={pelicula.img} alt={pelicula.title} className="bottom-image" />
      <h4>{pelicula.title}</h4>
      <div className="descripcion">
        <p>{pelicula.description}</p>
      </div>
    </div>
  );
};

export default MovieCard;
