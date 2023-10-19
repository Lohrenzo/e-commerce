// Pages
import Checkout from './pages/Chechout';
import Index from './pages/Index';
import NavBar from './components/NavBar';

//  link
import { Routes, Route } from 'react-router-dom';

// Redux
// import { useSelector } from 'react-redux';
// `${isDarkMode ? 'bg-[#1d2d44] text-white' : 'bg-white text-black'} 

function App() {
  // const isDarkMode = useSelector((state) => state.mode.isDarkMode);

  return (
    <main className={`bg-white text-black dark:bg-[#1d2d44] dark:text-white`}>
      <Routes>
        <Route exact path='/' element={<Index />} />
        <Route path='/ckeckout' element={<Checkout />} />
      </Routes>

      <NavBar />
    </main>
  )
}

export default App
