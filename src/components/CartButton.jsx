// Icons
import { FaCartShopping } from 'react-icons/fa6'

export default function CartButton ({ showCart, setShowCart }) {
    return (
        <button
            className="fixed lg:top-[60%] top-[35%] lg:right-4 right-1 z-30 hover:scale-95 bg-[#748cab] text-[#0d1321] dark:text-white active:bg-[#3e5c76] dark:hover:bg-[#0d1321] font-bold uppercase lg:text-[1.5rem] text-[1rem] p-6 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={() => setShowCart(true)}
        >
            <FaCartShopping />
        </button>

    );
}