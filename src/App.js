import logo from './logo.svg';
import React, { Component } from 'react'
import './App.css';
import Table from './Table'
import Form from './Form'
import Appi from './Api';

class App extends Component {

  state = {
    characters: [
      {
        name: 'Charlie',
        job: 'IT worker'
        // the rest of the data
      },
    ],
  }


  removeCharacter = (index) => {
    const { characters } = this.state
  
    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index
      }),
    })
  }

  handleSubmit = (character) => {
    this.setState({ characters: [...this.state.characters, character] })
  }
  

  render() {
    const { characters } = this.state
  
    return (
      <div className="container">
        <Table characterData={characters} removeCharacter={this.removeCharacter} />
        <Form handleSubmit={this.handleSubmit} />
        <Appi />
      </div>
    )
  }
}

export default App;
