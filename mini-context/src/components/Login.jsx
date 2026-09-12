import React from 'react';
import UserContext from '../context/UserContext';


function Login() {
    const [userName, setUserName] = React.useState("");
    const [password, setPassword] = React.useState("");

    const { setUser} = React.useContext(UserContext);

    function handleSubmit(e) {
        e.preventDefault();
        setUser({userName, password});
        console.log("Form submitted");      
    }
  return (
    <div className="login-container">
      <div className="login-card">
        <h3>Login</h3>
        <form className="login-form">
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Username"
            className="login-input"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="login-input"
          />
          <button type="submit" onClick={handleSubmit} className="login-button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;