import React from 'react';
import "./Loginregister.css";

const Homepage = (props) =>{
    return(
        <>
            <div className="homepage">
                <h1>Hello {props.User.name}</h1>
                <h4>Your email address {props.User.email}</h4>
                <div className="button" onClick={() => props.setLoginUser({})}>Logout</div>
            </div>
        </>
    );
}
export default Homepage;