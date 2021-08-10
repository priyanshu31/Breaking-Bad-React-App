import React, { useState, useEffect } from 'react'
import axios from 'axios'

const BadCharacterFull = ({ badCharacter }) => {

    let imageStyle = {
        width: '16rem',
        border: '2px solid black',
        margin: '1rem'
    }

    let cardstyle = {
        padding: '1rem',
        margin: '1rem',
    };

    const [quotes, setQuotes] = useState([])

    const getQuotes = async () => {
        setQuotes([])

        if(badCharacter) {
            let api_res = await axios.get(`https://breakingbadapi.com/api/quote?author=${badCharacter.name}`)
            setQuotes(api_res.data)
        }
        
    }

    useEffect(getQuotes, [])

    if(badCharacter === undefined)
        return (
            <div className="container" style = {cardstyle}>
                    <h5>Nothing to Display</h5>
            </div>
        )
    else
        return (
            <div className='container' style={{textAlign: 'center', width: '47rem'}}>
                <img src={badCharacter.img} alt="" style = {imageStyle} />

                <h5>{badCharacter.name} {badCharacter.nickname !== "Unknown" && <span>({badCharacter.nickname})</span>}</h5>

                { 
                    badCharacter.birthday !== "Unknown" 
                    && 
                    <p>
                        <strong>Date of Birth: </strong> {badCharacter.birthday}
                    </p>
                }
                
                {
                    badCharacter.status !== "Unknown" 
                    && 
                    <p>
                        <strong>Status: </strong> {badCharacter.status}
                    </p>
                }

                {
                    badCharacter.portrayed !== "Unknown" 
                    && 
                    <p>
                        <strong>Actor: </strong> {badCharacter.portrayed}
                    </p>
                }

                {
                    badCharacter.appearance.length > 0
                    && 
                    <p>
                        <strong>Seasons: </strong> 
                        {badCharacter.appearance.join(", ")}
                    </p>
                }

                {
                    badCharacter.occupation.length > 0
                    && 
                    <p>
                        <strong>Occupation: </strong> 
                        {badCharacter.occupation.join(", ")}
                    </p>
                }

                <br />

                {
                    quotes.length > 0
                    &&
                    <div>

                        <table class="table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">Quotes</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    quotes.map(quote => (
                                        <tr>
                                            <td>{quote.quote}</td>
                                        </tr>
                                    ))
                                }
                                
                            </tbody>
                        </table>

                    </div>
                }

            </div>
        )
}

export default BadCharacterFull
