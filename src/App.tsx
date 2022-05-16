import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import MockInfo from './pages/mock/MockInfo';
import MockProblem from './pages/mock/MockProblem';
import ThemeInfo from './pages/ThemeInfo';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mock/info" element={<MockInfo />} />
        <Route path="/mock/interview" element={<MockProblem />} />
        <Route path="/theme/info" element={<ThemeInfo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
