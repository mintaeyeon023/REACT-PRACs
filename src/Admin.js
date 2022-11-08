import React from "react";

class Admin extends React.Component {

    componentWillUnmount() 
    {
        console.log("Data Unmounted !")
    }
    render() {
        return (
            <div>
                <h3>Admin Component</h3>
            </div>
        )
    }

}

export default Admin;