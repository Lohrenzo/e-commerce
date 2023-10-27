import { useState } from "react";

// Components
import CheckoutHeaders from "./CheckoutHeaders";

// Icons
import { IoClose, IoChevronDown, IoChevronUp } from "react-icons/io5";

// Redux
import { useSelector } from 'react-redux';

export default function PaymentMethod({selectedPaymentMethod, setSelectedPaymentMethod}) {
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
                <CheckoutHeaders header={"Payment Method"} />
                <div className="p-2 opacity-50 lg:text-[1.3rem] md:text-[1.2rem] text-base accordion-btn" onClick={() => setIsOpened(!isOpened)}>
                    {isOpened ? 
                        <IoChevronUp /> :
                        <IoChevronDown />
                    }
                </div>
            </div>

            {isOpened && 
                <div className="w-full">
                    <div className="w-full px-6 pb-2 mb-2 grid grid-cols-1 text-[black] dark:text-white">
                        <div>
                            <p className="mb-2 capitalize font-semibold text-[0.8rem]">pay on delivery</p>
                            <div className="flex justify-start items-center gap-x-2 flex-row bg-[#b2b2b225] p-3 lg:text-[0.8rem] text-[0.6rem]">
                                <input className="cursor-pointer" type="radio" name="payment-method" value="on-delivery" id="on-delivery" checked={selectedPaymentMethod === "on-delivery"} onChange={() => setSelectedPaymentMethod("on-delivery")}/>
                                <label htmlFor="on-delivery" className="mb-1 cursor-pointer">Pay on delivery with cash, bank transfer or card.</label>
                            </div>
                        </div>
                        <div>
                            <p className="mb-2 capitalize font-semibold text-[0.8rem]">card payment</p>
                            <div className="flex justify-start items-center gap-x-2 flex-row bg-[#b2b2b225] p-3 lg:text-[0.8rem] text-[0.6rem]">
                                <input className="cursor-pointer" type="radio" name="payment-method" value="cards" id="cards" checked={selectedPaymentMethod === "cards"} onChange={() => setSelectedPaymentMethod("cards")}/>
                                <label htmlFor="cards" className="mb-1 cursor-pointer">Pay with card or bank transfer.</label>
                            </div>
                        </div>
                        {/* {selectedPaymentMethod === "cards" &&
                        <div>
                            cards
                        </div>
                        } */}
                    </div>
                </div>
            }
        </div>
    );
}
