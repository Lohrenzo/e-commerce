// Icons
import { IoClose } from "react-icons/io5";
import { BsCartCheckFill } from "react-icons/bs";
import { MdDelete } from "react-icons/md";

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from "../redux/cartSlice";

import { Link } from "react-router-dom";

const Cart = ({setShowCart}) => {

    const { cartItems } = useSelector(state => state.cart);
    // Or
    // const cartItems = useSelector(state => state.cart.cartItems);
    const dispatch = useDispatch();

    // const removeFromCartClick = () => {
    //     // Dispatch the addToCart action with the item details
    //     dispatch(removeFromCart(products));
    //     console.log("Removed Product To Cart");
    // };

    // Calculate the total amount
    const subTotal = cartItems.reduce((total, item) => total + item.newPrice, 0);

    const proceedToCheckout = () => {
        // You can use the totalAmount for further actions, e.g., passing it to a payment gateway.
        console.log("Total Amount:", subTotal);
    };


    return (
        <>
        {/* <form> */}
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative lg:min-w-[500px] md:min-w-[300px]  my-6 mx-auto max-w-3xl">
                {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full dark:text-white text-black dark:bg-[#1d2d44] bg-[#d7d7d7] outline-none focus:outline-none">
                        {/*header*/}
                        <div className="relative flex items-center justify-between p-5 rounded-t">
                            <h3 className="lg:top-[1.8rem] text-[1rem] tracking-wider font-semibold">
                                Shopping Cart
                            </h3>
                            <button
                                className="p-1 ml-auto bg-transparent active:bg-transparent border-0 text-white duration-300 opacity-100 hover:opacity-20 float-right lg:text-3xl text-[1.4rem] leading-none font-semibold outline-none focus:outline-none"
                                onClick={() => setShowCart(false)}
                            >
                                <IoClose />
                            </button>
                            <p className="px-2 py-1 align-middle absolute lg:top-[1.4rem] md:top-[1.3rem] top-[3.5rem]  lg:right-20 md:right-20 right-6 opacity-50 lg:text-[1rem] md:text-[0.6rem] text-[0.5rem] border-b-[1px] border-[#b2b2b272] border-t-[1px]">{cartItems ? cartItems.length == 1 ? cartItems.length + " item" : cartItems.length + " items" : 0 + " items"} in Cart</p>
                        </div>
                        {/*body*/}
                        <div className="relative max-h-[60vh] overflow-y-auto overflow-x-hidden border-y border-[#b6b6b6cf] p-6 flex-col">
                            {cartItems.length > 0 ? 
                                (
                                    cartItems.map((item, index) => (
                                        <div key={index} className="overflow-hidden flex flex-row items-center gap-x-3 lg:mt-6 py-4 px-5 text-blueGray-500 leading-relaxed border-b-2 border-[#b2b2b272]">
                                            <img className=" object-cover object-center rounded-sm h-[30px] w-[80px] lg:h-[130px] lg:w-[180px]" src={item.url} alt={item.productName} />
                                            <div className="flex flex-col w-[50%] gap-2">
                                                <p className="text-[0.95rem] w-fit cursor-default font-bold hover:underline duration-150 transition-all">{item.productName}</p>
                                                <p className="lg:text-[0.8rem] text-[0.6rem] leading-none lg:leading-normal opacity-50">{item.description}</p>
                                                <p className="lg:text-[1.2rem] text-[0.9rem]">&#x20A6; {item.newPrice.toLocaleString(undefined, {maximumFractionDigits:2}) }</p>
                                            </div>
                                            <div className="flex flex-col items-center justify-between">
                                                {/* <label htmlFor="qty">Qty</label> */}
                                                <input className="lg:p-2 p-1 lg:text-[1.8rem] text-[1.4rem] dark:text-white text-black dark:bg-[#143546] bg-white h-[40px] lg:h-[60px] w-[50px] lg:w-[100px] focus:outline-none focus:border dark:focus:border-[#b2b2b272] focus:border-[#748cab]" defaultValue="1" maxLength={6} minLength={1} type="number" name="qty" id="qty" />
                                            </div>
                                            <button onClick={() => dispatch(removeFromCart(item.id))} className="bg-[transparent] h-full flex items-center outline-none lg:p-2 p-0 text-[#cc2626] text-[1.5rem] lg:text-[3rem]">
                                                <MdDelete />
                                            </button>
                                        </div>
                                    ))
                                ) :
                                <p className="grid place-items-center">
                                    Cart Is Empty
                                </p>
                            }
                        </div>
                        {/*footer*/}
                        <div className="p-6 rounded-b grid grid-cols-1">
                            {/* <div className="pl-5 grid grid-cols-2">
                                <div>
                                    <p className="mb-1 font-semibold">Subtotal: </p>
                                    <p className="mb-1">VAT: </p>
                                    <p className="mb-1 font-extrabold">Total: </p>
                                </div>
                                <div>
                                    <p className="mb-1 font-semibold sub-total">&#x20A6; {subTotal.toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                                    <p className="mb-1">&#x20A6; 09334</p>
                                    <p className="mb-1 font-extrabold">&#x20A6; 05940349</p>
                                </div>
                            </div> */}
                            <div className="flex items-center lg:justify-end justify-center">
                                {cartItems.length > 0 &&
                                    <Link
                                        to="/checkout"
                                        className="flex flex-row gap-x-3 items-center justify-center bg-[#748cab] text-[#0d1321] dark:text-white active:bg-[#3e5c76] dark:hover:bg-[#0d1321] font-bold uppercase text-sm lg:px-6 px-4 lg:py-3 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 mb-1 ease-linear transition-all duration-150"
                                        // onClick={() => console.log(cartItems)}
                                    >
                                        Proceed <BsCartCheckFill /> &#x20A6; {subTotal.toLocaleString(undefined, {maximumFractionDigits:2})} ({cartItems.length})
                                    </Link>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        {/* </form> */}
        </>
    )
};

export default Cart;