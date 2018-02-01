import React, {component } from 'react';


const RegisterContent = () => {
    return (
        <div className="content">
            <div  className="register-wrapper">
             <h1>Register Form</h1>
                <div>
                    <form class="register-form" action="/register" method="POST">
                        <label for="name">Name:*</label>
                        <input name="name" type="text" required />
                        <label for="email">Email:*</label>
                        <input name="email" type="email" required />
                        <label for="password">Password:*</label>
                        <input name="password" type="password" required/>
                        <label for="password-confirm">Confirm Password:*</label>
                        <input name="password-confirm" type="password" required/>
                        <input type="submit" value="Register →" />
                    </form>
                </div>
            </div>    
        </div>
    )
}

export default RegisterContent;