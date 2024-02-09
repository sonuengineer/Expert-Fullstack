// Signup.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../../../public/CSS/Signup.css";

function Signup() {
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevUserData) => ({ ...prevUserData, [name]: value }));
  };

  const handleSignup = (e) => {
    e.preventDefault();
    // Store user data in local storage
    localStorage.setItem('userData', JSON.stringify(userData));
    alert('Signup successful!');
    // Redirect to login page
    window.location.href = '/login';
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <h2>Sign Up</h2>
        <form onSubmit={handleSignup}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Username"
            value={userData.username}
            onChange={handleInputChange}
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={userData.email}
            onChange={handleInputChange}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={userData.password}
            onChange={handleInputChange}
          />

          <button type="submit">Submit</button>
        </form>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;





// // Signup.js
// import React from 'react';
// import { Link } from 'react-router-dom';
// import "../../../public/CSS/Signup.css";

// function Signup() {
//   return (
//     <div className="signup-container">
//       <div className="signup-form">
//         <h2>Sign Up</h2>
//         <form>
//           <label htmlFor="username">Username</label>
//           <input type="text" id="username" placeholder="Username" />

//           <label htmlFor="email">Email</label>
//           <input type="email" id="email" placeholder="Email" />

//           <label htmlFor="password">Password</label>
//           <input type="password" id="password" placeholder="Password" />

//           <button type="submit">Submit</button>
//         </form>
//         <p>
//           Already have an account? <Link to="/login">Login</Link>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Signup;
