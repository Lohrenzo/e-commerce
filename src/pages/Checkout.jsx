import React from 'react';

// Redux
import { useSelector } from 'react-redux';

// Components
import { DeliveryAddress } from '../components/checkout/DeliveryAddress';
import { OrderSummary } from '../components/checkout/OrderSummary';


export default function Checkout () {
    const { cartItems } = useSelector(state => state.cart);
    
    return (
    <section className='flex relative justify-center p-6 items-center h-[100vh] w-full'>
        {cartItems.length> 0 ? 
            <div className=' absolute top-[20%] lg:w-[70%] md:w-[70%] sm:w-[75%] w-[80%] max-h-[75vh] overflow-y-auto mx-auto'>
                <OrderSummary />
                <DeliveryAddress />
            </div> :
            <h3>No Item In Cart</h3>
        }
    </section>
    );
}
