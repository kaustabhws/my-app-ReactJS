import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import NavBar from './components/NavBar';
import TextUtil from './components/TextUtil';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {

  const [myMode, setMyMode] = useState('light');
  const [myStat, setMyStat] = useState('Enable');

  const toggleBtn = () => {
    if (myMode === 'light') {
      setMyMode('dark');
      setMyStat('Disable');
      document.body.style.color = 'white';
      document.body.style.backgroundColor = 'black';
    } else {
      setMyMode('light');
      setMyStat('Enable');
      document.body.style.color = 'black';
      document.body.style.backgroundColor = 'white';
    }
  }

  return (
    <>
      <Router>
      <NavBar mode={myMode} toggleMode={toggleBtn} myStat={myStat} />
      <div className="container my-2">
      <Routes>
          <Route exact path="/contact" element={<Contact mode={myMode} />} />
          <Route exact path="/" element={<TextUtil heading="Enter text to analyze" mode={myMode} toggleMode={toggleBtn} />} />
          <Route exact path="/about" element={<About mode={myMode}/>} />
        </Routes>
      </div>
      {/* <div className="container my-2">
        <TextUtil heading="Enter text to analyze" mode={myMode} toggleMode={toggleBtn} />
      </div>
      <div className="container w-25 p-3">
        <Contact mode={myMode} />
      </div> */}
      </Router>
    </>
  );
}

export default App;