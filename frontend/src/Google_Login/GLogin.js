import React from 'react';
import GoogleLogout, { GoogleLogin } from 'react-google-login';

const clinetID = '209951486190-ci1u206or30c25jrlm3augl5oumfjurs.apps.googleusercontent.com'

export function GLogin() {
    const onSuccess = (res) => {
        console.log('[Login Success] currentUser:', res.profileObj);
    };

    const onFailure = (res) => {
        console.log('[Login failed] res:', res);
    };

    return(
        <div>
            <GoogleLogin
            clientId={clinetID}
            buttonText="Login"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            style={{marginTop: '100px' }}
            isSignedIn={true}
            ></GoogleLogin>
        </div>
    )
}
