import { useState } from "react";

// Components
import CheckoutHeaders from "./CheckoutHeaders";

// Icons
import { IoClose, IoChevronDown, IoChevronUp } from "react-icons/io5";

// Redux
import { useSelector } from 'react-redux';

export default function DeliveryMethod({selectedDeliveryMethod, setSelectedDeliveryMethod}) {
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
                <CheckoutHeaders header={"Delivery Method"} />
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
                        {/* <div>
                            <p className="mb-2 capitalize font-semibold capitalize text-[0.8rem]">Pick-up station</p>
                            <div className="flex justify-start items-center gap-x-2 flex-row bg-[#b2b2b225] p-3 lg:text-[0.8rem] text-[0.6rem]">
                                <input className="cursor-pointer" type="checkbox" name="on-delivery" id="on-delivery" />
                                <label htmlFor="on-delivery" className="mb-1 cursor-pointer">Pick up your package from a pick-up station.</label>
                            </div>
                        </div> */}
                        <div>
                            <p className="my-2 capitalize font-semibold text-[0.8rem]">door delivery</p>
                            <div className="flex justify-start items-center gap-x-2 flex-row bg-[#b2b2b225] p-3 lg:text-[0.8rem] text-[0.6rem]">
                                <input className="cursor-pointer" type="radio" name="delivery-method" id="door-delivery" value="door-delivery" checked={selectedDeliveryMethod === "door-delivery"} onChange={() => setSelectedDeliveryMethod("door-delivery")}/>
                                <label htmlFor="door-delivery" className="mb-1 cursor-pointer">Get your order delivered to your door step.</label>
                            </div>
                        </div>
                        <div>
                            <p className="my-2 capitalize font-semibold text-[0.8rem]">Store pick-up</p>
                            <div className="flex justify-start items-center gap-x-2 flex-row bg-[#b2b2b225] p-3 lg:text-[0.8rem] text-[0.6rem]">
                                <input className="cursor-pointer" type="radio" name="delivery-method" id="store-pickup" value="store-pickup" checked={selectedDeliveryMethod === "store-pickup"} onChange={() => setSelectedDeliveryMethod("store-pickup")}/>
                                <label htmlFor="store-pickup" className="mb-1 cursor-pointer">Pick up your order from our store.</label>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}
