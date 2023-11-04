import React, { useState } from 'react';
import { useNavigate  } from "react-router-dom";
import { login } from "../../repositories/user";

function Login() {
    
  const history = useNavigate ()
  
    const [state, setstate] = useState({  
      email: '', 
    password: '' 
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await login(state);
    // Store the token in local storage or a secure place for future use
      localStorage.setItem('authToken', response.token);
      history.push(`/users/`);
		} catch (error) {
			console.log(error);
			alert("A ocurrido un error al actualizar");
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
        <button type="submit" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;