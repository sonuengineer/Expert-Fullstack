
import NavBar from './assets/component/NavBar'

import FAQ from './assets/component/FAQ'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './assets/component/Login'
import Signup from './assets/component/Signup'
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
    <Routes>
    <Route path="/navbar"element={<NavBar/>} />
      <Route path="/login"element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
     
    </Routes>
  </Router>
    // <>
    // {/* <NavBar/> */}
    // <Login/>
    // {/* <FAQ/> */}
    // </>
  );
}

export default App;






