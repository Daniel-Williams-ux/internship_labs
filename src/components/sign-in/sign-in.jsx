import React from 'react';
import './sign-in.css';

const SignIn = () => (
  <div>
    <h1>Have an account Already</h1>
    <h3>Sign in here!</h3>

    <form>
      <label htmlFor="email">Email</label>
      <input name="email" type="email" />
      <label for="password">Password</label>
      <input name="password" type="password" />
      <label for="text">Full Name</label>
      <input name="text" type="text" />

      <button>SIGN IN</button>
      <p>Don't have an account? Sign up</p>
    </form>
    
  </div>
)

export default SignIn;