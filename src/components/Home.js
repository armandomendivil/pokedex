import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';

const Home = () => (
  <div>
    <img src={logo} className="App-logo" alt="logo" />
    <h2>Pokedex</h2>
    <Link to="/">Home</Link>
  </div>
);

export default Home;
