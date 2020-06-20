import React from 'react'
import { Link } from 'react-router-dom'

const ButtonAdd =(props)=> {
    return(
    <div className="container mt-3">
        <div className="row">
            <div className="col-md-12 text-center">
                <Link to="/excercise/new">
                <img 
                    src="https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/add.png?alt=media&token=fbe1d973-4b4f-42d8-b76e-2c4354f6ed9d"
                    width="50"
                    height="55"
                    alt="ButtonAdd"
                />
                </Link>
            </div>    
        </div>
    </div>
    )
}

export default ButtonAdd