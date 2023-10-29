import { useState } from "react";

// Validator
import validator from "validator";

// Components
import CheckoutHeaders from "./CheckoutHeaders";

// Icons
import { IoClose, IoChevronDown, IoChevronUp } from "react-icons/io5";

// Redux
import { useSelector } from 'react-redux';

export default function CustomerDetails ({selectedDeliveryMethod, address, setAddress, storeAddress, contactDetails, setContactDetails}) {
    const { cartItems } = useSelector(state => state.cart);
    const [isOpened, setIsOpened] = useState(true);
    const [emailMessage, setEmailMessage] = useState("");
    const [phoneNumberMessage, setPhoneNumberMessage] = useState("");

    // Contact Details Change Functions
    function handleFirstNameChange(e) {
        setContactDetails({
            ...contactDetails, // Copy the old fields
            firstName: e.target.value // But override this one
        });
    }
    
    function handleLastNameChange(e) {
        setContactDetails({
            ...contactDetails, // Copy the old fields
            lastName: e.target.value // But override this one
        });
    }
    
    function handleEmailChange(e) {
        setContactDetails({
            ...contactDetails,
            email: e.target.value
        });
        if (!validator.isEmail(contactDetails.email)) {
            setEmailMessage("Please, enter a valid email!");
        } else {
            setEmailMessage("");
        }
    }
  
    function handlePhoneNumberChange(e) {
        setContactDetails({
            ...contactDetails,
            phoneNumber: e.target.value
        });
        if (contactDetails.phoneNumber.length <= 8) {
            setPhoneNumberMessage("Please, enter a valid phone number!");
        } else {
            setPhoneNumberMessage("");
        }

    }

    // Address Change Functions
    function handleStreetChange(e) {
        setAddress({
            ...address,
            street: e.target.value
        });
    }

    function handleCityChange(e) {
        setAddress({
            ...address,
            city: e.target.value
        });
    }

    function handleStateChange(e) {
        setAddress({
            ...address,
            state: e.target.value
        });
    }

    // Calculate the total amount
    const subTotal = cartItems.reduce((total, item) => total + item.newPrice, 0);
    const deliveryFee = (2/100) * subTotal;
    const vat = (3/100) * subTotal;
    const totalAmount = subTotal + deliveryFee + vat;

    return (
        <div className="w-full lg:text-base md:text-base sm:text-[0.9rem] text-[0.8rem] border mb-1">
            <div onClick={() => setIsOpened(!isOpened)} className="accordion-head w-full items-center cursor-pointer justify-between px-3 py-2 flex">
                <CheckoutHeaders header={"Customer Details"} />
                <div className="p-2 opacity-50 lg:text-[1.3rem] md:text-[1.2rem] text-base accordion-btn" onClick={() => setIsOpened(!isOpened)}>
                    {isOpened ? 
                        <IoChevronUp /> :
                        <IoChevronDown />
                    }
                </div>
            </div>

            {isOpened && 
                <div className="w-full">
                    <h2 className=" w-fit mx-6 mb-2 border-b text-[black] dark:text-white font-bold text-[0.8rem]">Contact Details:</h2>
                    <div className="w-full px-6 pb-2 mb-2 grid lg:grid-cols-2 grid-cols-1 text-[black] dark:text-white lg:text-base md:text-base sm:text-[0.9rem] text-[0.8rem]">
                        <div className="pb-1 border-b-2 lg:block hidden">
                            <p className="mb-1 capitalize">First Name: <span className="text-[red] text-[1.1rem]">*</span> </p>
                            <p className="mb-1 capitalize">Last Name: </p>
                            <p className="mb-1 capitalize h-[3rem] flex gap-x-1 items-end">Email Address: <span className="text-[red] text-[1.1rem]">*</span></p>
                            <p className="mb-1 capitalize h-[3rem] flex gap-x-1 items-end">Phone Number: <span className="text-[red] text-[1.1rem]">*</span></p>
                        </div>

                        <div className="pb-1 border-b-2 lg:block hidden">
                            <p className="mb-1">
                                <input required value={contactDetails.firstName} onChange={handleFirstNameChange} type="text" className="w-full px-2 rounded-sm bg-[#b2b2b225] border-none focus:border-[#01497C] transition-all duration-150 outline-none focus:outline-none" />
                            </p>
                            <p className="mb-1">
                                <input value={contactDetails.lastName} onChange={handleLastNameChange} type="text" className="w-full px-2 rounded-sm bg-[#b2b2b225] border-none focus:border-[#01497C] transition-all duration-150 outline-none focus:outline-none" />
                            </p>
                            <p className="mb-1 h-[3rem] grid grid-cols-1 items-end">
                                <small className="text-[red]">{emailMessage}</small>
                                <input required value={contactDetails.email} onChange={handleEmailChange} type="email" className="w-full px-2 rounded-sm bg-[#b2b2b225] border-none focus:border-[#01497C] transition-all duration-150 outline-none focus:outline-none" />
                            </p>
                            <p className="mb-1 h-[3rem] grid grid-cols-1 items-end">
                                <small className="text-[red]">{phoneNumberMessage}</small>
                                <input required value={contactDetails.phoneNumber} onChange={handlePhoneNumberChange} type="number" className="w-full px-2 rounded-sm bg-[#b2b2b225] border-none focus:border-[#01497C] transition-all duration-150 outline-none focus:outline-none" />
                            </p>
                        </div>

                        <div className="lg:hidden block py-1 border-b-2">
                            <p className="mb-1">
                                <input required placeholder="First Name" value={contactDetails.firstName} onChange={handleFirstNameChange} type="text" className="w-full px-2 rounded-sm bg-[#b2b2b225] border-none focus:border-[#01497C] transition-all duration-150 outline-none focus:outline-none" />
                            </p>
                            <p className="mb-1">
                                <input placeholder="Last Name" value={contactDetails.lastName} onChange={handleLastNameChange} type="text" className="w-full px-2 rounded-sm bg-[#b2b2b225] border-none focus:border-[#01497C] transition-all duration-150 outline-none focus:outline-none" />
                            </p>
                            <p className="mb-1">
                                <small className="text-[red]">{emailMessage}</small>
                                <input placeholder="Email Address" required value={contactDetails.email} onChange={handleEmailChange} type="email" className="w-full px-2 rounded-sm bg-[#b2b2b225] border-none focus:border-[#01497C] transition-all duration-150 outline-none focus:outline-none" />
                            </p>
                            <p className="mb-1">
                                <small className="text-[red]">{phoneNumberMessage}</small>
                                <input placeholder="Phone Number" required value={contactDetails.phoneNumber} onChange={handlePhoneNumberChange} type="number" className="w-full px-2 rounded-sm bg-[#b2b2b225] border-none focus:border-[#01497C] transition-all duration-150 outline-none focus:outline-none" />
                            </p>
                        </div>
                    </div>
                    {selectedDeliveryMethod === "door-delivery" && 
                    <>
                        <h2 className=" w-fit mx-6 mb-2 border-b text-[black] dark:text-white font-bold text-[0.8rem]">
                            Delivery Address: <br /> <span className="text-[gray] text-[0.7rem]">Enter your address below</span>
                        </h2>
                        <div className="w-full px-6 pb-2 mb-2 grid lg:grid-cols-2 grid-cols-1 text-[black] dark:text-white lg:text-base md:text-base sm:text-[0.9rem] text-[0.8rem]">
                            <div className="lg:block hidden">
                                <p className="mb-1 capitalize">Street: </p>
                                <p className="mb-1 capitalize">City: </p>
                                <p className="mb-1">State: </p>
                            </div>

                            <div className="lg:block hidden">
                                <p className="mb-1">
                                    <input required aria-required value={address.street} onChange={handleStreetChange} type="text" className="w-full px-2 rounded-sm bg-[#b2b2b225] border-none focus:border-[#01497C] transition-all duration-150 outline-none focus:outline-none" />
                                </p>
                                <p className="mb-1">
                                    <input required aria-required value={address.city} onChange={handleCityChange} type="text" className="w-full px-2 rounded-sm bg-[#b2b2b225] border-none focus:border-[#01497C] transition-all duration-150 outline-none focus:outline-none" />
                                </p>
                                <p className="mb-1">
                                    <input required aria-required value={address.state} onChange={handleStateChange} type="text" className="w-full px-2 rounded-sm bg-[#b2b2b225] border-none focus:border-[#01497C] transition-all duration-150 outline-none focus:outline-none" />
                                </p>
                            </div>

                            <div className="block lg:hidden">
                                <p className="mb-1">
                                    <input placeholder="Street" required aria-required value={address.street} onChange={handleStreetChange} type="text" className="w-full px-2 rounded-sm bg-[#b2b2b225] border-none focus:border-[#01497C] transition-all duration-150 outline-none focus:outline-none" />
                                </p>
                                <p className="mb-1">
                                    <input placeholder="City" required aria-required value={address.city} onChange={handleCityChange} type="text" className="w-full px-2 rounded-sm bg-[#b2b2b225] border-none focus:border-[#01497C] transition-all duration-150 outline-none focus:outline-none" />
                                </p>
                                <p className="mb-1">
                                    <input placeholder="State" required aria-required value={address.state} onChange={handleStateChange} type="text" className="w-full px-2 rounded-sm bg-[#b2b2b225] border-none focus:border-[#01497C] transition-all duration-150 outline-none focus:outline-none" />
                                </p>
                            </div>
                        </div>
                    </>
                    }

                    {selectedDeliveryMethod === "store-pickup" && 
                    <>
                        <h2 className=" w-fit mx-6 mb-2 border-b text-[black] dark:text-white font-bold text-[0.8rem]">
                            Store Address: <br /> <span className="text-[gray] text-[0.7rem]">Pick up your order from our store address below</span>
                        </h2>
                        <div className="w-full px-6 pb-2 mb-2 grid grid-cols-2 text-[black] dark:text-white lg:text-base md:text-base sm:text-[0.9rem] text-[0.8rem]">
                            <div>
                                <p className="mb-1 capitalize">Street: </p>
                                <p className="mb-1 capitalize">City: </p>
                                <p className="mb-1">State: </p>
                            </div>

                            <div>
                                <p className="mb-1">{storeAddress.street}</p>
                                <p className="mb-1">{storeAddress.city}</p>
                                <p className="mb-1">{storeAddress.state}</p>
                            </div>
                        </div>
                    </>
                    }
                </div>
            }
        </div>
    );
}
