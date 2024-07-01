import React, { useState } from 'react';
import simio from '../assets/simio.jpg';
import volver from '../assets/volver.jpg'
import trek from '../assets/trek.jpg'

function Peliculas() {
  const [hovered, setHovered] = useState(null);

  const peliculas = [
    {
      id: 1,
      src: "https://m.media-amazon.com/images/S/pv-target-images/7bb42965959fdad07a1b74e8473c4531202173216fd3846ea2d3cb172f5be742.jpg",
      alt: "ROUGE ONE",
      title: "STAR WARS EPISODE III",
      description: "Seducido por el lado oscuro, Anakin Skywalker se rebela contra su mentor, Obi-Wan Kenobi, y se convierte en Darth Vader.",
    },
    {
      id: 2,
      src: "https://media0047.elcinema.com/uploads/_320x_fde0b8cc1f22be57cca22b77edf2c765aacaf4edd42ac85f82d436c1a6e8407f.jpg",
      alt: "PAUL",
      title: "PAUL",
      description: "Dos frikis de la ciencia ficción encuentran a un extraterrestre llamado Paul mientras viajan por Estados Unidos.",
    },
    {
      id: 3,
      src: "https://th.bing.com/th/id/R.853ce111bf827dfc08735912122ad118?rik=V1lw5H77nqCylQ&pid=ImgRaw&r=0",
      alt: "PELÍCULA SIN NOMBRE",
      title: "ROUGE ONE",
      description: "El Imperio va a construir una estación espacial capaz de destruir planetas, conocida como la Estrella de la Muerte. Los rebeldes se embarcan en una misión extraordinaria: robar los planos y sabotear la estación.",
    },
    {
      id: 4,
      src: "https://images.justwatch.com/poster/125452651/s718/el-origen-del-planeta-de-los-simios.jpg",
      alt: "PLANETA DE LOS SIMIOS",
      title: "PLANETA DE LOS SIMIOS",
      description: "Los simios dominan el planeta, pero una colonia de humanos ha sobrevivido al virus. César, el líder de los primates, debe elegir entre tratar de cooperar con los humanos o intentar exterminarlos.",
    },
    {
      id: 5,
      src: "https://m.media-amazon.com/images/I/71MApbQkHvL._AC_UF894,1000_QL80_.jpg",
      alt: "STAR TREK",
      title: "STAR TREK",
      description: "La tripulación de la nave espacial Enterprise es llamada de vuelta a casa y descubre a una fuerza imparable dentro de su propia organización que ha destruido a la Flota Estelar y todo lo que representa, dejando a la Tierra en un estado de crisis. El capitán James T. Kirk encabeza a su gente en una cacería humana en un mundo en guerra para capturar un arma de destrucción masiva que los lleva a todos a un épico juego de ajedrez de vida o muerte.",
    },
    {
      id: 6,
      src: "https://images.justwatch.com/poster/311236837/s718/regreso-al-futuro.jpg",
      alt: "VOLVER AL FUTURO",
      title: "VOLVER AL FUTURO",
      description: "La franquicia de Back to the Future se compone principalmente de un conjunto de tres películas de ciencia ficción estadounidenses dirigidas por Robert Zemeckis, producidas por Steven Spielberg, Bob Gale y Neil Canton y distribuidas por Universal Pictures. Sus protagonistas son Michael J. Fox y Christopher Lloyd.",
    },
  ];

  return (
<div className="peliculas-container">
      <div className="topbar">
        <a className="title">PELIPLUS</a>
      </div>
      <div className="image-container">
        {peliculas.map((pelicula) => (
          <div 
            key={pelicula.id} 
            className="pelicula"
            onMouseEnter={() => setHovered(pelicula.id)}
            onMouseLeave={() => setHovered(null)}
          >
            <img src={pelicula.src} alt={pelicula.title} className="bottom-image" />
            {hovered === pelicula.id && (
              <div className="descripcion">
                <h2>{pelicula.title}</h2>
                <p>{pelicula.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Peliculas;

