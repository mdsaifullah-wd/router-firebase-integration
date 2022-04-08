import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../hooks/useFirebase';
import './Header.css';

const Header = () => {
  const { user } = useFirebase();
  return (
    <header className='header'>
      <nav>
        <Link to={'/'}>Home</Link>
        <Link to={'/product'}>Product</Link>
        <Link to={'/reviews'}>Reviews</Link>
        <Link to={'/register'}>Register</Link>
        {user.uid ? (
          <button>Log out</button>
        ) : (
          <Link to={'/login'}>Login</Link>
        )}{' '}
      </nav>
    </header>
  );
};

export default Header;
