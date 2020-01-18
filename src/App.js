import React, {Component} from 'react';
import Kartice from './Kartice';
import './App.css';
import MAREA from './Mlogo.png';
import Sandoline from './Sandoline';

class App extends Component {
  constructor(props) {
    super(props);
    if(!localStorage.getItem('timeri-pedalina')) {
      this.state = {
        kartice: [
          {
            funkcija: true,
            broj: 1,
            vrijeme: 60,
            vani: false,
            konj: 1
          },
          {
            funkcija: true,
            broj: 2,
            vrijeme: 60,
            vani: false,
            konj: 2
          },
          {
            funkcija: true,
            broj: 3,
            vrijeme: 60,
            vani: false,
            konj: 3
          },
          {
            funkcija: true,
            broj: 4,
            vrijeme: 60,
            vani: false,
            konj: 4
          },
          {
            funkcija: true,
            broj: 5,
            vrijeme: 60,
            vani: false,
            konj: 5
          },
          {
            funkcija: true,
            broj: 6,
            vrijeme: 60,
            vani: false,
            konj: 6
          },
          {
            funkcija: true,
            broj: 7,
            vrijeme: 60,
            vani: false,
            konj: 7
          }
        ],
        kajak: [
          {
            broj: 11,
            naslov: 'Sandolina za jednu osobu',
            vrijeme: 60,
            vani: false,
            konj: 11
          },
          {
            broj: 12,
            naslov: 'Sandolina za jednu osobu',
            vrijeme: 60,
            vani: false,
            konj: 12,
          },
          {
            broj: 13,
            naslov: 'Sandolina za dvije osobe',
            vrijeme: 60,
            vani: false,
            konj: 13
          }
        ]
      };
    } else {
      const stanje = JSON.parse(localStorage.getItem('timeri-pedalina'));
      this.state = stanje
    }
  }

  promjeniStanje = (broj) => {
    this.setState({ kartice: this.state.kartice.map(kartica => {
      if(kartica.broj === broj) {
        kartica.funkcija = !kartica.funkcija
        localStorage.setItem('timeri-pedalina', JSON.stringify(this.state))
      }
      return kartica;
    })});
  }

  kreniStani = (broj) => {
    this.setState({ kartice: this.state.kartice.map(kartica => {
      if(kartica.broj === broj) {
        kartica.vani = !kartica.vani
        if(kartica.vani) {
          kartica.konj = setInterval(() => {
            kartica.vrijeme -= 1
            this.forceUpdate()
          }, 60000)
        }
        else {
          kartica.vrijeme = 60;
          clearInterval(kartica.konj);
          kartica.konj = kartica.broj;
        }
      }
      return kartica;
    })});

    this.setState({ kajak: this.state.kajak.map(sandolina => {
      if(sandolina.broj === broj) {
        sandolina.vani = !sandolina.vani
        if(sandolina.vani) {
          sandolina.konj = setInterval(() => {
            sandolina.vrijeme -= 1
            this.forceUpdate()
          }, 60000)
        }
        else {
          sandolina.vrijeme = 60;
          clearInterval(sandolina.konj);
          sandolina.konj = sandolina.broj;
        }
      }
      return sandolina;
    })})
  }

  Daj30 = (broj) => {
    this.setState({ kartice: this.state.kartice.map(kartica => {
      if(kartica.broj === broj) {
        kartica.vrijeme += 30
      }
      return kartica
    })});

    this.setState({ kajak: this.state.kajak.map(sandolina => {
      if(sandolina.broj === broj) {
        sandolina.vrijeme += 30
      }
      return sandolina
    })})
  }

  Uzmi30 = (broj) => {
    this.setState({ kartice: this.state.kartice.map(kartica => {
      if(kartica.broj === broj) {
        kartica.vrijeme -= 30
      }
      return kartica
    })});

    this.setState({ kajak: this.state.kajak.map(sandolina => {
      if(sandolina.broj === broj) {
        sandolina.vrijeme -= 30
      }
      return sandolina
    })})
  }

  Daj60 = (broj) => {
    this.setState({ kartice: this.state.kartice.map(kartica => {
      if(kartica.broj === broj) {
        kartica.vrijeme += 60
      }
      return kartica
    })});

    this.setState({ kajak: this.state.kajak.map(sandolina => {
      if(sandolina.broj === broj) {
        sandolina.vrijeme += 60
      }
      return sandolina
    })})
  }

  Uzmi60 = (broj) => {
    this.setState({ kartice: this.state.kartice.map(kartica => {
      if(kartica.broj === broj) {
        kartica.vrijeme -= 60
      }
      return kartica
    })});

    this.setState({ kajak: this.state.kajak.map(sandolina => {
      if(sandolina.broj === broj) {
        sandolina.vrijeme -= 60
      }
      return sandolina
    })})
  }

  componentWillMount() {
    this.setState({ kartice: this.state.kartice.map(kartica => {
      kartica.vrijeme = 60
      kartica.vani = false
      return kartica
    })})
  }
    
  

  render() {
    return (
      <div className="App">
        <div className="upper">
          <img src={MAREA} alt="Marea"/>
          <div className="sandoljine">
            <Sandoline kajak={this.state.kajak}  kreniStani={this.kreniStani} Daj30={this.Daj30} Uzmi30={this.Uzmi30} Daj60={this.Daj60} Uzmi60={this.Uzmi60} />
          </div>
        </div>
        <div className="lower">
          <Kartice kartice={this.state.kartice} promjeniStanje={this.promjeniStanje} kreniStani={this.kreniStani} Daj30={this.Daj30} Uzmi30={this.Uzmi30} Daj60={this.Daj60} Uzmi60={this.Uzmi60}/>
        </div>
      </div>
    )
  }
}

export default App;