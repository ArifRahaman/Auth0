import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();

  if (!isAuthenticated) {
    return null;
  }

  return (
    <button
      onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
      style={{
        padding: '10px 20px',
        fontSize: '16px',
        backgroundColor: '#dc3545',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
      }}
    >
      Log Out
    </button>
  );
};

export default LogoutButton;
