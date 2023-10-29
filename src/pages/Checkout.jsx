import React from 'react';

import { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
// Redux
import { useSelector } from 'react-redux';

// Components
import CustomerDetails from '../components/checkout/CustomerDetails';
import OrderSummary from '../components/checkout/OrderSummary';
import PaymentMethod from '../components/checkout/PaymentMethod';
import DeliveryMethod from '../components/checkout/DeliveryMethod';
import CheckoutConfirmation from '../components/checkout/CheckoutConfirmation';


export default function Checkout () {
    const { cartItems } = useSelector(state => state.cart);
    
    const [subTotal, setSubTotal] = useState(0);

    // Calculate the subtotal whenever cartItems change
    useEffect(() => {
        const newSubTotal = cartItems.reduce((total, item) => total + item.product.newPrice * item.quantity, 0);
        setSubTotal(newSubTotal);
    }, [cartItems]);

    // Calculate the total amount
    // const subTotal = cartItems.reduce((total, item) => total + item.newPrice, 0);
    const deliveryFee = (2/100) * subTotal;
    const vat = (3/100) * subTotal;
    const totalAmount = subTotal + deliveryFee + vat;

    const [showCheckoutConfirmation, setShowCheckoutConfirmation] = useState(false);

    const [contactDetails, setContactDetails] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
    });

    const [address, setAddress] = useState({
        street: "",
        city: "",
        state: "",
    });

    const storeAddress = {
        street: "No 12 Address Road, D-Line",
        city: "Port Harcourt",
        state: "Rivers State",
    };

    // Use state to keep track of the selected payment method
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("on-delivery");
    
    // Use state to keep track of the selected delivery method
    const [selectedDeliveryMethod, setSelectedDeliveryMethod] = useState("store-pickup");

    return (
    <section className='flex relative justify-center p-6 items-center h-[100vh] w-full'>
        {cartItems.length> 0 ? 
            <div className=' absolute lg:top-[20%] top-[15%] lg:w-[70%] md:w-[70%] sm:w-[75%] w-[80%] max-h-[75vh] overflow-y-auto mx-auto'>
                <OrderSummary cartItems={cartItems} deliveryFee={deliveryFee} subTotal={subTotal} vat={vat} totalAmount={totalAmount}/>
                <PaymentMethod selectedPaymentMethod={selectedPaymentMethod} setSelectedPaymentMethod={setSelectedPaymentMethod}/>
                <DeliveryMethod selectedDeliveryMethod={selectedDeliveryMethod} setSelectedDeliveryMethod={setSelectedDeliveryMethod}/>
                <CustomerDetails address={address} setAddress={setAddress} storeAddress={storeAddress} contactDetails={contactDetails} setContactDetails={setContactDetails} selectedDeliveryMethod={selectedDeliveryMethod}/>
                <div className="text-center mt-4 p-5">
                    <button disabled={contactDetails.firstName.length === 0 || contactDetails.email.length === 0 || contactDetails.phoneNumber.length <= 5 || (selectedDeliveryMethod === "door-delivery" & address.city.length === 0 || selectedDeliveryMethod === "door-delivery" & address.street.length === 0 || selectedDeliveryMethod === "door-delivery" & address.state.length === 0)} onClick={() => setShowCheckoutConfirmation(true)} className='capitalize disabled:opacity-50 active:border-none focus:outline-none focus:border-[#01497C] shadow-md hover:shadow-[#3e5c7686] dark:hover:bg-[#ff9a9a16] dark:shadow-none duration-150 transition-all active:bg-[#3e5c76] active:text-[#ffffff] active:outline-none dark:bg-[#0d1321] dark:text-[#ffffff] bg-[#f0ebd8] text-[#000000] rounded-md px-8 py-3 lg:text-base text-[0.9rem]'>Confirm Order</button>
                    {/* {(contactDetails.firstName === "" || contactDetails.email === "" || contactDetails.phoneNumber === "") ?
                        <button disabled={contactDetails.firstName.length === 0 || contactDetails.email.length === 0 || contactDetails.phoneNumber.length <= 5} className='capitalize disabled:opacity-40 active:border-none focus:outline-none focus:border-none shadow-md dark:shadow-none duration-150 transition-all active:outline-none dark:bg-[#0d1321] dark:text-[#ffffff] bg-[#f0ebd8] text-[#000000] rounded-md px-8 py-3 lg:text-base text-[0.9rem]'>Confirm Order</button> :
                        <button disabled={contactDetails.firstName.length === 0 || contactDetails.email.length === 0 || contactDetails.phoneNumber.length <= 5} onClick={() => setShowCheckoutConfirmation(true)} className='capitalize disabled:opacity-50 active:border-none focus:outline-none focus:border-[#01497C] shadow-md hover:shadow-[#3e5c7686] dark:hover:bg-[#ff9a9a16] dark:shadow-none duration-150 transition-all active:bg-[#3e5c76] active:text-[#ffffff] active:outline-none dark:bg-[#0d1321] dark:text-[#ffffff] bg-[#f0ebd8] text-[#000000] rounded-md px-8 py-3 lg:text-base text-[0.9rem]'>Confirm Order</button>
                    } */}
                </div>
                {showCheckoutConfirmation && <CheckoutConfirmation selectedDeliveryMethod={selectedDeliveryMethod} selectedPaymentMethod={selectedPaymentMethod} storeAddress={storeAddress} contactDetails={contactDetails} address={address} totalAmount={totalAmount} setShowCheckoutConfirmation={setShowCheckoutConfirmation}/> }
            </div> :
            <h3>No Item In Cart</h3>
        }
    </section>
    );
}
