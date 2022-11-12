import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/common/Header';
import Footer from './components/common/footer/Footer';

import Main from './pages/Main';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;