import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom';


// Functional Component Navbar

const Navbar = ({ searchFilter, categorySet, Filter }) => {

    // using state search to store search query as of input tag value
    const [search, setSearch] = useState("")


    // updateSearch function to update search state as input tag value is changed

    const updateSearch = element => {

        // updating search state with element.target.value
        setSearch(element.target.value)

        // calling searchFilter function of App component and passing the search query as argument
        searchFilter(element.target.value)   
    }


    // filter function to filter the bad characters according to filter requested by user

    const filter = e => {

        // calling Filter function of App Component and passing element.target.accessKey as filter query 
        Filter(e.target.accessKey)
    }

    // liStyle for adding some inline css to li of filter dropdown
    let liStyle = {
        margin: "0.5rem",
        cursor: "pointer"
    }


    return (
        <Fragment>

            {/* Using BootStrap Navbar */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">

                    {/* Using Link to navigate to Home Page '/' */}
                    <Link className="navbar-brand" to="/">Breaking Bad React App</Link>
                    
                    {/* Implementing Dropdown */}
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                        <li className="nav-item dropdown">
                            
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Filter
                            </a>
                        
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                
                                {
                                    // Creating Array from categorySet now using map to traverse the array and displaying all the element in dropdown list

                                    Array.from(categorySet).map(element => (

                                        // creating li and calling filter function on click event by passing element using acessKey
                                        <li style={liStyle} onClick={filter} accessKey={element}>{element}</li>
                                    ))
                                }

                                <li><hr className="dropdown-divider" /></li>

                                {/* creating li and calling filter fucntion on click event by passing All */}
                                <li style={liStyle} onClick={filter} accessKey="All">All</li>
                            </ul>

                        </li>
                    
                    </ul>
                    
                    {/* Search box where value is equal to search state and calling updateSearch function on change event */}
                    <input className="form-control" placeholder="Search" style={{width: "15rem"}} value={search} onChange={updateSearch}></input>
                   
                </div>
            </nav>
            
        </Fragment>
    );
}

// exporting the fucntional component Navbar
export default Navbar