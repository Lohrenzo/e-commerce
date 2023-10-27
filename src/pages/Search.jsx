import { useState } from 'react';

// Components
import BannerSwiper from '../components/BannerSwiper';
import ProductCard from '../components/ProductCard';
import Offers from '../components/Offers';
import Cart from '../components/Cart';
import SectionHeaders from '../components/SectionHeaders';
import CartButton from '../components/CartButton';

// Data
import { products } from '../data/products';


const Search = ({filteredProducts, showCart, setShowCart}) => {


    return (
        <div className='w-full h-[100vh] lg:py-[10%] md:py-[14%] sm:py-[13%] py-[20%]'>
            <CartButton showCart={showCart} setShowCart={setShowCart}/>
            <section className='products'>
                {filteredProducts.length === 0 ?
                    <div className='text-center px-3 capitalize font-bold py-6'>Sorry, We don't have what you are looking for !!</div> :
                <>
                    <SectionHeaders header="Products"/>
                    <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-5 w-[90%] mb-4 gap-y-8 lg:gap-x-0 md:gap-x-2 mx-auto'>
                        {filteredProducts.map((product, index) => (
                            <ProductCard key={index} product={product}/>
                        ))}
                    </div> 
                </>
                }
            </section>
            {showCart ? (
                <Cart products={products} setShowCart={setShowCart}/>
            ) : null}
        </div>
    )
}

export default Search;