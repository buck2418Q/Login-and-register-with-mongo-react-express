import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './screens/Navbar';
import Home from './screens/Home';
import Login from './screens/Login';
import Register from './screens/Register';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="home" element={<Home/>}/>
        <Route path="" element={<Login/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="register" element={<Register/>}/>


      </Routes>
      

        
        </BrowserRouter>
      

      
    </div>
  );
}

export default App;
