import React from "react";
import ScoreBoard from "./ScoreBoard";
import Image from "./Image";
import Image2 from "./Image2";
import ShuffleArray from 'shuffle-array';
import images from "../images";

// By extending the React.Component class, Counter inherits functionality from it
class MainPage extends React.Component {
  // Setting the initial state of the Counter component
  state = {
    correctGuess: false,
    incorrectGuess: false,
    score: 0,
    topScore: 0,
    array: [],
    alreadyClickedIDs: []
  };

  componentDidMount (){
    console.log(images)
    this.setState({array: images})
  }

  updateScore = () => {
    //var newTopScore = 2 + 2 === 100 ? "first thing" : "second thing"
    var newTopScore =
      this.state.score + 1 > this.state.topScore
        ? this.state.topScore + 1
        : this.state.topScore;
    //var newTopScore = this.state.score === this.state.topScore ? this.state.topScore + 1 : this.state.topScore;
    this.setState({ score: this.state.score + 1, topScore: newTopScore });
  };

  guess = event => {
    const { id } = event.target;
    //const id = event.target.id;
    console.log(id);
    if (this.state.alreadyClickedIDs.includes(id)) {
      this.setState({ score: 0, alreadyClickedIDs: [] });
      // var tempArray = this.state.array
      // this.state.array.push(5);
      //console.log(this.state.array);
      ShuffleArray(this.state.array);
      // console.log(Array);
      //reshuffle
    } else {
      this.updateScore();
      this.setState({
        alreadyClickedIDs: [...this.state.alreadyClickedIDs, id]
      });
      ShuffleArray(this.state.array);
      //reshuffle
    }
  };

  // The render method returns the JSX that should be rendered
  render() {
    return (
      <div>
        <ScoreBoard
          // guess='wrong'
          score={this.state.score}
          topScore={this.state.topScore}></ScoreBoard>
        {/* <h1 onMouseEnter={()=>console.log("hover")}>We did it!</h1> */}
        {/* <button onClick={this.updateScore}>CLICK HERE</button>
        <button onClick={this.guess}>ACTUAL BUTTON</button>
        <button onClick={() => this.updateScore(4)}>CLICK HERE ALSO</button> */}
        {this.state.array.map(item => (
          <Image2
            onClick={this.guess}
            key={item.id}
            id={item.id}
            color={item.color}
            source={item.source}></Image2>
        ))}
      </div>
    );
  }
}

export default MainPage;
