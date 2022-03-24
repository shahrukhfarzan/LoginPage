import { useState } from "react";
import "./login.css";
import GoogleIcon from "../icon/google";
import FacebookIcon from "../icon/facebook";
import AppleIcon from "../icon/apple";
import Logo from "./img/logo.png";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState();
  
  const [password, setPassword] = useState();
 let navigator = useNavigate();

  const handleSubmit = () => {
    
      if(!email|| !password){
          return alert('email and password required');
      }else{
        localStorage.setItem('email',email);
        localStorage.setItem('password',password);
        navigator('/list');
      }
  };
  const getInput = e => {
    e.target.name === "email"
      ? setEmail(e.target.value)
      : setPassword(e.target.value);
  };
  return (
    <>
      <div className="body-container">
        <h5 className="logo">Your logo</h5>
        <div className="contain">
          <div className="data">
            <h3>Sign in to</h3>
            <h5>Welcome to Innovation</h5>
            <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.</p>
          </div>
          <div className="image">
            <img style={{width:'240px', height:'240px'}}src={Logo} alt="logo" />
          </div>
        </div>
        <div className="form-container">
          <div className="form-header">
            <div className="header-text">
              <h4>Welcome to <span className="text-blue">Innovation</span></h4>
            </div>
            <div className="header-sign">
              <label htmlFor="signup">No Account ?</label> <br />
              <label htmlFor="signup" className="text-blue">Sign Up</label>
            </div>
          </div>
          <h3>Sign in</h3>
          <div className="login-btn">
            <div className="google">
            
              <button><GoogleIcon /> Sign in with Google</button>
            </div>
            <div className="facebook">
              <button><FacebookIcon /></button>
            </div>
            <div className="apple">
              <button><AppleIcon /></button>
            </div>
          </div>
          <div className="input-wrapper">
            <label htmlFor="username">Username or Email</label>
            <input
              type="text"
              onChange={e => getInput(e)}
              className="username"
              placeholder="uername or email"
              value={email}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              onChange={e => getInput(e)}
              className="password"
              placeholder="password"
              value={password}
            />
          </div>

          
          <label htmlFor="forget-password" className="text-blue float-right">Forget Password</label>
          <button className="signin-button" onClick={handleSubmit}>Sign in</button>
        </div>
      </div>
    </>
  );
};

export default Login;
