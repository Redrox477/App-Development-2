import React from 'react'
import './register.css'
import { Link } from 'react-router-dom'

export default function Register() {
  return (
    <div className='outer-cont'>
      <h1>GiftVibes</h1>
      <form class="box">
        <h1>Register</h1>
        <input type="text" name="username" placeholder="Name" required/>
        <input type="text" name="email" placeholder="Email" required/>
        <input type="password" name="password" placeholder="Password" pattern=".{8,}"   required title="8 characters minimum"/>
        <input type="submit" value="Register" name="submit" />
        <br/>
        <br/>
        <hr/>
        <p>Already have an Account ? <Link to="/giftvibes/login" style={{color:"wheat"}}>Login here</Link></p>
      </form>
    </div>
  )
}
