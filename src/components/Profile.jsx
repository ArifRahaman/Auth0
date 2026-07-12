import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading user profile...</div>;
  }

  if (!isAuthenticated) {
    return <div>Please log in to view your profile.</div>;
  }

  return (
    <div style={{ textAlign: 'left', marginTop: '20px', padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
        <img
          src={user.picture}
          alt={user.name}
          style={{ borderRadius: '50%', width: '60px', height: '60px' }}
        />
        <div>
          <h2 style={{ margin: 0 }}>{user.name}</h2>
          <p style={{ margin: 0, color: '#666' }}>{user.email}</p>
        </div>
      </div>
      
      <div style={{ marginTop: '20px' }}>
        <h3 style={{ fontSize: '16px', marginBottom: '10px' }}>Raw User Data Available:</h3>
        <pre style={{ 
          backgroundColor: '#282c34', 
          color: '#abb2bf', 
          padding: '15px', 
          borderRadius: '5px',
          overflowX: 'auto',
          fontSize: '14px'
        }}>
          {JSON.stringify(user, null, 2)}
        </pre>
      </div>
    </div>
  );
};

export default Profile;
