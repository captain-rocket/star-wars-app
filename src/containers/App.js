import React, { Component } from 'react';
import Card from '../components/Card';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      people: []
    }
  }

 async componentDidMount() {
    const response = await fetch("https://swapi.dev/api/people/")
    const data = await response.json();
  }

  render() {
    return (
      <div className='tc'>
        <h1>Star Wars</h1>
        <Card />
      </div>
    );
  }
}

export default App;
