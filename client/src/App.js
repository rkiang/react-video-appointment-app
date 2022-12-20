import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home";
import Registeration from "./Pages/Registeration";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/register" element={<Registeration />}/>
      </Routes>
    </Router>
  );
}

export default App;
