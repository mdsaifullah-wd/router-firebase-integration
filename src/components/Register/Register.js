import React from 'react';

const Register = () => {
  return (
    <div>
      <h2>Please Register</h2>
      <form>
        <input type='text' placeholder='Enter your name' />
        <br />
        <br />
        <input type='email' placeholder='Enter your email' />
        <br />
        <br />
        <input type='password' placeholder='Enter your password' />
        <br />
        <br />
        <button type='submit'>Register</button>
      </form>
    </div>
  );
};

export default Register;
