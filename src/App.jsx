
import NavBar from './assets/component/NavBar'


import './App.css'
import Login from './assets/component/Login'
import Signup from './assets/component/Signup'
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import NewLogin from './assets/component/NewLogin';


function App() {
  return (
  //   <Router>
  //   <Routes>
  //   <Route path="/navbar"element={<NavBar/>} />
  //     <Route path="/login"element={<Login/>} />
  //     <Route path="/signup" element={<Signup/>} />
     
  //   </Routes>
  // </Router>
   <NewLogin/>
  );
}

export default App;






