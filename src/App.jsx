import React, { useState } from 'react';

// Pages
import Checkout from './pages/Checkout';
import Index from './pages/Index';

// Components
import NavBar from './components/NavBar';
import Search from './pages/Search';

// React Router
import { Routes, Route } from 'react-router-dom';

// Product Data
import { products } from './data/products';

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showCart, setShowCart] = useState(false);  

  const [filteredProducts, setFilteredProducts] = useState("");
  const handleSearch = () => {
    // Filter the products based on the searchQuery
    const filtered = products.filter((product) => {
      return (
        product.productName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    });

    // Update the filteredProducts state with the results
    setFilteredProducts(filtered);
  };


  return (
    <main className={`bg-white text-black dark:bg-[#1d2d44] dark:text-white`}>
      <Routes>
        <Route exact path='/' element={<Index showCart={showCart} setShowCart={setShowCart} filteredProducts={filteredProducts}/>} />
        <Route exact path='/search' element={<Search showCart={showCart} setShowCart={setShowCart} filteredProducts={filteredProducts} />} />
        <Route path='/checkout' element={<Checkout />} />
      </Routes>

      <NavBar handleSearch={handleSearch} searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
    </main>
  );
}

export default App;
