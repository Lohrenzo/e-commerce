import { useState } from "react";

// Components
import CheckoutHeaders from "./CheckoutHeaders";

// Icons
import { IoClose, IoChevronDown, IoChevronUp } from "react-icons/io5";

// Redux
import { useSelector } from 'react-redux';

export function OrderSummary () {
    const { cartItems } = useSelector(state => state.cart);
    const [isOpened, setIsOpened] = useState(true);
    
    // Calculate the total amount
    const subTotal = cartItems.reduce((total, item) => total + item.newPrice, 0);
    const deliveryFee = (2/100) * subTotal;
    const vat = (3/100) * subTotal;
    const totalAmount = subTotal + deliveryFee + vat;

    return (
        <div className="w-full lg:text-base md:text-base sm:text-[0.9rem] text-[0.8rem] border mb-1">
            <div onClick={() => setIsOpened(!isOpened)} className="accordion-head w-full items-center cursor-pointer justify-between px-3 py-2 flex">
                <CheckoutHeaders header={"Order Summary"} />
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
                        <div className="w-full">
                            <p className="mb-1 px-1 capitalize font-semibold">Item's Total ({cartItems.length}): </p>
                            <p className="mb-1 px-1 capitalize">Delivery Fees: </p>
                            <p className="mb-1 px-1">VAT: </p>
                            <p className="mb-1 px-1 py-2 bg-[#b2b2b225] capitalize font-extrabold">Total: </p>
                        </div>
                        <div className="w-full">
                            <p className="mb-1 px-1 font-semibold sub-total">&#x20A6; {subTotal.toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                            <p className="mb-1 px-1">&#x20A6; {deliveryFee.toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                            <p className="mb-1 px-1">&#x20A6; {vat.toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                            <p className="mb-1 px-1 py-2 bg-[#b2b2b225] font-extrabold">&#x20A6; {totalAmount.toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}
