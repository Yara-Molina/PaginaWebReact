import React, { useState } from 'react';


function Home() {
  const [hovered, setHovered] = useState(null);

  const peliculas = [
    {
      id: 1,
      image: 'https://m.media-amazon.com/images/M/MV5BMzI0NmVkMjEtYmY4MS00ZDMxLTlkZmEtMzU4MDQxYTMzMjU2XkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_.jpg',
    },
    {
      id: 2,
      image: 'https://m.media-amazon.com/images/I/81XhIuo8SJL._AC_UF894,1000_QL80_.jpg',
    },
    {
      id: 3,
      image: 'https://play-lh.googleusercontent.com/sU5ma8h0Wm2zyon4UV6H72J724y9INJkiWkiEV1YYgeNXDKX7d1dnNE53ajDssAc_e_Wrg',
    }
  ];

  return (
    <div className="home-container">
      <div className="topbar">
        <a className="title">PELIPLUS</a>
      </div>
      <div className="image-container">
        {peliculas.map(pelicula => (
          <div 
            key={pelicula.id} 
            className="pelicula"
            onMouseEnter={() => setHovered(pelicula.id)}
            onMouseLeave={() => setHovered(null)}
          >
            <img src={pelicula.image} alt={`Pelicula ${pelicula.id}`} className="bottom-image" />
            {hovered === pelicula.id && (
              <div className="hover-overlay">
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;

