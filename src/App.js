import React, { Component } from 'react';
import socketIOClient from "socket.io-client";
import video from "./tennis.mp4";
import './App.css';

const socket = socketIOClient('http://127.0.0.1:3100');


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount() {
    socket.emit("helloworld", { data: "fake" });
    socket.on("play", console.log('ok'));
  }


  menu() {
    return (
      <div className="menu">
        <div className="container">
          <div className="burger">
            <button>Menu</button>
            <div className="logo2"></div>
          </div>

          <div className="buttons">
            <li><a href="{}">Tour de france</a></li>
            <li><a href="{}">Maillot Jaune - 100 ans de légendes</a></li>
            <li className="btn_red"><a href="{}">Directs</a></li>
            <li className="btn_red"><a href="{}">Live sport</a></li>
          </div>
        </div>
      </div>
    )
  }

  buttons() {
    return (
      <div className="container btns">
        <button onClick={() => this.action('0')} style={{ color: 'black' }} className="play">Play</button>
        <button onClick={() => this.action('1')} style={{ color: 'black' }} className="pause">Pause</button>
        <button onClick={() => this.action('6')} style={{ color: 'black' }} className="minus">- 10s</button>
        <button onClick={() => this.action('7')} style={{ color: 'black' }} className="plus">+ 10s</button>
        <button onClick={() => this.action('2')} style={{ color: 'black' }} className="src">Random cam</button>
      </div>
    )
  }

  action(index) {
    switch (index) {
      case '0':
      console.log(video);
        break;

      case '1':

        break;

      case '2':

        break;

      case '3':

        break;

      case '4':

        break;

      case '5':

        break;

      case '6':

        break;

      case '7':

        break;

      default:
        break;
    }
  }

  searchaname() {
    return (
      <p className="container breadcrumb">
        <a href="{}">Les directs francetv sport</a>
      </p>
    )
  }

  player() {
    return (
      <div className="player w-80">
        <h1 className="title">LES DIRECTS FRANCETV SPORT</h1>
        <div>
          <video src={video} type="video/mp4" />
        </div>
        <h2 className="sub-title">VÉLO CLUB - 16/07/2019</h2>
        <p>
          <strong>
            Direct : suivez en live les matches et championnats sur France tv sport. Les directs France tv sport, ce sont deux émissions emblématiques "Stade 2" et "Tout le sport" mais également des événements phares comme le Dakar, le tournoi des 6 Nations, Roland-Garros, Tour de France, les Championnats du Monde et Europe d'Athlétisme et de Natation ou encore les Jeux Olympiques. Vivez en temps réel le suspens des événements comme si vous y étiez, au sein du plus grand terrain de sport.
          </strong>
        </p>
      </div>
    )
  }

  articles() {
    return (
      <div className="articles w-20">
        <h1 className="title">DERNIÈRES INFOS</h1>

        <div className="bloc">
          <img src="https://assets.sport.francetvinfo.fr/sites/default/files/styles/mobile_16_9/public/2019-07/000_1is6w6.jpg?h=4df5ed22&itok=y_NkLcKm" alt="" />
          <span>Pinot : "J'ai de la rage"</span>
        </div>

        <div className="bloc">
          <img src="https://assets.sport.francetvinfo.fr/sites/default/files/styles/mobile_16_9/public/2019-07/075_urbanandsport-presenta190714_npwui.jpg?h=e91a4d95&itok=Y92c0Rfg" alt="" />
          <span>Griezmann, Andersen, Diallo : le récap mercato de la semaine</span>
        </div>

        <div className="bloc">
          <img src="https://assets.sport.francetvinfo.fr/sites/default/files/styles/mobile_16_9/public/2019-07/043_dpa-pa_122313014_0.jpg?h=7152680a&itok=oWAE92Dl" alt="" />
          <span>Sébastien Haller à West Ham</span>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div>
        {this.menu()}
        {this.buttons()}
        {this.searchaname()}
        <div className="container main">
          {this.player()}
          {this.articles()}
        </div>
      </div>
    );
  }
}

export default App;
