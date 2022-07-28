import React, { useContext} from 'react';
import { Routes, Route, Link } from "react-router-dom";

import './App.css';
import { Home } from './pages/Home/Home';
import { Login } from './pages/login/login';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        {/* <Route path="/signup" element={}/> */}
      </Routes>
    </div>
  );
}

export default App;
