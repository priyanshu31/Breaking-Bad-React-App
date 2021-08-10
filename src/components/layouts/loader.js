import React from 'react'
import loadingAnimation from '../../imgs/loading.gif'

const loader = () => {

    return (
        <div style={{textAlign: 'center'}}>
            <img src={loadingAnimation} alt="" />
        </div>
    )
}

export default loader
