import React, { Component } from 'react';
import Wrapper from "./components/Wrapper/Wrapper";
import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import Score from "./components/Score/Score";
import friends from "./friends.json";
import './App.css';

//function for clickcount
//function for newgame


class App extends React.Component{
  state = {
    friends,
    count: 0,
    highscore: 0
  };
  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };


  render() {
    return(
      <Wrapper>
      <Header score={this.state.score}>Millenial Memory</Header>
  
      <Card
        image={friends[0].image}
        className="card" onClick={this.handleIncrement}
      />  
      <Card
        image={friends[1].image}
        className="card" onClick={this.handleIncrement}
      />
      <Card
        image={friends[2].image}
        className="card" onClick={this.handleIncrement}
      />
        <Card
        image={friends[3].image}
        className="card" onClick={this.handleIncrement}
      />
        <Card
        image={friends[4].image}
        className="card" onClick={this.handleIncrement}
      />
        <Card
        image={friends[5].image}
        className="card" onClick={this.handleIncrement}
      />
        <Card
        image={friends[6].image}
        className="card" onClick={this.handleIncrement}
      />
        <Card
        image={friends[7].image}
        className="card" onClick={this.handleIncrement}
      />
        <Card
        image={friends[8].image}
        className="card" onClick={this.handleIncrement}
      />
    </Wrapper>
    )}


}





export default App;
