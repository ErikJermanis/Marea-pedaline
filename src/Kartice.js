import React, {Component} from 'react';
import Kartica from './Kartica';
import PropTypes from 'prop-types';

class Kartice extends Component {
  render() {
    return this.props.kartice.map((kartica) => (
      <Kartica key={kartica.broj} kartica={kartica} promjeniStanje={this.props.promjeniStanje} kreniStani={this.props.kreniStani} Daj30={this.props.Daj30} Uzmi30={this.props.Uzmi30} Daj60={this.props.Daj60} Uzmi60={this.props.Uzmi60} />
    ));
  }
}

Kartice.propTypes = {
  kartice: PropTypes.array.isRequired
}

export default Kartice;