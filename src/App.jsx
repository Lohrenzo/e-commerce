import React from 'react';

// Pages
import Checkout from './pages/Checkout';
import Index from './pages/Index';

// Components
import NavBar from './components/NavBar';

// React Router
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <main className={`bg-white text-black dark:bg-[#1d2d44] dark:text-white`}>
      <Routes>
        <Route exact path='/' element={<Index />} />
        <Route path='/checkout' element={<Checkout />} />
      </Routes>

      <NavBar />
    </main>
  );
}

export default App;
