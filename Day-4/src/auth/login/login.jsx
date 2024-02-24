import React from 'react'
import './login.css'
import { Link, Navigate, useNavigate } from 'react-router-dom'

export default function Login() {

  const navigate = useNavigate();

const SubmitClick = (e) => {
      e.preventDefault() ;
      console.log("check");
      navigate("/giftvibes/user/profile");
}

  return (
    <div className='outer-cont'>
      <h1>GiftVibes</h1>
      <form class="box" onSubmit={SubmitClick}>
        <h1>login</h1>
        <input type="email" name="email" placeholder="Email" required/>
        <input type="password" name="password" placeholder="Password" pattern=".{8,}"   required title="8 characters minimum"/>
        <input type='submit' value="Login" />
        <br/>
        <a href='#' style={{color:'wheat'}}>Forgot password ?</a>
        <br/>
        <br/>
        <hr/>
        <p>Don't have an Account ? <Link to="/giftvibes/register" style={{color:"wheat"}}>Register here</Link></p>
      </form>
    </div>
  )
}
