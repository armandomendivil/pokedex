
import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';

import globalStyles from '../styles';

function PokemonItem({
  pokemon: {
    name,
    weight,
    base_experience,
    height,
  }}) {
  return (
    <Paper style={globalStyles.paper}>
      <h3 style={globalStyles.title}>Pokemon</h3>

      <TextField
        name="name"
        floatingLabelText="Name"
        value={name}
        disabled
      />
      <br />
      <TextField
        name="weight"
        floatingLabelText="Weight"
        value={weight}
        disabled
      />
      <br />
      <TextField
        name="base_experience"
        floatingLabelText="Base Experience"
        value={base_experience}
        disabled
      />
      <br />
      <TextField
        name="height"
        floatingLabelText="height"
        type="number"
        value={height}
        disabled
      />
    </Paper>
  );
}

PokemonItem.propTypes = {
  name: PropTypes.string,
  weight: PropTypes.string,
  base_experience: PropTypes.string,
  height: PropTypes.number,
};

export default PokemonItem;
