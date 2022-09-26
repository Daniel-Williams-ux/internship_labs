import React from 'react';
import './sign-up.css';
import content from '../../static/index.jsx'

const SignUp = () => (
  <div className="sign-up">
    <h1>Don't Have an account?</h1>
    <h3>Sign up here!</h3>
    <form>
      {content.inputs.map((input, key) => {
    return (
      <div key={key}>
        <label htmlFor={input.name}>{input.label}</label>
        <br/>
        <input type={input.type} name={input.name} />
      </div>
    )
      })}

    <label htmlFor="option">User Type</label>
    <select id="options">
      <option value="Developer">Developer</option>
      <option value="Owner">Owner</option>
    </select>
    <button>SIGN UP</button>  
    </form>
    <p>Have an account? Sign In</p>
    
  </div>
)

export default SignUp;