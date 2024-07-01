import React from 'react';
import MenuIcon from '../atoms/MenuIcon';
import Title from '../atoms/Title';
import './Header.css';

const Header = ({ title, toggleMenu }) => {
  return (
    <div className="topbar">
      <MenuIcon toggleMenu={toggleMenu} />
      <Title text={title} />
    </div>
  );
};

export default Header;
