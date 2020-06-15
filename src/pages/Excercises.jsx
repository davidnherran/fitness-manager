import React from 'react'
import Card from '../components/card'
import Welcome from '../components/welcome'

class Excercises extends React.Component {
    render(){
        return(
            <div>
            <Welcome 
              username="David"
            />
            <Card
              title="Technique Guides"
              description="Learn amazing street workout and calistthenics"
              image="https://raw.githubusercontent.com/davidnherran/fitness-manager/master/src/images/exercise.png"
              leftColor="#A74CF2"
              rightColor="#617BFB"
            />
        </div>
        )
    }

}

export default Excercises