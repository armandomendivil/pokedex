import React from 'react';
import PokemonItem from '../components/PokemonItem';
import { api } from '../services/api';

export default class PokemonContainer extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      data: {},
      isProcessing: false,
    }
  }

  async componentDidMount() {
    const {  match: { params: { id } } } = this.props;
    this.setState({
      isProcessing: true,
    });
    const response = await api(`pokemon/${id}`);
    this.setState({
      isProcessing: false,
    });

    this.setState({
      data: response,
    });
  }

  render() {
    if (this.state.isProcessing) return (<div>Loading ...</div>)
    else return (<PokemonItem pokemon={this.state.data} />);
  }
}
