import React from 'react'
import exersice from '../images/exercise.png'
import './styles/Card.css'

class Card extends React.Component {
    render(){
        return (
           <div className="card mx-auto Fitness-Card">
               <div className="body-card">
                    <div className="row center">
                        <div className="col-6">
                            <img src={exersice} alt="" className="float-right" />
                        </div>
                        <div className="col-6 Fitness-Card-Info">
                            <h1>Technique Guides</h1>
                            <p>Learn amazing street workout and calistthenics</p>
                        </div>
                    </div>
               </div>
           </div>
        )
    }
}

export default Card