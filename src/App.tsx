import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import MockInfo from './MockInfo';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MockInfo />} />
      <Route path="test" element={<Home />} />
    </Routes>
  );
}

export default App;
