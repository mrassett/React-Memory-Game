import React, { Component } from 'react';
import Body from "./components/Body/Body";
import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import Score from "./components/Score/Score";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Header /> */}
        <Body />
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
