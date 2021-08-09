import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <Fragment>

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Breaking Bad React App</Link>
                    
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    
                </div>
            </nav>
            
        </Fragment>
    );
}

export default Navbar