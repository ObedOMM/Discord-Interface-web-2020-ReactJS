import { Button } from '@material-ui/core';
import { auth, provider } from "./firebase";
import React from 'react';
import "./Login.css";

function Login() {
    const signIn = () => {
        // Do clever google login shizz....
        auth.signInWithPopup(provider).catch((error) => alert(error.message));
    };

    return (
        <div className="login">
 
            <div className="login__logo">
                <img src="https://ledigitalpourtous.fr/wp-content/uploads/2020/02/Discord-LogoWordmark-Color.png" alt="" />
            </div>

            <Button onClick={signIn}>Se connecter</Button>
        </div>
    )
}

export default Login
