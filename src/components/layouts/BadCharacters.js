import React, { Fragment } from 'react'
import BadCharacter from './BadCharacter'
import ReactPaginate from 'react-paginate';

const BadCharacters = ({ badCharacters }) => {

    let cardstyle = {
        padding: '1rem',
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gridGap: '1.2rem'
    };

    if (badCharacters.length > 0)
        return (    

            <div className="container" style={cardstyle}>
                {
                    badCharacters.map((badCharacter) => (
                    
                        <BadCharacter key = { badCharacter.char_id } badCharacter = { badCharacter } />

                    ))
                }
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
