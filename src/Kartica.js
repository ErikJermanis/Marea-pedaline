import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';

export class Kartica extends Component {
    getStyle = () => {
        return {
            backgroundColor: this.props.kartica.funkcija ? '#5D6ADD' : '#D22A2A'
        }
    }

    render() {
        return (
            <div className="pKartica">
                <div onClick={this.props.promjeniStanje.bind(this, this.props.kartica.broj)} style={this.getStyle()} className="funkcija">
                    <div>{this.props.kartica.funkcija ? 'U funkciji' : 'Nije u funkciji'}</div>
                </div>
                <div className="broj">
                    <div>br. {this.props.kartica.broj}</div>
                    <p>{this.props.kartica.broj < 3 ? 'Narančasti tobogan' : this.props.kartica.broj < 5 ? 'Žuti tobogan' : this.props.kartica.broj < 7 ? 'Auto' : 'Sedmica'}</p>
                </div>
                <div className="timer">
                    <div className="brojke">{this.props.kartica.vrijeme < 0 ? Math.floor(this.props.kartica.vrijeme / 60) + 1 : Math.floor(this.props.kartica.vrijeme / 60)}:{this.props.kartica.vrijeme % 60}</div>
                    <div className="koristenje">{this.props.kartica.vani ? this.props.kartica.vrijeme < 0 ? 'Kasni!!!' : 'Koristi se' : ''}</div>
                </div>
                <div className="kontrole">
                    <div className="sati">
                        <button onClick={this.props.Daj60.bind(this, this.props.kartica.broj)}>+1</button>
                        <p>h</p>
                        <button onClick={this.props.Uzmi60.bind(this, this.props.kartica.broj)}>-1</button>
                    </div>
                    <button onClick={this.props.kreniStani.bind(this, this.props.kartica.broj)}>{this.props.kartica.vani ? 'Povratak' : 'Kreni'}</button>
                    <div className="minute">
                        <button onClick={this.props.Daj30.bind(this, this.props.kartica.broj)}>+30</button>
                        <p>min</p>
                        <button onClick={this.props.Uzmi30.bind(this, this.props.kartica.broj)}>-30</button>
                    </div>
                </div>
            </div>
        )
    }
}

Kartica.propTypes = {
    kartica: PropTypes.object.isRequired
  }

export default Kartica;
