import React from 'react';
import LoginButton from '../components/LoginButton';
import LogoutButton from '../components/LogoutButton';
import Profile from '../components/Profile';

const Home = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Auth0 React Login Example</h1>
      
      <div style={{ marginBottom: '20px' }}>
        <p>This is a simple demo of integrating Auth0 with a Vite React app.</p>
      </div>

      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginBottom: '30px' }}>
        <LoginButton />
        <LogoutButton />
      </div>

      <hr style={{ margin: '30px 0', borderColor: '#eee' }} />
      
      <Profile />
    </div>
  );
};

export default Home;
