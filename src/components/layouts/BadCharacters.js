import React, { Fragment, useState, useEffect } from 'react'
import BadCharacter from './BadCharacter'
import ReactPaginate from 'react-paginate';

const BadCharacters = ({ badCharacters }) => {

    const [pageNumber, setPageNumber] = useState(0)
    
    const charactersPerPage = 10
    let pageVisited = pageNumber * charactersPerPage

    const displayBadCharacters = badCharacters
    .slice(pageVisited, pageVisited + charactersPerPage)
    .map((badCharacter) => (
        <BadCharacter key = { badCharacter.char_id } badCharacter = { badCharacter } />
    ))

    const changePage = ({ selected }) => setPageNumber(selected)

    let cardstyle = {
        padding: '1rem',
        marginLeft: '2rem'
    };

    useEffect(() => {

        setPageNumber(0)

    }, [badCharacters])

    if (badCharacters.length > 0)
        return (    

            <div className="container-fluid row" style={cardstyle}>

                {displayBadCharacters}

                <div className="container" style={{display: 'flex'}}>
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
    
    else 
        return (
            <div className="container" style = {cardstyle}>
                <h5>Nothing to Display</h5>
            </div>
        )
}

export default BadCharacters
