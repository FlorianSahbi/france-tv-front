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
    socket.on("play", data => {
      console.log(data)  
    });

    socket.on("pause", data => {
      console.log(data)  
    });

    socket.on("random", data => {
      console.log(data)  
    });

    socket.on("zoomIn", data => {
      console.log(data)  
    });

    socket.on("zoomOut", data => {
      console.log(data)  
    });

    socket.on("switchTeam", data => {
      console.log(data)  
    });

    socket.on("forward", data => {
      console.log(data)  
    });

    socket.on("backward", data => {
      console.log(data)  
    });

    socket.on("show camera", data => {
      console.log(data)  
    });

    socket.on("show current match", data => {
      console.log(data)  
    });

    socket.on("show match", data => {
      console.log(data)  
    });

    socket.on("show current match", data => {
      console.log(data)  
    });
  };

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
        <button onClick={() => this.action('2')} style={{ color: 'black' }} className="random">Random cam</button>
        <button onClick={() => this.action('3')} style={{ color: 'black' }} className="zoom-in">Zoom In</button>
        <button onClick={() => this.action('4')} style={{ color: 'black' }} className="zoom-out">Zoom Out</button>
        <button onClick={() => this.action('5')} style={{ color: 'black' }} className="switch">Switch Team</button>
        <button onClick={() => this.action('6')} style={{ color: 'black' }} className="plus">+ 10s</button>
        <button onClick={() => this.action('7')} style={{ color: 'black' }} className="minus">- 10s</button>
      </div>
    )
  }

  action(index) {
    let video = document.getElementsByClassName('video')[0];
    switch (index) {
      case '0': video.play(); break;
      case '1': video.pause(); break;
      case '2': console.log('not implemented yet'); break;
      case '3': console.log('not implemented yet'); break;
      case '4': console.log('not implemented yet'); break;
      case '5': console.log('not implemented yet'); break;
      case '6': video.currentTime += 10; break;
      case '7': video.currentTime -= 10; break;
      default:  console.log('ERROR'); break;
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
          <video autoPlay className="video" src={video} type="video/mp4" />
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
