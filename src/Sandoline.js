import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Sandolina from './Sandolina';

class Sandoline extends Component {
  render() {
    return this.props.kajak.map((sandolina) => (
      <Sandolina key={sandolina.broj} sandolina={sandolina} kreniStani={this.props.kreniStani} Daj30={this.props.Daj30} Uzmi30={this.props.Uzmi30} Daj60={this.props.Daj60} Uzmi60={this.props.Uzmi60} />
    ));
  }
}

Sandoline.propTypes = {
  kajak: PropTypes.array.isRequired
}

export default Sandoline;