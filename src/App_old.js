import React, {Component} from 'react';
import Table from './Table';
import './App.css';

class App extends Component{
  state = {
    characters: [
      {
        name: 'Charlie',
        job: 'Janitor'
      },
      {
        name: 'Mac',
        job: 'Bouncer'
      },
      {
        name: 'Dee',
        job: 'Janitor'
      },
      {
        name: 'Dennis',
        job: 'Bouncer'
      },
    ],
  }

  removeCharacter = (index)=> {
    const {characters} = this.state
    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index
      }),
    })
  }

  render() {
    const {characters} = this.state
    return (
      <div className="container">
        <Table characterData={characters} removeCharacter={this.removeCharacter} />
      </div>
    )
  }
}

export default App;
