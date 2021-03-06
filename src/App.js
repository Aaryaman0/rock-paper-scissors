import pic from './123.jpeg';
import './App.css';
import { Button } from '@material-ui/core';
//import { render } from '@testing-library/react';
import React from 'react';
//import ReactDOM from 'react-dom';

const options = ["rock", "paper", "scissors"]

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      count: 4,
      playerSelection: "",
      computerSelection: "",
      result: ""
    };
    this.clicked = this.clicked.bind(this);
  }

  Random() {
    var maxNumber = 3;
    var randomNumber = Math.floor((Math.random() * maxNumber));
    return randomNumber;
  }

  clicked() {
    this.setState({playerSelection: "You have clicked " + options[this.state.count]});
    console.log(this.options);
    console.log(this.state.count);
    console.log(this.state.playerSelection);
    var num = this.Random();
    this.setState({computerSelection: "The computer chooses " + options[num]});
    console.log(this.state.playerSelection);
     if (this.state.count === num){
       this.setState({result: "It is a Draw!"});
     }
     else if (this.state.count === ((num + 1) % 3)){
      this.setState({result: "You Win!"});
     }
     else if (num === ((this.state.count + 1) % 3)){
      this.setState({result: "The Computer Wins!"});
     }
  }

  render() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>This is a Rock-Paper-Scissors game</h1>
        <img src={pic} className="App-logo" alt="logo" />
        <p>
          Choose one of the following options:-
        </p>
        </header>
    <Button variant="contained" color="primary" onMouseDown={() => {
      console.log("Rock");
      this.setState({ count: 0 });
      }} onMouseUp={this.clicked}>
    Rock
    </Button>
    <Button variant="contained" color="primary" onMouseDown={() => {
      console.log("Paper");
      this.setState({ count: 1 });
      }} onMouseUp={this.clicked}>
     Paper
     </Button>
    <Button variant="contained" color="primary" onMouseDown={() => {
      console.log("Scissor");
      this.setState({ count: 2 });
      }} onMouseUp={this.clicked}>
     Scissor
     </Button>
     <p>{this.state.playerSelection}</p>
     <p>{this.state.computerSelection}</p>
     <p>{this.state.result}</p>
    </div>
  );
}
}

export default App;
