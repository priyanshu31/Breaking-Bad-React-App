import React from 'react'
import { Link } from 'react-router-dom'

const BadCharacter = ({ badCharacter }) => {
    let flag = false;

    return (
        
        <div className="card" style={{width: '16rem', margin: '1rem'}}>
            <div className="card-body">
                <h5 className="card-title">{badCharacter.name}</h5>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">
                    <strong> Occupation: </strong> {badCharacter.occupation.join(", ")}
                </li>
                <li className="list-group-item">
                    <strong> Date of Birth: </strong> {badCharacter.birthday}
                </li>
                <li className="list-group-item">
                    <strong> Status: </strong> {badCharacter.status}
                    </li>
            </ul>
            <div className="card-body">
                <Link to={{pathname: '/readmore', badCharacter: badCharacter }} className="btn btn-primary">Read More...</Link>
            </div>
        </div>

    )
}

export default BadCharacter
