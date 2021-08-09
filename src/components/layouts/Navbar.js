import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <Fragment>

            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
                    <Link class="navbar-brand" to="/">Breaking Bad React App</Link>
                    
                    <form class="d-flex">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    
                </div>
            </nav>
            
        </Fragment>
    );
}

export default Navbar