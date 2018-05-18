import React from 'react';
import Proptypes from 'prop-types';
import Home from '../components/Home';

const Main = (props) => (
  <div>
    <Home />
    <div className="container">
      {props.children}
    </div>
  </div>
);

Main.propTypes = {
  children: Proptypes.element,
};

export default Main;
