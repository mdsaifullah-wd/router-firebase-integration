import React from 'react';

const Login = () => {
  return (
    <div>
      <h2>This is login</h2>
      <form>
        <button style={{ marginTop: '20px' }}>Sign in With Google</button>
        <br />
        <br />
        <input type='email' placeholder='Enter your email' />
        <br />
        <br />
        <input type='password' placeholder='Enter your password' />
        <br />
        <br />
        <button type='submit'>Login</button>
      </form>
    </div>
  );
};

export default Login;
