import React from 'react'
import Card from './card'

const ExcerciseList = ({excercises}) => (
        <div>
             {
                excercises.map((excercise) => {
                    return(
                        <Card
                            key={excercise.id}
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


export default ExcerciseList