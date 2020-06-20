import React from 'react'

class ExcerciseNew extends React.Component {

    handleClick =()=> {
        console.log('clicked')
    }

    render(){
        return (
            <button onClick={this.handleClick}>
                Send
            </button>
        )
    }
}

export default ExcerciseNew