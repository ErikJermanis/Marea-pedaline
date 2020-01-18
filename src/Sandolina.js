import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';

export default class Sandolina extends Component {
  render() {
    return(
      <div className="sandolina">
        <div className="kojaSandolina">{this.props.sandolina.naslov}</div>
        <div className="neNaslov">
          <div className="vrijemeSandoline">
            <div className="brojkeS">{this.props.sandolina.vrijeme < 0 ? Math.floor(this.props.sandolina.vrijeme / 60) + 1 : Math.floor(this.props.sandolina.vrijeme / 60)}:{this.props.sandolina.vrijeme % 60}</div>
            <div className="koristenjeS">{this.props.sandolina.vani ? this.props.sandolina.vrijeme < 0 ? 'Kasni!!!' : 'Koristi se' : ''}</div>
          </div>
          <div className="kontroleSandolina">
            <div className="satiS">
              <button onClick={this.props.Daj60.bind(this, this.props.sandolina.broj)}>+1</button>
              <button onClick={this.props.Uzmi60.bind(this, this.props.sandolina.broj)}>-1</button>
            </div>
            <button className="gumbS" onClick={this.props.kreniStani.bind(this, this.props.sandolina.broj)}>{this.props.sandolina.vani ? 'Povratak' : 'Kreni'}</button>
            <div className="minuteS">
              <button onClick={this.props.Daj30.bind(this, this.props.sandolina.broj)}>+30</button>
              <button onClick={this.props.Uzmi30.bind(this, this.props.sandolina.broj)}>-30</button>
            </div>
          </div>
        </div>
        
      </div>
    )
  }
}

Sandolina.propTypes = {
  sandolina: PropTypes.object.isRequired
}