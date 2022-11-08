import React from "react";

class Student extends React.Component
{
    render() {
        return(
            <div>
                <h3>Student Component as Class Component in {this.props.name} </h3>
            </div>
        )
    }
}

export default Student;