import React, { Component } from 'react';
import Wrapper from "./components/Wrapper/Wrapper";
import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import Score from "./components/Score/Score";
import friends from "./friends.json";
import './App.css';

const App = () => (
  <Wrapper>
    <Header>Millenial Memory</Header>
    <Card
      image={friends[0].image}
    />  
    <Card
      image={friends[1].image}
    />
    <Card
      image={friends[2].image}
    />
      <Card
      image={friends[3].image}
    />
      <Card
      image={friends[4].image}
    />
      <Card
      image={friends[5].image}
    />
      <Card
      image={friends[6].image}
    />
      <Card
      image={friends[7].image}
    />
      <Card
      image={friends[8].image}
    />
  </Wrapper>
);


export default App;
