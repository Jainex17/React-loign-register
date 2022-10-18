import axios from 'axios';
import React,{useState} from 'react';
import "./Loginregister.css";
import { Link,useNavigate } from "react-router-dom";

const Login = ({setLoginUser}) =>{
    
    const navigate = useNavigate();

    const [User, setUser] = useState({
        email:"",
        pwd:""
    })

    const valuehandle = e =>{
        const {name,value} = e.target
        setUser({
            ...User,
            [name]: value
        })
    }

    const handleloginclick = () =>{
        const { email, pwd } = User
        if(email && pwd){
            axios.post("http://localhost:9002/login",User)
            .then(res => {
                alert(res.data.msg)
                setLoginUser(res.data.user)
                navigate("/")
            })
        }else{
            alert("Enter Valid Value");
        }
    }
    
    return(
        <>
            <div className="section">
                <div className="container">
                    <div className="form">
                        <div className="right-side">
                                
                                <div className="forms">
                                    <h1 className="forms-heading">Login</h1>
                                
                                    <div className="form-inputs">
                                        <i className="fa fa-envelope"></i>
                                        <input type="email" placeholder="Email"  name="email" value={User.email} onChange={valuehandle} required />
                                    </div>
                                    <div className="form-inputs">
                                        <i className="fa fa-eye" id="password_eye"></i>
                                        <input
                                            className="password-input" type="password" placeholder="Password" name="pwd" value={User.pwd} onChange={ valuehandle } required />
                                    </div>

                                    <div className="submit-button">
                                        <input type="submit" value="login" onClick={handleloginclick} />
                                    </div>
                                    <div className="form-acc">
                                        <p>Don't have account?</p><Link to="/register">Create now</Link>
                                    </div>
                                </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    );
}
export default Login;