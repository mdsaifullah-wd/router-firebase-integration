import React from 'react';
import useFirebase from '../hooks/useFirebase';

const Login = () => {
  const { signInWithGoogle } = useFirebase();
  return (
    <div>
      <h2>This is login</h2>
      <button onClick={signInWithGoogle} style={{ marginTop: '20px' }}>
        Sign in With Google
      </button>
      <form>
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
