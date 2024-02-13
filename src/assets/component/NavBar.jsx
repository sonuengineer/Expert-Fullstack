import React from 'react'
import { useState ,useEffect} from 'react'
import { useLocation } from 'react-router-dom';
import { Link, useNavigate} from 'react-router-dom';
import Pagination1 from './Pagination1'
import InfiniteScroll from './Infintescroll'
import PaginationButton from './PaginationButton'
import FAQ from './FAQ'
import { useSelector , useDispatch} from 'react-redux';
import {logout} from "../Redux/authActions"
import {toggleBackgroundColor}  from "../Redux/authActions"
import Rating from './Rating';

function NavBar() {
  const { username, lastLogin } = useSelector((state) => state.auth);
  const backgroundColor = useSelector((state) => state.background.backgroundColor);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login"); // Redirect to Navbar

  };

  const handleColorToggle = () => {
    dispatch(toggleBackgroundColor());
  };

  const [activeComponent, setActiveComponent] = useState(null);

  const handleButtonClick = (component) => {
    setActiveComponent(component);
  };

  const sidebarStyle = {
    backgroundColor: '#333',
    color: '#fff',
    padding: '20px',
    width: '200px',
    height: '100vh',
    position: 'fixed',
    top: 0,
    left: 0,
  };

  const contentStyle = {
    marginLeft: '220px', // Adjust as needed to leave space for the sidebar
    padding: '20px',
  };

  return (
    <>
      <div style={{ ...sidebarStyle, display: 'flex', flexDirection: 'column' }}>
        <button onClick={() => handleButtonClick('pagination1')}>Pagination 1</button>
        <button onClick={() => handleButtonClick('paginationButton')}>Pagination Button</button>
        <button onClick={() => handleButtonClick('infiniteScroll')}>Infinite Scroll</button>
        <button onClick={() => handleButtonClick('faq')}>FAQ</button>
        <button onClick={() => handleButtonClick('Rating')}>Rating Button</button>
      </div>
      <div style={{ ...contentStyle, backgroundColor }}>
        <h2>Welcome to the Navbar, {username || 'Guest'}!</h2>
        {lastLogin && (
          <p>
            Last Login: {lastLogin.username} at {lastLogin.timestamp}
          </p>
        )}
        <button onClick={handleColorToggle}>Change BG</button>
        {username && <button onClick={handleLogout}>Logout</button>}
        <div>
          {activeComponent === 'pagination1' && <Pagination1 />}
          {activeComponent === 'paginationButton' && <PaginationButton />}
          {activeComponent === 'infiniteScroll' && <InfiniteScroll />}
          {activeComponent === 'faq' && <FAQ />}
          {activeComponent === 'Rating' && <Rating />}
        </div>
      </div>
    </>
  );
}

export default NavBar;






// function NavBar(props) {
//   // const location = useLocation();
//   // const username = location.state && location.state.username;

//   const { username, lastLogin } = useSelector((state) => state.auth);
//   const backgroundColor = useSelector((state) => state.background.backgroundColor);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     dispatch(logout());
//     navigate('/login', )

//   };
//   const handleColorToggle = () => {
//     // Dispatch the action to toggle the background color
//     dispatch(toggleBackgroundColor());
//   };
  

//     const appContainerStyle = {
//         position: "relative", 
//       };
//       const buttonContainerStyle = {
//         position: "fixed",
//         top: "10px",
//         width: "100%", 
//         textAlign: "center",
//         zIndex: 1000,
//       };
//       const containerStyle = {
//         textAlign: "center",
//         maxWidth: "600px",
//         margin: "80px auto 20px",  
//         padding: "10px",
//         border: "1px solid #ccc",
//         borderRadius: "5px",
//         backgroundColor: "#f7f7f7",
//       };

//     const [activePagination, setActivePagination] = useState("");

//     const handlePaginationClick = (paginationType) => {
//       setActivePagination(paginationType);
//     };
   



//   return (
//     <>
//         <div style={{ backgroundColor }}>
//       <h2>
//         Welcome to the Navbar, {username || 'Guest'}!
//       </h2>
//       <button onClick={handleColorToggle}>chanegBG</button>
//       {lastLogin && (
//         <p>
//           Last Login: {lastLogin.username} at {lastLogin.timestamp}
//         </p>
//       )}
//             {username && (
//         <button onClick={handleLogout}>Logout</button>
//       )}
//     </div>
//     <div style={appContainerStyle}>
//       <div style={buttonContainerStyle}>
//         <button onClick={() => handlePaginationClick("pagination1")}>
//           Pagination with next and previous
//         </button>
//         <button onClick={() => handlePaginationClick("paginationButton")}>
//           Pagination with dynamic button
//         </button>
//         <button onClick={() => handlePaginationClick("infiniteScroll")}>
//           Infinite scroll
//         </button>
//         <button onClick={() => handlePaginationClick("Accordian")}>
//             Accordian
//         </button>
//       </div>
//       <div style={containerStyle}>
//       {activePagination === "pagination1" && <Pagination1 />}
//       {activePagination === "paginationButton" && <PaginationButton />}
//       {activePagination === "infiniteScroll" && <InfiniteScroll />}
//       { activePagination==="Accordian" && <FAQ/>}
//       </div>
     
//     </div>
//     </>
//   )
// }

