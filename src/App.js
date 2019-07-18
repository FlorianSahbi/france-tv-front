import React, { Component } from 'react';
import socketIOClient from "socket.io-client";
import './App.css';

import video_base from './video_base.mp4';
//import videos from './videos.json';

import camera1 from './scene1.mp4';
import camera2 from './scene2.mp4';
import camera3 from './scene3.mp4';
import camera4 from './scene4.mp4';
import camera5 from './scene5.mp4';
import camera6 from './scene6.mp4';
import camera7 from './scene7.mp4';
import camera8 from './scene8.mp4';
import camera9 from './scene9.mp4';
import camera10 from './scene10.mp4';
import camera11 from './scene11.mp4';
import camera12 from './scene12.mp4';
import camera13 from './scene13.mp4';
import camera14 from './scene14.mp4';
import camera15 from './scene15.mp4';
import camera16 from './scene16.mp4';
import camera17 from './scene17.mp4';
import camera18 from './scene18.mp4';
import camera19 from './scene19.mp4';
import camera20 from './scene20.mp4';
import camera21 from './scene21.mp4';
import camera22 from './scene22.mp4';
import camera23 from './scene23.mp4';
import camera24 from './scene24.mp4';
import camera25 from './scene25.mp4';
import camera26 from './scene26.mp4';
import camera27 from './scene27.mp4';
import camera28 from './scene28.mp4';
import camera29 from './scene29.mp4';
import camera30 from './scene30.mp4';
import camera31 from './scene31.mp4';
import camera32 from './scene32.mp4';
import camera33 from './scene33.mp4';
import camera34 from './scene34.mp4';
import camera35 from './scene35.mp4';
import camera36 from './scene36.mp4';
import camera37 from './scene37.mp4';

const socket = socketIOClient('https://gentle-badlands-67442.herokuapp.com/');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        videos: [camera1, camera2, camera3, camera4, camera5, camera6, camera7, camera8, camera9, camera10,
            camera11, camera12, camera13, camera14, camera15, camera16, camera17, camera18, camera19, camera20,
            camera21, camera22, camera23, camera24, camera25, camera26, camera27, camera28, camera29, camera30,
            camera31, camera32, camera33, camera34, camera35, camera36, camera37],
        source: video_base
    }
  }

  componentDidMount() {
    socket.on("play", data => {
      this.action('0');
      console.log(data)
    });

    socket.on("pause", data => {
      this.action('1');
      console.log(data)
    });

    socket.on("random", data => {
      this.randomVideo();
      console.log(data)
    });

    socket.on("zoomIn", data => {
        this.action();
      console.log(data)
    });

    socket.on("zoomOut", data => {
      console.log(data)
    });

    socket.on("switchTeam", data => {
      console.log(data)
    });

    socket.on("forward", data => {
        this.action('6');
        console.log(data)
    });

    socket.on("backward", data => {
        this.action('7');
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

    socket.on("switch match", data => {
      console.log(data)
    });
  };

  randomVideo() {
      this.setState({ source: this.state.videos[Math.floor(Math.random() * Math.floor(38))] });
  }

  switchMatch () {

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
      case '2': this.randomVideo(); break;
      case '3': console.log('not implemented yet'); break;
      case '4': console.log('not implemented yet'); break;
      case '5': console.log('not implemented yet'); break;
      case '6': video.currentTime += 10; break;
      case '7': video.currentTime -= 10; break;
      case '8': this.switchMatch(); break;
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

  /*
    @TODO: Générer une mosaique dynamiquement
    @TODO: Afficher le numéro de la caméra associé à la miniature
    @TODO: S'assurer que cette moisaique soit responsive
    @TODO: Quand on change de caméra, afficher une notif sur le coté pendant 3s qui fade-out
   */


  mosaique () {
      return (
          <div className={` mask ${ true } `}>
              <video src={ camera1 } loop autoPlay></video>
          </div>
      )
  }

  player() {
    return (
      <div className="player w-80">
        <h1 className="title">LES DIRECTS FRANCETV SPORT</h1>
        <div>
          <video autoPlay loop className="video" src={this.state.source} type="video/mp4" />
            { this.mosaique() }
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
