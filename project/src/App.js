import React, { Component } from 'react';
import { Map, InfoWindow, Marker } from 'google-maps-react'
import Container from './Container';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = { selectedPlace: {name : ''}}
    }
    onInfoWindowClose(args) {
        console.log(args);
    }
    onMarkerClick(props, marker, e) {
        console.log(props, marker, e)
}
  render() {
    //return (
    //  <div className="App">
    //    <div className="App-header">
    //      <img src={logo} className="App-logo" alt="logo" />
    //      <h2>Welcome to React</h2>
    //    </div>
    //    <p className="App-intro">
    //      To get started, edit <code>src/App.js</code> and save to reloadddd.
    //    </p>
    //  </div>
      //
      //
      //
      return (
        <Container />

      )





  }
}

export default App;
