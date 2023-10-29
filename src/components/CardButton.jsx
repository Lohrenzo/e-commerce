// Icons
import { FaCartShopping, FaCartPlus } from 'react-icons/fa6'

// import { useSelector } from 'react-redux';

export default function CardButton ({handleAddToCartClick, isLoading, isProductInCart}) {
    // const isDarkMode = useSelector((state) => state.mode.isDarkMode);

    return (
        <>
            {isLoading ? 
                <button 
                    className={`lg:text-[0.5rem] md:text-[0.4rem] text-[0.3rem] font-bold border-none px-3 lg:py-3 py-2 m-0 duration-200 transition-all hover:opacity-100 opacity-70 active:bg-[#f0ebd8] dark:active:bg-[#3e5c76] active:outline-none dark:bg-[#0d1321]' dark:text-[#ffffff] 'bg-[#f0ebd8] text-[#000000] flex gap-2 items-center justify-center`}
                >
                    <div className="loader">
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </div>
                </button> :
                <button 
                    disabled={isProductInCart}
                    className={` disabled:opacity-30 lg:text-[0.8rem] md:text-[0.6rem] text-[0.5rem] font-bold border-none px-3 lg:py-3 py-2 m-0 duration-200 transition-all hover:opacity-100 opacity-70 active:bg-[#f0ebd8] dark:active:bg-[#3e5c76] active:outline-none dark:bg-[#0d1321] dark:disabled:active:bg-[#0d1321] dark:disabled:focus:bg-[#0d1321] dark:disabled:active:outline-none dark:text-[#ffffff] bg-[#f0ebd8] disabled:active:bg-[#f0ebd8] disabled:focus:bg-[#f0ebd8] disabled:active:outline-none text-[#000000] flex gap-2 items-center justify-center`}
                    onClick={handleAddToCartClick}
                >
                    {isProductInCart ? "Already In Cart" : "Add to Cart"} <FaCartPlus />
                </button>
            }
        </>
    )
};