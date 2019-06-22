//imports dependencies and files
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Card from "./components/Card";
import Footer from "./components/Footer";
import vegetables from "./vegetables.json";
import "./App.css";

const shuffleArray = (array) => {
  let counter = array.length;
  // While there are elements in the array
  while (counter > 0) {
      // Pick a random index
      let index = Math.floor(Math.random() * counter);
      // Decrease counter by 1
      counter--;
      // And swap the last element with it
      let temp = array[counter];
      array[counter] = array[index];
      array[index] = temp;
  }
  return array;
};

class App extends Component {
  state = {
      currentScore: 0,
      topScore: 0,
      result: "",
      clicked: [],
      vegetables,
      gameOver: false
  };

  // display starting message
  componentDidMount() {
      this.setState({ result: "Click a player to get started" });
  }

  // When a vegetable gets clicked,
  // increase points and add id of element to array.
  imageClick = (id) => {
      console.log(`Picture clicked with id: ${id}`);
      if (!this.state.clicked.includes(id)) {
          this.pointIncrease();
          this.state.clicked.push(id);
          this.setState({
              gameOver: false
          });
      } else {
          this.resetGame();
      }
  }

  // When the user makes a new click, increment the points by 1
  // and check if the user has won
  pointIncrease = () => {
      let score = this.state.currentScore + 1;
      console.log(`the score is ${score}`);
      if (score === this.state.vegetables.length) {
          this.setState({
              result: "You win! Start clicking to play again!",
              topScore: score,
              currentScore: 0,
              clicked: [],
              vegetables,
              gameOver: false
          });
      } else if (score > this.state.topScore) {
          this.setState({
              topScore: score,
              currentScore: score,
              result: "Correct! New high score!",
          });
      } else {
          this.setState({
              currentScore: score,
              result: "Correct!"
          });
      }
      this.resetVegArray();
  }

  // reset the game when the user clicked a pix twice
  resetGame = () => {
      this.setState({
          points: 0,
          currentScore: 0,
          topScore: this.state.topScore,
          result: "You Loss!",
          clicked: [],
          vegetables,
          gameOver: true
      });
      console.log('Game over? ', this.state.gameOver);
      this.resetVegArray();
  }

  // set the array to be mapped to a new scrambled version using shuffle algorithm
  resetVegArray = () => {
      let newScramble = shuffleArray(vegetables);
      this.setState({ vegetables: newScramble })
  }

  //the order of components to be rendered: navbar, jumbotron, friendcard, footer 
  render() {
      return (
          <div>
              <Navbar
                  topScore={this.state.topScore} score={this.state.score} status={this.state.result}
              />
              <Jumbotron />
              <div className="wrapper">
                  {this.state.vegetables.map(fish => (
                      <Card
                          imageClick={this.imageClick}
                          id={vegetables.id}
                          key={vegetables.id}
                          image={vegetables.image}
                      />
                  ))}
              </div>
              <Footer />
          </div>
      );
  }
}
export default App;