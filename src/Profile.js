import { useState } from 'react';

function Profile() {
    const [loggedIn, setLoggedIn] = useState(2);
    // 1, 2, 3
    return (
        <div>
            {
                loggedIn == 1 ? <h4>Welcome Professor !</h4> :
                loggedIn == 2 ? <h4>Welcome Anonnymous !</h4> :
                <h5>Welcome hecker !</h5> 
            }
        </div>
    )
}

export default Profile;