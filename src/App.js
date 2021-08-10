import React, { Fragment, useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Navbar from './components/layouts/Navbar'
import BadCharacters from './components/layouts/BadCharacters';
import BadCharacterFull from './components/layouts/BadCharacterFull';

function App() {

  const [loading, setLoading] = useState(true);
  const [badCharacters, setBadCharacters] = useState([])
  const [badCharactersFull, setBadCharactersFull] = useState([])

  const loadcharacters = async () => {

    const api_res = await axios.get('https://breakingbadapi.com/api/characters')
    
    setBadCharactersFull(api_res.data)
    setBadCharacters(api_res.data)
    setLoading(false)
  }

  const searchFilter = search => {

    search = search.toLowerCase()

    let tmpBadCharacters = []
    badCharactersFull.forEach(element => {
      if(element.name.toLowerCase().includes(search))
        tmpBadCharacters.push(element)
      })
      
      setBadCharacters(tmpBadCharacters)
    }

    
    useEffect(loadcharacters, [])

  return (
    <Fragment>
    
      <Router>

        <Navbar searchFilter = {searchFilter} />

        <Route exact path = '/' render={props => (
          
          <BadCharacters badCharacters = { badCharacters } />
        
        )} ></Route>

        <Route exact path = '/readmore' render={props => (

          <BadCharacterFull badCharacter = {props.location.badCharacter} />

        )}>

        </Route>


      </Router>
    
    </Fragment>
  );
}

export default App;
