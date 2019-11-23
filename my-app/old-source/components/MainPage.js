import React from "react";
import ScoreBoard from "./ScoreBoard"
import Image from "./Image"

// By extending the React.Component class, Counter inherits functionality from it
class MainPage extends React.Component {
  // Setting the initial state of the Counter component
  state = {
      correctGuess: false,
      incorrectGuess: false,
      score: 0,
      topScore: 0,
      // array: [1,2,3,4,5,6]
      array: [
        {
          id: 1,
          src: ''
        },
        {
          id: 2,
          src: ''
        }
      ]
  };

  updateScore = ()=> {
      this.setState({score: this.state.score + 1})
  }


  // The render method returns the JSX that should be rendered
  render() {
    return (
      <div>
        <ScoreBoard guess="wrong" score={this.state.score} topScore={this.state.topScore}></ScoreBoard>
        <h1>We did it!</h1>
        <button onClick={this.updateScore}>CLICK HERE</button>
        {this.state.array.map((item)=><Image onClick ={this.updateScore} key={item}></Image>)}
      </div>
    );
  }
}

export default MainPage;
