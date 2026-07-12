import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  if (isAuthenticated) {
    return null;
  }

  return (
    <button
      onClick={() => loginWithRedirect()}
      style={{
        padding: '10px 20px',
        fontSize: '16px',
        backgroundColor: '#0056b3',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
      }}
    >
      Log In
    </button>
  );
};

export default LoginButton;
