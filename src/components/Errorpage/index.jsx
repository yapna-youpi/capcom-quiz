import React from 'react'
import batman from '../../images/batman.png'

const centerh2 = {
    textAlign: 'center',
    marginTop: '50px'
}
const centerImg = {
    display: 'block',
    margin: '40px auto'
}

const Errorpage = () => {
    return (
        <div className="quiz-bg">
            <div className="container">
                <h2 style={centerh2}>oups, cette page n'existe pas  M,Mme ...</h2>
                <img style={centerImg} src={batman} alt="image batman" />
            </div>
        </div>
    )
}

export default Errorpage
