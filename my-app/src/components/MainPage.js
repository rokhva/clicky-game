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
      array: [
        {id: 1, color: "red", source:"https://www.rover.com/blog/wp-content/uploads/2018/11/running-corgi-puppy-1200x675.jpg"},
        {id: 2, color: "blue"},
        {id: 3, color: "yellow"}
      ],
      alreadyClickedIDs: []
  };

  updateScore = ()=> {
    //var newTopScore = 2 + 2 === 100 ? "first thing" : "second thing"
    var newTopScore = this.state.score + 1 > this.state.topScore ? this.state.topScore + 1 : this.state.topScore;
    //var newTopScore = this.state.score === this.state.topScore ? this.state.topScore + 1 : this.state.topScore;
      this.setState({score: this.state.score + 1, topScore: newTopScore})

  }

  guess = (event)=>{
     const {id} = event.target;
    //const id = event.target.id;
     console.log(id)
    if(this.state.alreadyClickedIDs.includes(id)){
      this.setState({score:0, alreadyClickedIDs:[]})
      //reshuffle
    } else {
      this.updateScore();
      this.setState({alreadyClickedIDs:[...this.state.alreadyClickedIDs, id]})
      //reshuffle
    }
  }


  // The render method returns the JSX that should be rendered
  render() {
    return (
      <div>
        <ScoreBoard guess="wrong" score={this.state.score} topScore={this.state.topScore}></ScoreBoard>
        <h1>We did it!</h1>
        <button onClick={this.updateScore}>CLICK HERE</button>
        <button onClick={this.guess}>ACTUAL BUTTON</button>
        <button onClick={()=>this.updateScore(4)}>CLICK HERE ALSO</button>
        {this.state.array.map((item)=><Image onClick ={this.guess} key={item.id} id={item.id} color={item.color} source={item.source}></Image>)}
      </div>
    );
  }
}

export default MainPage;
