// Icons
import { IoClose } from "react-icons/io5";
import { BsCartCheckFill } from "react-icons/bs";
import { MdDelete } from "react-icons/md";

import { Link } from "react-router-dom";

const CheckoutConfirmation = ({setShowCheckoutConfirmation, selectedDeliveryMethod, selectedPaymentMethod, storeAddress, totalAmount, contactDetails, address}) => {


    return (
        <>
        {/* <form> */}
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative lg:min-w-[500px] md:min-w-[300px] my-6 mx-auto max-w-3xl">
                {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full dark:text-white text-black dark:bg-[#121a27] bg-[#d7d7d7] outline-none focus:outline-none">
                        {/*header*/}
                        <div className="relative flex items-center justify-between md:px-5 px-3 py-2 rounded-t">
                            <h3 className="lg:top-[1.8rem] lg:text-base text-[0.9rem] tracking-wider font-semibold">
                                Confirm Your Order Details
                            </h3>
                            <button
                                className="p-1 ml-auto bg-transparent active:bg-transparent border-0 text-white duration-300 opacity-100 hover:opacity-20 float-right lg:text-3xl md:text-2xl text-xl leading-none font-semibold outline-none focus:outline-none"
                                onClick={() => setShowCheckoutConfirmation(false)}
                            >
                                <IoClose />
                            </button>
                        </div>
                        {/*body*/}
                        {(contactDetails.firstName.length === 0 || contactDetails.email.length === 0 || contactDetails.phoneNumber.length <= 5) ? 
                        <div className="relative max-h-[60vh] overflow-y-auto overflow-x-hidden border-t rounded-b lg:text-[1rem] text-[0.8rem] border-[#b6b6b6cf] p-6 flex-col">
                            <p className="text-center">Make sure you fill the form correctly. <br /> Thank You!!</p>
                        </div> :
                        <>
                            <div className="relative max-h-[60vh] overflow-y-auto overflow-x-hidden border-t rounded-b lg:text-[1rem] text-[0.8rem] border-[#b6b6b6cf] p-6 flex-col">
                                {totalAmount && 
                                    <div className="grid grid-cols-2 tracking-wider mb-4">
                                        <p>Total Amount:</p>
                                        <p>&#x20A6; {totalAmount.toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                                    </div>
                                }
                                {contactDetails.firstName &&
                                    <div className="grid grid-cols-2 tracking-wider">
                                        <p>Name:</p>
                                        <p>{contactDetails.firstName} {contactDetails.lastName}</p>
                                    </div>
                                }
                                {contactDetails.email &&
                                    <div className="grid grid-cols-2 tracking-wider">
                                        <p>Email Address:</p>
                                        <p>{contactDetails.email}</p>
                                    </div>
                                }
                                {contactDetails.phoneNumber && 
                                    <div className="grid grid-cols-2 tracking-wider mb-2">
                                        <p>Phone Number:</p>
                                        <p>{contactDetails.phoneNumber}</p>
                                    </div>
                                }
                                {selectedDeliveryMethod === "store-pickup" ? 
                                    <div className="grid grid-cols-2 tracking-wider">
                                        <p>Pick-up Store Address:</p>
                                        <div>
                                            <p>{storeAddress.street},</p>
                                            <p>{storeAddress.city},</p>
                                            <p>{storeAddress.state}.</p>
                                        </div>
                                    </div> :
                                    <div className="grid grid-cols-2 tracking-wider">
                                        <p>Delivery Address:</p>
                                        <div>
                                            <p>{address.street},</p>
                                            <p>{address.city},</p>
                                            <p>{address.state}.</p>
                                        </div>
                                    </div>
                                }
                            </div>
                            {selectedPaymentMethod === "cards" ? 
                                <button className="capitalize h-[3.2rem] text-base hover:text-[1.1rem] hover:bg-[#003459] bg-[#012a4a] transition-all duration-200 rounded-b tracking-wider font-bold text-white">Proceed to payment</button> :
                                <button className="capitalize h-[3.2rem] text-base hover:text-[1.1rem] hover:bg-[#003459] bg-[#012a4a] transition-all duration-200 rounded-b tracking-wider font-bold text-white">Place Order</button>
                            }
                        </>
                        }
                    </div>
                </div>
            </div>

            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        {/* </form> */}
        </>
    )
};

export default CheckoutConfirmation;