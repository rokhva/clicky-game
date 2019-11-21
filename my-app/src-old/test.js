import React from "react";

class UserInput extends React.Component {
  state = {
    userInput: "Empty state",
    fooInput: "Hi"
  };

  newState = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return <>
      <input
        name='userInput'
        type='text'
        value={this.state.userInput}
        onChange={this.newState}
      />
      <input
        name='fooInput'
        type='text'
        value={this.state.fooInput}
        onChange={this.newState}
      />
    </>;
  }
}

export default UserInput;
