// Login.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../../../public/CSS/Login.css";

function Login() {
  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevLoginData) => ({ ...prevLoginData, [name]: value }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Retrieve stored user data
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
      const userData = JSON.parse(storedUserData);
      // Check if entered login credentials match stored data
      if (
        loginData.username === userData.username &&
        loginData.password === userData.password
      ) {
        // Redirect to Navbar if login is successful
        window.location.href = '/navbar';
      } else {
        setError('Invalid username or password');
      }
    } else {
      setError('No user found. Please sign up.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Username"
            value={loginData.username}
            onChange={handleInputChange}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={loginData.password}
            onChange={handleInputChange}
          />

          <button type="submit">Submit</button>
        </form>
        <p>{error}</p>
        <p>
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;




// import React from 'react';
// import { Link } from 'react-router-dom';
// import "../../../public/CSS/Login.css";
// //import '/CSS/Login.css'

// function Login() {
//   return (
//     <div className="login-container">
//       <div className="login-form">
//         <h2>Login</h2>
//         <form>
//           <label htmlFor="username">Username</label>
//           <input type="text" id="username" placeholder="Username" />

//           <label htmlFor="password">Password</label>
//           <input type="password" id="password" placeholder="Password" />

//           <button type="submit">Submit</button>
//         </form>
//         <p>
//           Don't have an account? <Link to="/signup">Sign up</Link>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Login;
