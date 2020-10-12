import React from "react";
import "./Login.css";
import {GLogin} from '../Google_Login/GLogin';
import {Logout} from '../Google_Login/Logout';

export default function Login() {

    return (
    
      <div>
        <h2>Login</h2>

        <div class="g-signin2" data-onsuccess="onSignIn">
          <GLogin />
          <Logout />
        </div>
  
        
      </div>
      
    );  
}
