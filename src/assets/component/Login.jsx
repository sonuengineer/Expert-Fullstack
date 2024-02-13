// Login.js
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../../public/CSS/Login.css";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../Redux/authActions";

function Login() {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  //const history = useHistory();
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevLoginData) => ({ ...prevLoginData, [name]: value }));
  };

  //   const handleLogin = (e) => {
  //     e.preventDefault();
  //     // Retrieve stored user data
  //     const storedUserData = localStorage.getItem('userData') ||"[]";
  //     const userDataArray = JSON.parse(storedUserData);
  //     console.log(userDataArray)
  // // Find the user with matching credentials
  // const matchedUser = userDataArray.find(
  //   (user) =>
  //     user.username === loginData.username &&
  //     user.password === loginData.password
  // );
  // if (matchedUser) {
  //   // Dispatch login success action with username and timestamp
  //   const timestamp = new Date().toLocaleString();
  //   dispatch(loginSuccess(matchedUser.username, timestamp));
  //   navigate('/navbar'); // Redirect to Navbar
  // } else {
  //   setError('Invalid username or password');
  // }

  //     // if (storedUserData) {
  //     //   const userData = JSON.parse(storedUserData);
  //     //   // Check if entered login credentials match stored data
  //     //   if (
  //     //     loginData.username === userData.username &&
  //     //     loginData.password === userData.password
  //     //   ) {
  //     //     // Redirect to Navbar if login is successful
  //     //     //window.location.href = '/navbar';
  //     //     //1)history.push('/navbar', { username: loginData.username });

  //     //  // 2)navigate('/navbar', { state: { username: loginData.username } });
  //     //   const timestamp = new Date().toLocaleString();
  //     //   dispatch(loginSuccess(loginData.username, timestamp));
  //     //   navigate('/navbar', );
  //     //   } else {
  //     //     setError('Invalid username or password');
  //     //   }
  //     // } else {
  //     //   setError('No user found. Please sign up.');
  //     // }
  //   };

  const handleLogin = (e) => {
    e.preventDefault();

    // Retrieve stored user data
    const storedUserData = localStorage.getItem("userData") || "[]";
    const userDataArray = JSON.parse(storedUserData);

    if (Array.isArray(userDataArray)) {
      // Find the user with matching credentials
      const matchedUser = userDataArray.find(
        (user) =>
          user.username === loginData.username &&
          user.password === loginData.password
      );

      if (matchedUser) {
        // Dispatch login success action with username and timestamp
        const timestamp = new Date().toLocaleString();
        dispatch(loginSuccess(matchedUser.username, timestamp));
        navigate("/navbar"); // Redirect to Navbar
      } else {
        setError("Invalid username or password");
      }
    } else {
      setError("No user found. Please sign up.");
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
