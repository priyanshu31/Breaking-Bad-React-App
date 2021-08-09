import React from 'react'

const BadCharacterFull = ({ badCharacter }) => {

    let imageStyle = {
        width: '16rem',
        border: '2px solid black',
        margin: '1rem'
    }

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

            <br />

            <div className="row">

                <div className="col-5" >

                    <table class="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">Occupation</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                badCharacter.occupation.map(occupation => (
                                    <tr>
                                        <td>{occupation}</td>
                                    </tr>
                                ))
                            }
                            
                        </tbody>
                    </table>

                </div>

            </div>

        </div>
    )
}

export default BadCharacterFull
