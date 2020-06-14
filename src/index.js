import React from 'react'
import ReactDOM from 'react-dom'
import Card from './components/card'
import 'bootstrap/dist/css/bootstrap.css'


const container = document.getElementById('root')

ReactDOM.render(<Card
                  title="Technique Guides"
                  description="Learn amazing street workout and calistthenics"
                  image="https://raw.githubusercontent.com/davidnherran/fitness-manager/master/src/images/exercise.png"
                  leftColor="#A74CF2"
                  rightColor="#617BFB"
                />, container)