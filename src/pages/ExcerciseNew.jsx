import React from "react";
import ExcerciseForm from "../components/excerciseForm";
import Card from "../components/card";

class ExcerciseNew extends React.Component {
  state = {
    form: {
        title: '', 
        description: '', 
        image: '', 
        leftColor: '', 
        rightColor: ''
    },
  };

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    return (
      <div className="row">
        <div className="col-sm">
          <Card {...this.state.form} />
        </div>
        <div className="col-sm">
          <ExcerciseForm onChange={this.handleChange} form={this.state.form} />
        </div>
      </div>
    );
  }
}

export default ExcerciseNew;
