import React, { useState, useEffect } from 'react'

// Importing axios for fetching quotes using API Request
import axios from 'axios'

// Importing Loading Animation
import LoadingComponent from './loader'

const BadCharacterFull = ({ badCharacter }) => {

    // imageStyle to add inline css to character image
    let imageStyle = {
        width: '16rem',
        border: '2px solid black',
        margin: '1rem'
    }

    // cardstyle to add inline css to Nothing to Display
    let cardstyle = {
        padding: '1rem',
        margin: '1rem',
    };


    // using quotes state to store quotes of selected character
    const [quotes, setQuotes] = useState([])

    // using quoteLoading to store whether it is quotes are loaded or not 
    const [quoteLoading, setQuoteLoading] = useState(true);



    // getquotes function to fetch the quotes of requested character
    // function is async as we are using await for api requests
    const getQuotes = async () => {

        // updating to quotes state to empty array
        setQuotes([])

        // updating quote Loading to true as quotes are been fetched from API 
        setQuoteLoading(true)

        // if badCharacter is defined that request is genuine
        if(badCharacter) {

            // fetching quotes of character using API request
            let api_res = await axios.get(`https://breakingbadapi.com/api/quote?author=${badCharacter.name}`)
            
            // updating quotes state with api_res.data
            setQuotes(api_res.data)
        }
        
        // updating quote Loading to false as loading is complete 
        setQuoteLoading(false)
    }

    // using useEffect Hook to call getQuotes function once
    useEffect(() => {

        getQuotes()
        // eslint-disable-next-line react-hooks/exhaustive-deps
        
    }, [])

    // if badCharacter is undefined i.e., request is not genuine then return Nothing to Display card
    if(badCharacter === undefined)
        return (
            <div className="container" style = {cardstyle}>
                    <h5>No Char Selected to Display</h5>
            </div>
        )
    else
        return (
            <div className='container' style={{textAlign: 'center', width: '47rem'}}>

                {/* Displaying Character Image */}
                <img src={badCharacter.img} alt="" style = {imageStyle} />

                {/* Displaying Character name along with it's nickname
                    if nickname is not available then skkiping the nickname brackets */}
                <h5>{badCharacter.name} {badCharacter.nickname !== "Unknown" && <span>({badCharacter.nickname})</span>}</h5>

                {/* if birthday of character is available then displaying Date of Birth of Character */}
                { 
                    badCharacter.birthday !== "Unknown" 
                    && 
                    <p>
                        <strong>Date of Birth: </strong> {badCharacter.birthday}
                    </p>
                }
                
                {/* if status of character is available then displaying Status of Character */}
                {
                    badCharacter.status !== "Unknown" 
                    && 
                    <p>
                        <strong>Status: </strong> {badCharacter.status}
                    </p>
                }

                {/* if portrayed is available then displaying Actor of character */}
                {
                    badCharacter.portrayed !== "Unknown" 
                    && 
                    <p>
                        <strong>Actor: </strong> {badCharacter.portrayed}
                    </p>
                }

                {/* if character has appreance in any season then displaying all the season of appreance */}
                {
                    badCharacter.appearance.length > 0
                    && 
                    <p>
                        <strong>Seasons: </strong> 
                        {/* using .join function to join all the season using ", " to display to user */}
                        {badCharacter.appearance.join(", ")}
                    </p>
                }

                {/* if occupation is there then displaying all the occcupation to user */}
                {
                    badCharacter.occupation.length > 0
                    && 
                    <p>
                        <strong>Occupation: </strong> 
                        {/* using .join function to join all the occupation with ", " */}
                        {badCharacter.occupation.join(", ")}
                    </p>
                }

                <br />

                {/* if quotes is available and it's length is greater than zero then displaying all the quotes */}
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
                                    // traversing all the quote using map and displaying it to user
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

                {/* if quotes are loading then displaying loading component */}
                {
                    quoteLoading
                    &&
                    <LoadingComponent />
                }

            </div>
        )
}

// exporting BadCharacterFull Functional Component 
export default BadCharacterFull