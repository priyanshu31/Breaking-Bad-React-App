import React from 'react'
import { Link } from 'react-router-dom'

// Functional Component BadCharacter 

const BadCharacter = ({ badCharacter }) => {

    // using badCharacter propa passed by BadCharacters Component to display the card

    return (
        
        <div className="card" style={{width: '16rem', margin: '1rem'}}>
            
            <div className="card-body">
                <h5 className="card-title">{badCharacter.name}</h5>
            </div>

            <ul className="list-group list-group-flush">
                
                <li className="list-group-item">
                    {/* using .join function to join the element in array with ", " */}
                    <strong> Occupation: </strong> {badCharacter.occupation.join(", ")}
                </li>

                <li className="list-group-item">
                    <strong> Date of Birth: </strong> {badCharacter.birthday}
                </li>

                <li className="list-group-item">
                    <strong> Status: </strong> {badCharacter.status}
                </li>

            </ul>

            {/* using Link to navigate to '/readmore' path when user click on readmore button */}
            <div className="card-body">

                {/* passing badCharacter object in location along with pathname */}
                <Link to={{pathname: '/readmore', badCharacter: badCharacter }} className="btn btn-primary">Read More...</Link>
            
            </div>

        </div>

    )
}

// exporting BadCharacter Functional Component
export default BadCharacter