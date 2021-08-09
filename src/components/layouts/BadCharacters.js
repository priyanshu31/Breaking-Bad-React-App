import React, { Fragment } from 'react'
import BadCharacter from './BadCharacter'

const BadCharacters = ({ badCharacters }) => {

    let cardstyle = {
        padding: '1rem',
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gridGap: '1.2rem'
    };

    return (

        <div className="container" style={cardstyle}>
            {
                badCharacters.map((badCharacter) => (
                
                    <BadCharacter key = { badCharacter.char_id } badCharacter = { badCharacter } />

                ))
            }
        </div>

    )
}

export default BadCharacters
