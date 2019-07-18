import React, { Component } from 'react';
import socketIOClient from "socket.io-client";
import './App.css';

import video_base from './videos/video_base.mp4';
import tennis from './videos/tennis_match.mp4';
//import videos from './videos/videos.json';

import motion from './videos/scene1.mp4';

import camera1 from './videos/scene1.mp4';
import camera2 from './videos/scene2.mp4';
import camera3 from './videos/scene3.mp4';
import camera4 from './videos/scene4.mp4';
import camera5 from './videos/scene5.mp4';
import camera6 from './videos/scene6.mp4';
import camera7 from './videos/scene7.mp4';
import camera8 from './videos/scene8.mp4';
import camera9 from './videos/scene9.mp4';
import camera10 from './videos/scene10.mp4';
import camera11 from './videos/scene11.mp4';
import camera12 from './videos/scene12.mp4';
import camera13 from './videos/scene13.mp4';
import camera14 from './videos/scene14.mp4';
import camera15 from './videos/scene15.mp4';
import camera16 from './videos/scene16.mp4';
import camera17 from './videos/scene17.mp4';
import camera18 from './videos/scene18.mp4';
import camera19 from './videos/scene19.mp4';
import camera20 from './videos/scene20.mp4';
import camera21 from './videos/scene21.mp4';
import camera22 from './videos/scene22.mp4';
import camera23 from './videos/scene23.mp4';
import camera24 from './videos/scene24.mp4';
import camera25 from './videos/scene25.mp4';
import camera26 from './videos/scene26.mp4';
import camera27 from './videos/scene27.mp4';
import camera28 from './videos/scene28.mp4';
import camera29 from './videos/scene29.mp4';
import camera30 from './videos/scene30.mp4';
import camera31 from './videos/scene31.mp4';
import camera32 from './videos/scene32.mp4';
import camera33 from './videos/scene33.mp4';
import camera34 from './videos/scene34.mp4';
import camera35 from './videos/scene35.mp4';
import camera36 from './videos/scene36.mp4';
import camera37 from './videos/scene37.mp4';

const socket = socketIOClient('https://gentle-badlands-67442.herokuapp.com/');
// const socket = socketIOClient('http://127.0.0.1:3100');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      source: tennis,
      currentTime: 0,
      buttons: true,
      mosaicIsActive: false,
      zoom: 0,
      init: true,
      videos: [camera1, camera2, camera3, camera4, camera5, camera6, camera7, camera8, camera9, camera10,
        camera11, camera12, camera13, camera14, camera15, camera16, camera17, camera18, camera19, camera20,
        camera21, camera22, camera23, camera24, camera25, camera26, camera27, camera28, camera29, camera30,
        camera31, camera32, camera33, camera34, camera35, camera36, camera37],
      sport: [
        video_base, tennis
      ]
    }
  }

  componentDidMount() {

    setInterval( () => {
      if  (this.state.init) {
        this.init();
        console.log('init')
      }
    }, 100);

    setTimeout( () => {
      this.setState({
        init: false
      })
    }, 15000);

    socket.on("play", data => {
      console.log(data)
      this.action('0');
    });

    socket.on("pause", data => {
      console.log(data)
      this.action('1');
    });

    socket.on("random", data => {
      console.log(data)
      this.randomVideo();
    });

    socket.on("zoomIn", data => {
      this.setState({zoom: + 1});
      console.log(data);
    });

    socket.on("zoomOut", data => {
      this.setState({
        zoom: - 1
      });
      console.log(data)
    });

    socket.on("switchTeam", data => {
      console.log(data)
    });

    socket.on("forward", data => {
      console.log(data)
      this.action('6');
    });

    socket.on("backward", data => {
      console.log(data)
      this.action('7');
    });

    socket.on("show camera", data => {
       this.setState({
         source: this.state.videos[parseInt(data.cameraId)]
       });
      console.log(data);
    });

    socket.on("show current match", data => {
      console.log(data)
    });

    socket.on("show match", data => {
      console.log(data)
      this.action('8');
    });

    socket.on("show current match", data => {
      console.log(data)
    });

    socket.on("switch match", data => {
      console.log(data)
    });

    socket.on("direct", data => {
      this.action('9');
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

  buttons(show) {
    if (show) {
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
          <button onClick={() => this.action('8')} style={{ color: 'black' }} className="switchMatch">Change Match</button>
          <button onClick={() => this.action('9')} style={{ color: 'black' }} className="direct">direct</button>
          <button onClick={() => this.action('10')} style={{ color: 'black' }} className="direct">moisaique</button>
        </div>
      )
    }
  }

  action(index) {
    switch (index) {
      case '0': this.playVideo(); break;
      case '1': this.pauseVideo(); break;
      case '2': this.randomVideo(); break;
      case '3': this.zoomInVideo(); break;
      case '4': this.zoomOutVideo(); break;
      case '5': this.switchTeam(); break;
      case '6': this.forwardVideo(10); break;
      case '7': this.backwardVideo(10); break;
      case '8': this.switchMatch(); break;
      case '9': this.resumeMatch(); break;
      case '10': this.setState({ mosaicIsActive: true }); break;
      default: console.log('ERROR'); break;
    }
  }

  playVideo() {
    let video = document.getElementsByClassName('video')[0];
    if (this.state.source === video_base) {
      video.currentTime = this.state.currentTime;
    }
    video.play();
  }

  pauseVideo() {
    let video = document.getElementsByClassName('video')[0];
    if (this.state.source === video_base) {
      console.log('pause video de base');
      this.setState({
        currentTime: video.currentTime
      })
      video.pause();

    } else {
      console.log('pause video classique');
      video.pause();
    }
    console.log(this.state.currentTime)
  }

  forwardVideo(value) {
    let video = document.getElementsByClassName('video')[0];
    video.currentTime += value;
  }

  backwardVideo(value) {
    let video = document.getElementsByClassName('video')[0];
    video.currentTime -= value;
  }

  randomVideo() {
    let video = document.getElementsByClassName('video')[0];
    if (this.state.source === video_base) {
      this.setState({
        currentTime: video.currentTime,
        source: this.state.videos[Math.floor(Math.random() * Math.floor(38))],
        zoom: 0
      });

      console.log('random depuis video de base')
    } else {
      this.setState({
        source: this.state.videos[Math.floor(Math.random() * Math.floor(38))],
        zoom: 0
      });
      console.log('random depuis video classique')
    }
    setTimeout(() => {
      console.log(this.state.currentTime)
    }, 1000);
  }

  init () {
    let video = document.getElementsByClassName('video')[0];

    this.setState({
      source: motion
    });

    if  (video.currentTime > video.duration) {
      this.setState({
        source: video_base
      });
    }
  }

  switchMatch() {
    if (this.state.source === tennis) {
      this.setState({
        source: this.state.sport[0]
      })
    } else {
      this.setState({
        source: this.state.sport[1]
      })
    }
  }

  zoomInVideo() {
    this.setState({zoom: this.state.zoom + 3});
    console.log('zoom in not implemented yet');
  }

  zoomOutVideo() {
    this.setState({zoom: this.state.zoom - 3});
    console.log('zoom out not implemented yet');
  }

  switchTeam() {
    console.log('switch team not implemented yet');
  }

  resumeMatch() {
    let video = document.getElementsByClassName('video')[0];
    console.log(this.state.currentTime);
    this.setState({
      source: video_base,
      zoom: 0
    })

    setTimeout(() => {
      video.currentTime = this.state.currentTime + 20;
    }, 100);
    video.play();
  }

  searchaname() {
    return (
      <p className="container breadcrumb">
        <a href="{}">Les directs francetv sport</a>
      </p>
    )
  }

  mosaique() {
    return (
      <div className={"mask " + (this.state.mosaicIsActive ? 'active' : '')}>
        <div className="item">
          <video src={ camera1 } loop autoPlay></video>
          <span>1</span>
        </div>
        <div className="item">
          <video src={ camera2 } loop autoPlay></video>
          <span>2</span>
        </div>
        <div className="item">
          <video src={ camera3 } loop autoPlay></video>
          <span>3</span>
        </div>

        <div className="item">
          <video src={ camera4 } loop autoPlay></video>
          <span>4</span>
        </div>
        <div className="item">
          <video src={ camera5 } loop autoPlay></video>
          <span>5</span>
        </div>
        <div className="item">
          <video src={ camera6 } loop autoPlay></video>
          <span>6</span>
        </div>
      </div>
    )
  }

  player() {
    return (
      <div className="player w-80">
        <h1 className="title">LES DIRECTS FRANCETV SPORT</h1>
        <div className="playerItem">
          <video style={{transform: `scale(1.${this.state.zoom})`}} controls={(!this.state.mosaicIsActive)} loop className="video" src={this.state.source} type="video/mp4" />
          {this.mosaique()}
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
        {this.buttons(this.state.buttons)}
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
