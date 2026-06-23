import { useState } from 'react';
import './LoginForm.css'
export function LoginForm(){
    const [showPassword, setShowPassword] =  useState(false);
    function showPass(){setShowPassword(!showPassword)};
    return(
        <div className="form">
        <p>Hello, welcome to my website </p>
        <div>
            <div>
                <input type="text" placeholder="Email" />
            </div>
            <input type={showPassword ? "text" : "password"} placeholder="Password" />
            <button onClick={showPass}>Show</button>
        </div>
        <button>Login</button>
        <button>Sign up</button>
        </div>
    );
}