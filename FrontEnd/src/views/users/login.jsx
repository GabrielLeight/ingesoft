import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate  } from "react-router-dom";
import { login } from "../../repositories/user";

function Login() {
  
    
  const history = useNavigate ()
  
    const [state, setstate] = useState({});

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      alert(state.email);
      alert(state.password);
      const response = await login(state);
    // Store the token in local storage or a secure place for future use
      localStorage.setItem('authToken', response.token);
      history(`/users/${response.data.id}`);
		} catch (error) {
			alert(error);
			alert("A ocurrido un error al actualizar");
		}
  };

  return (
    <div className="container mt-4" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center',
      }}>
      <h2>Login</h2>
      <form style={
          { 
            padding: 20,
            width: '50%',
            height: '100%',
            background: 'white',
            boxShadow: '0px 4px 10px 2px rgba(0, 0, 0, 0.10)',
            borderRadius: '49px',
            justifyContent: 'center',
            alignItems: 'center',
          }
        }>
          <div className="row"  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div className="form-group" >
              <label htmlFor="email">
                Email: 
                <input
                  type="text"
                  id="email"
                  value={state.email}
                  onChange={(e) => {
                    setstate({ ...state, email: e.target.value });
                  }}
                
                />
              </label>
            </div>
          </div>
          <div className="row"  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div className="form-group" >
              <label htmlFor="password">
                Password: 
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
          </div>
          <div className="row"  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Button variant="primary" type="submit" onClick={handleLogin} 
        style={
          {
          background: '#87ceeb',
          color: '#2f4f4f',
           }}>
          Login
        </Button>
        </div>
      </form>
    </div>
  );
}

const styles = {
  root: {
    flex: 1,
    backgroundColor: '#f6f8fa',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    marginHorizontal: 2,
    flex: 1,
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#266797',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 3,
  },
  input: {
    color: 'rgb(169, 27, 13)',
    textAlign: 'center',
  },
};
export default Login;