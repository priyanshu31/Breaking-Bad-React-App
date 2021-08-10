import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom';

const Navbar = ({ searchFilter }) => {

    const [search, setSearch] = useState("")

    const updateSearch = element => {
        
        setSearch(element.target.value)
        searchFilter(element.target.value)
        
    }

    return (
        <Fragment>

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Breaking Bad React App</Link>
                    
                    <input className="form-control" placeholder="Search" style={{width: "15rem"}} value={search} onChange={updateSearch}></input>
                   
                </div>
            </nav>
            
        </Fragment>
    );
}

export default Navbar