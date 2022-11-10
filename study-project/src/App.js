import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/common/Header';
import Main from './pages/Main';
import Category from './pages/Category';
import Event from './pages/Event';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='/category' element={<Category />}/>
        <Route path='/event' element={<Event />}/>
      </Routes>
    </Router>
  );
};

export default App;