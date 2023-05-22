import React, { useState } from 'react';
import { useAuth } from '../contexts/auth';

const LoginForm = () => {
  const { login } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform login action with username and password
    login(username, password);
    // Reset the form
    setUsername('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: '3rem', marginBottom: '2rem', width: '50%' }}>
      <div style={{ backgroundColor: '#B3E5BE', padding: '1rem', borderRadius: '0.5rem', marginBottom: '1rem' }}>
        <div style={{ marginBottom: '1rem' }}>
          <div style={{ display: 'flex', marginBottom: '1rem' }}>
            <label htmlFor="username" style={{ fontWeight: 'bold', flex: '1', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              Username
              <input
                id="username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                style={{ marginLeft: '0.5rem', width: '50%' }}
              />
            </label>
          </div>
        </div>
        <div style={{ display: 'flex', marginBottom: '1rem' }}>
          <label htmlFor="password" style={{ fontWeight: 'bold', flex: '1', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            Password
            <input
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ marginLeft: '0.5rem', width: '50%' }}
            />
          </label>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button type="submit" style={{ backgroundColor: '#379237', color: 'black', padding: '0.5rem', borderRadius: '0.25rem', width: '30%' }}>Login</button>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;