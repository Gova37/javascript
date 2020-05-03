import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/item/add">Add Item</Link>
      </li>
    </ul>
  );
};

export default Menu;