import React from 'react';
import GoogleLogout from 'react-google-login';

const clinetID = '209951486190-ci1u206or30c25jrlm3augl5oumfjurs.apps.googleusercontent.com'

export function Logout() {
    const onSuccess = () => {
        alert('Logout made successfully');
    };

    return(
        <div>
            <GoogleLogout
            clientId={clinetID}
            buttonText="Logout"
            onLogoutSuccess={onSuccess}
            ></GoogleLogout>
        </div>
    )
}

export default Logout;