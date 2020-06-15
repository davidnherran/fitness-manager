import React from 'react'
import circles from '../images/circles.png'
import './styles/Card.css'

class Card extends React.Component {
    render(){
        const { title, description, image, leftColor, rightColor } = this.props
        return (
           <div className="card mx-auto Fitness-Card mt-3"
                style={{
                    backgroundImage: `url(${circles}), linear-gradient(to right, ${leftColor}, ${rightColor})`
                }}
           >
               <div className="body-card">
                    <div className="row center">
                        <div className="col-6">
                            <img src={image} alt="" className="float-right" />
                        </div>
                        <div className="col-6 Fitness-Card-Info">
                            <h1>{title}</h1>
                            <p>{description}</p>
                        </div>
                    </div>
               </div>
           </div>
        )
    }
}

export default Card