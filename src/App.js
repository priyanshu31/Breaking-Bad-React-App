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
  const [filterState, setFilterState] = useState("All")

  const [categorySet, setCategorySet] = useState([])

  const loadcharacters = async () => {

    const api_res = await axios.get('https://breakingbadapi.com/api/characters')
    
    setBadCharactersFull(api_res.data)
    setBadCharacters(api_res.data)
    setLoading(false)

    let tmp = new Set()

    api_res.data.forEach(element => element.category.split(", ").forEach(e => tmp.add(e)))

    setCategorySet(tmp)
  }

  const searchFilter = search => {

    search = search.toLowerCase()

    let tmpBadCharacters = []
    badCharactersFull.forEach(element => {
      if(element.name.toLowerCase().includes(search) && (filterState === "All" || element.category === filterState))
        tmpBadCharacters.push(element)
      })
      
      setBadCharacters(tmpBadCharacters)
    }
    
    const Filter = filter => {
      
      console.log(filter)
      setFilterState(filter)
     
      let tmpBadCharacters = []
      badCharactersFull.forEach(element => {
        if(filter === "All" || element.category === filter)
          tmpBadCharacters.push(element)
      })
      
      setBadCharacters(tmpBadCharacters)

    }

    
    useEffect(loadcharacters, [])

  return (
    <Fragment>
    
      <Router>

        <Navbar searchFilter = {searchFilter} categorySet = {categorySet} Filter = {Filter} />

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
