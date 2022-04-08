import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase.init';
import './Header.css';

const Header = () => {
  const [user] = useAuthState(auth);
  return (
    <header className='header'>
      <nav>
        <Link to={'/'}>Home</Link>
        <Link to={'/product'}>Product</Link>
        <Link to={'/reviews'}>Reviews</Link>
        <Link to={'/register'}>Register</Link>
        <span>{user?.displayName && user.displayName}</span>
        {user?.uid ? (
          <button onClick={() => signOut(auth)}>Log out</button>
        ) : (
          <Link to={'/login'}>Login</Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
