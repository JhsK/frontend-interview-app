import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import MockInfo from './pages/MockInfo';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mockinfo" element={<MockInfo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
