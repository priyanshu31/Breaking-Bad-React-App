import React, { Fragment, useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Importing Axios to fetch data from breaking bad api
import axios from 'axios';

// Importing App.css file
import './App.css';

// Importing Navbar Component
import Navbar from './components/layouts/Navbar'

// Importing Main Home Page Component
import BadCharacters from './components/layouts/BadCharacters';

// Impoting readmore extension component to show details of Bad Character
import BadCharacterFull from './components/layouts/BadCharacterFull';


// Main Functional Component App

function App() {

  // badCharacters state to store all the dynamic state of dynamic badCharacter List 
  const [badCharacters, setBadCharacters] = useState([])

  // badCharactersFull state to store all the data at one request from API to reduce redundant calls and to optimize the time
  const [badCharactersFull, setBadCharactersFull] = useState([])

  // filterState to filter the character based on the category
  const [filterState, setFilterState] = useState("All")

  // categorySet to store categories of characters available
  const [categorySet, setCategorySet] = useState([])




  // loadcharacters function to load all the characters from the API and store them in BadCharactersFull state 
  // This function is made async so that we can use await for the axios API request

  const loadcharacters = async () => {

    const api_res = await axios.get('https://breakingbadapi.com/api/characters')
    
    setBadCharactersFull(api_res.data)
    setBadCharacters(api_res.data)

    // using Set data structure to ensure that no element should be repeated in the category set
    let tmp = new Set()

    // traversing all the element in api_res.data 
    // Now inside each element split the category string between ", " and then traverse the remaining array to add the category in tmp 
    api_res.data.forEach(element => element.category.split(", ").forEach(e => tmp.add(e)))

    // Since tmp was a Set it will have only unique categories so we can set our categorySet state to tmp
    setCategorySet(tmp)
  }


  // searchFilter function to filter the character according to searched query entered by user

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
