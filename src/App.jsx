import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/peliculas">Películas</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default App;
