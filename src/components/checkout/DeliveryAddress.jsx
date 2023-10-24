import { useState } from "react";

// Components
import CheckoutHeaders from "./CheckoutHeaders";

// Icons
import { IoClose, IoChevronDown, IoChevronUp } from "react-icons/io5";

// Redux
import { useSelector } from 'react-redux';

export function DeliveryAddress () {
    const { cartItems } = useSelector(state => state.cart);
    const [isOpened, setIsOpened] = useState(false);
    
    // Calculate the total amount
    const subTotal = cartItems.reduce((total, item) => total + item.newPrice, 0);
    const deliveryFee = (2/100) * subTotal;
    const vat = (3/100) * subTotal;
    const totalAmount = subTotal + deliveryFee + vat;

    return (
        <div className="w-full lg:text-base md:text-base sm:text-[0.9rem] text-[0.8rem] border mb-1">
            <div onClick={() => setIsOpened(!isOpened)} className="accordion-head w-full items-center cursor-pointer justify-between px-3 py-2 flex">
                <CheckoutHeaders header={"Delivery Address"} />
                <div className="p-2 opacity-50 lg:text-[1.3rem] md:text-[1.2rem] text-base accordion-btn" onClick={() => setIsOpened(!isOpened)}>
                    {isOpened ? 
                        <IoChevronUp /> :
                        <IoChevronDown />
                    }
                </div>
            </div>

            {isOpened && 
                <div className="w-full">
                    <div className="w-full px-6 pb-2 mb-2 grid grid-cols-2 text-[black] dark:text-white">
                        <div>
                            <p className="mb-1 capitalize font-semibold">Street: </p>
                            <p className="mb-1 capitalize">City: </p>
                            <p className="mb-1">State: </p>
                            {/* <p className="mb-1 capitalize font-extrabold">Total: </p> */}
                        </div>
                        <div>
                            <p className="mb-1 font-semibold sub-total">No 57 Apkabio Lane, Beside New Road, Rumufar.</p>
                            <p className="mb-1">Port-Harcourt</p>
                            <p className="mb-1">Rivers State</p>
                            {/* <p className="mb-1 font-extrabold">&#x20A6; {totalAmount.toLocaleString(undefined, {maximumFractionDigits:2})}</p> */}
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}
