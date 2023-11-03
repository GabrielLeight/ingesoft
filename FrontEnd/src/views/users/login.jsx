import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      // You can make an HTTP request to your server for authentication here.
      // For this example, we're assuming a successful login if the email and password are not empty.
      if (email && password) {
        // Simulate a successful login
        // You would typically make a POST request to your backend API here.
        alert('Login successful!');
      } else {
        setError('Please enter both email and password.');
      }
    } catch (error) {
      setError('An error occurred during login.');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form>
        <div>
          <label htmlFor="email">Email:
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          /></label>
        </div>
        <div>
          <label htmlFor="password">Password: 
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          /> 
          </label>
        </div>
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;