import React, { Component } from 'react';
import logo from './logo.svg';
import CardList from './components/CardList.js';
import Scroll from './components/Scroll.js';
import SearchBox from './components/SearchBox.js';
import './App.css';

const getApiHash = require('marvel-api-hash-generator').getApiHash;
const timeStamp = 1;
const privateKey = process.env.REACT_APP_PRIVATE_KEY;
const publicKey = process.env.REACT_APP_PUBLIC_KEY;
const hashValue = getApiHash(timeStamp, privateKey, publicKey);
const requestConstantCharacters = 'https://gateway.marvel.com/v1/public/characters?';
const apiUrl = `${requestConstantCharacters}ts=${timeStamp}&apikey=${publicKey}&hash=${hashValue}`;

class App extends React.Component {
  constructor()
  {
    super()
    this.state = {
      characters : [],
      searchText :''
    }
  }

  componentDidMount() {
    fetch(apiUrl)
      .then(response=> response.json())
      .then(users => {this.setState({ characters: users.data.results})});
  }

  onSearchChange = (event) => {
    this.setState({ searchText: event.target.value })
  }
  
  render() {
    const {characters,searchText} = this.state;
    const filteredCharacters = characters.filter(character =>{
      return character.name.toLowerCase().includes(searchText.toLowerCase());
    })
    if(!characters)
      return (<h1>No Characters</h1>);
    else
      return (
        <div className="tc center">
          <h1 className='mb2'>Marvel Characters</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <Scroll>
              <CardList characters={filteredCharacters}/>
          </Scroll>
        </div>
      );
  }
}

export default App;
