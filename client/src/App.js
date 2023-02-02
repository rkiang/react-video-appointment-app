import './App.css';
import React, { Component }  from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Registeration from "./Pages/Registeration";
import Profile from "./Pages/Profile";
import ErrorPage from "./Pages/ErrorPage";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/"> Home </Link>
        <Link to="/login"> Login </Link>
        <Link to="/register"> Register </Link>
        <Link to="/profile"> Profile </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registeration />} />
        <Route path="/profile/:username" element={<Profile />} />
        <Route path="*" element={<ErrorPage />} /> {/* path="*" must be last Route to work properly */}
      </Routes>
    </Router>
  );
}

export default App;
