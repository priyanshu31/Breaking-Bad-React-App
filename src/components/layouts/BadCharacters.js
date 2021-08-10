import React, { useState, useEffect } from 'react'

// Importing BadCharacter Component
import BadCharacter from './BadCharacter'

// Importing react-paginate to implement pagination
import ReactPaginate from 'react-paginate';


// Functional Component BadCharacters 

const BadCharacters = ({ badCharacters }) => {

    // using state pageNumber to store the pageNumber dynamically
    const [pageNumber, setPageNumber] = useState(0)
    
    // charactersPerPage to store the number of characters to stored per page
    const charactersPerPage = 10

    // pageVisited to store the number of page we have visited till now
    let pageVisited = pageNumber * charactersPerPage

    // displayBadCharacters to slice the required characters per page and map them to display to user
    const displayBadCharacters = badCharacters
    .slice(pageVisited, pageVisited + charactersPerPage)
    .map((badCharacter) => (

        // BadCharacter component to display character card
        <BadCharacter key = { badCharacter.char_id } badCharacter = { badCharacter } />
    ))

    // changePage to change the page and pageNumber state
    const changePage = ({ selected }) => setPageNumber(selected)

    // cardstyle to add some inline styling to our card list
    let cardstyle = {
        padding: '1rem',
        marginLeft: '2rem'
    };

    // using useEffect Hook to set our pageNumber to 0 as soon as badCharacters array is changed
    useEffect(() => {

        setPageNumber(0)

    }, [badCharacters])


    // If length of badCharacters is greater than 0 then displaying all the characters card
    if (badCharacters.length > 0)
        return (    

            <div className="container-fluid row" style={cardstyle}>

                {/* Calling displayBadCharacters function to show the badCharacters according to Pagination */}
                {displayBadCharacters}

                <div className="container" style={{display: 'flex'}}>

                    {/* Calling ReactPaginate Component to use React Pagination */}
                    <ReactPaginate 
                        previousLabel = { "Previous" }
                        nextLabel = { "Next" }
                        pageCount = { Math.ceil(badCharacters.length / charactersPerPage) }
                        onPageChange = { changePage }
                        containerClassName = {"pagination"}
                        subContainerClassName={"pages pagination"}
                    />

                </div>

            </div>

        )
    
    // else displaying Nothing to Display
    else 
        return (
            <div className="container" style = {cardstyle}>
                <h5>Nothing to Display</h5>
            </div>
        )
}


// exporting functional component BadCharacters
export default BadCharacters