import React, { useState } from 'react';
import { useNavigate  } from "react-router-dom";
import { login } from "../../repositories/user";

function Login() {
    
  const history = useNavigate ()
  
    const [state, setstate] = useState({});

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
        const response = await login(state);
        history.push(`/login/${response.data.id}`);
      // You can make an HTTP request to your server for authentication here.
      // For this example, we're assuming a successful login if the email and password are not empty.
      if (state) {
        // Simulate a successful login
        // You would typically make a POST request to your backend API here.
        
        alert('Login successful!');
      } else {
        
        alert('Please enter both email and password.');
      }
    } catch (error) {
        
        alert(error);
      alert('An error occurred during login.');
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
            value={state.email}
            onChange={(e) => {
                setstate({ ...state, email: e.target.value });
            }}
          /></label>
        </div>
        <div>
          <label htmlFor="password">Password: 
          <input
            type="password"
            id="password"
            value={state.password}
            onChange={(e) => {
                setstate({ ...state, password: e.target.value });
            }}
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