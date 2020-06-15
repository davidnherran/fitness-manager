import React from 'react'
import Card from './card'

function ExcerciseList(props){
    return(
        <div>
             {
                props.excercises.map((excercise) => {
                    return(
                        <Card
                            title={excercise.title}
                            description={excercise.description}
                            image={excercise.img}
                            leftColor={excercise.leftColor}
                            rightColor={excercise.rightColor}
                        />
                    )
                })
            }
        </div>
    )
}

export default ExcerciseList