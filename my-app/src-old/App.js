import React from 'react';
import logo from './logo.svg';
import './App.css';
import JumboTron from './jumboTron';
import UserInput from './test';


function App() {
  return (
    <div className="App">
      <JumboTron isYellow={true} show={false} />
      <UserInput />
    </div>
  );
}

export default App;
