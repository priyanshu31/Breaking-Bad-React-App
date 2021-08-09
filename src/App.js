import React, { Fragment, useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Navbar from './components/layouts/Navbar'
import BadCharacters from './components/layouts/BadCharacters';

function App() {

  const [loading, setLoading] = useState(true);
  const [badCharacters, setBadCharacters] = useState([])


  const loadcharacters = async () => {

    const api_res = await axios.get('https://breakingbadapi.com/api/characters')
    
    setBadCharacters(api_res.data)
    setLoading(false)
  }

  useEffect(loadcharacters, [])

  return (
    <Fragment>
    
      <Router>

        <Navbar />
        <Route exact path = '/' render={props => (
          <BadCharacters badCharacters = { badCharacters } />
        )} ></Route>

      </Router>
    
    </Fragment>
  );
}

export default App;
