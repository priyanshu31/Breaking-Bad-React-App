import React, { Fragment, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

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

import LoadingComponent from './components/layouts/loader';


// Functional Component App

function App() {

  // badCharacters state to store all the dynamic state of dynamic badCharacter List 
  const [badCharacters, setBadCharacters] = useState([])

  // badCharactersFull state to store all the data at one request from API to reduce redundant calls and to optimize the time
  const [badCharactersFull, setBadCharactersFull] = useState([])

  // filterState to filter the character based on the category
  const [filterState, setFilterState] = useState("All")

  // categorySet to store categories of characters available
  const [categorySet, setCategorySet] = useState([])

  // loading state to store whether data is fetched or not
  const [loading, setLoading] = useState(true)




  // loadcharacters function to load all the characters from the API and store them in BadCharactersFull state 
  // This function is made async so that we can use await for the axios API request

  const loadcharacters = async () => {

    // setting loading state as true as loading is started
    setLoading(true)

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

    // updating loading state to false as data is fetched from API
    setLoading(false)
  }


  // searchFilter function to filter the character according to searched query entered by user

  const searchFilter = search => {

    // using search as lower case to implement case-insensitive search 
    search = search.toLowerCase()

    // using tmpBadCharacters to store the search results in temporary array
    let tmpBadCharacters = []

    // traversing the whole badCharactersFull array
    badCharactersFull.forEach(element => {

      // checking if search query is present in name of element(bad character) and also checking whether any filter is applied or not
      if(element.name.toLowerCase().includes(search) && (filterState === "All" || element.category === filterState))

        tmpBadCharacters.push(element)
      })

      // Now updating the BadCharacters state with tmpBadCharacters      
      setBadCharacters(tmpBadCharacters)
    }
    


    // Filter function to apply filter as requested by user  

    const Filter = filter => {
      
      // updating filterState
      setFilterState(filter)
     
      // using tmpBadCharacters array to store the filtered search results
      let tmpBadCharacters = []

      // traversing the whole badCharactersFull array
      badCharactersFull.forEach(element => {

        // Checking the filters in category of element(bad character) and accordingly pushing the elements
        if(filter === "All" || element.category === filter)
          tmpBadCharacters.push(element)
      })
      

      // Updating badCharacters state with tmpBadCharacters
      setBadCharacters(tmpBadCharacters)
    }

    // using useEffect hook to run the loadcharacters function and passing [] as arguments to ensure only one execution of function 
    useEffect(loadcharacters, [])
    
    if(loading)
      return <LoadingComponent />

  return (
    <Fragment>
    
      {/* Using Router to Route between '/' and '/readmore' */}
      <Router>

        {/* Navbar Component */}
        <Navbar searchFilter = {searchFilter} categorySet = {categorySet} Filter = {Filter} />

        {/* Routing to path '/' */}
        <Route exact path = '/' render={props => (
          
          // BadCharacters Component to be rendered in case of '/' path
          
          <BadCharacters badCharacters = { badCharacters } />
        
        )} ></Route>

        {/* Routing to path '/readmore' */}
        <Route exact path = '/readmore' render={props => (

          // BadCharacterFull Component to be rendered in case of '/readmore' path
          // passing the data of requested BadCharacter using props.location to reduce API call of requesting charcter data again

          <BadCharacterFull badCharacter = {props.location.badCharacter} />

        )}>

        </Route>

      </Router>
    
    </Fragment>
  );

}

// exporting the functional component App
export default App;