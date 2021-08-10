import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom';

const Navbar = ({ searchFilter, categorySet, Filter }) => {

    const [search, setSearch] = useState("")

    const updateSearch = element => {

        setSearch(element.target.value)
        searchFilter(element.target.value)
        
    }

    const filter = e => {

        Filter(e.target.accessKey)
    }

    let liStyle = {
        margin: "0.5rem",
        cursor: "pointer"
    }

    return (
        <Fragment>

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Breaking Bad React App</Link>
                    
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Filter
                            </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            
                            {
                                Array.from(categorySet).map(element => (
                                    <li style={liStyle} onClick={filter} accessKey={element}>{element}</li>
                                ))
                            }

                            <li><hr className="dropdown-divider" /></li>
                            <li style={liStyle} onClick={filter} accessKey="All">All</li>
                        </ul>
                        </li>
                    
                    </ul>
                    
                    <input className="form-control" placeholder="Search" style={{width: "15rem"}} value={search} onChange={updateSearch}></input>
                   
                </div>
            </nav>
            
        </Fragment>
    );
}

export default Navbar