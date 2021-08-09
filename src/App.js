import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Navbar from './components/layouts/Navbar'
import BadCharacters from './components/layouts/BadCharacters';

function App() {

  const loadusers = async () => {

    const api_res = await axios.get('https://breakingbadapi.com/api/characters')
    const bad_char = api_res.data
    console.log(bad_char)

  }

  loadusers()

  return (
    <Fragment>
    
      <Router>

        <Navbar></Navbar>
        <Route exact path = '/' component = { BadCharacters }></Route>

      </Router>
    
    </Fragment>
  );
}

export default App;
