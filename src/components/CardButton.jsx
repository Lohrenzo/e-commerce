// Icons
import { FaCartShopping, FaCartPlus } from 'react-icons/fa6'

// import { useSelector } from 'react-redux';

export default function CardButton ({handleAddToCartClick}) {
    // const isDarkMode = useSelector((state) => state.mode.isDarkMode);

    return (
        <>
            <button 
                className={`lg:text-[0.8rem] md:text-[0.6rem] text-[0.5rem] font-bold border-none p-3 m-0 duration-200 transition-all hover:opacity-100 opacity-70 active:bg-[#3e5c76] active:outline-none dark:bg-[#0d1321]' dark:text-[#ffffff] 'bg-[#f0ebd8] text-[#000000] flex gap-2 items-center justify-center`}
                onClick={handleAddToCartClick}
            >
                Add to Cart <FaCartPlus />
            </button>
        </>
    )
};