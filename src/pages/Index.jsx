import { useState, useReducer } from 'react';

// Components
import NavBar from '../components/NavBar';
import BannerSwiper from '../components/BannerSwiper';
import ProductCard from '../components/ProductCard';
import Offers from '../components/Offers';
import Cart from '../components/Cart';
import SectionHeaders from '../components/SectionHeaders';
import CartButton from '../components/CartButton';

// Data
import { products } from '../data/products';


const Index = ({showCart, setShowCart, filteredProducts}) => {

    return (
        <div className=' h-full pb-2'>
            <CartButton showCart={showCart} setShowCart={setShowCart}/>
            <BannerSwiper />
            <section className='products'>
                <SectionHeaders header="Products"/>
                <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-5 w-[90%] mb-4 gap-y-8 lg:gap-x-0 md:gap-x-2 mx-auto'>
                    {products.map((product, index) => (
                    // {products.map((product, index) => (
                        <ProductCard key={index} product={product}/>
                    ))}
                </div>
            </section>
            <section className="offers pt-4">
                <SectionHeaders header="Special Offers"/>
                <Offers />
            </section>

            {showCart ? (
                <Cart products={products} setShowCart={setShowCart}/>
            ) : null}
        </div>
    )
}

export default Index;