import React from 'react';
import { auth } from '../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/';

  const handleSignInWithGoogle = () => {
    signInWithGoogle().then(() => {
      navigate(from, { replace: true });
    });
  };
  return (
    <div>
      <h2>Please login</h2>
      <button onClick={handleSignInWithGoogle} style={{ marginTop: '20px' }}>
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
