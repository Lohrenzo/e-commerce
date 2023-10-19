import { useState } from "react";

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from "../redux/cartSlice";
// ${isDarkMode ? 'shadow-[#2e2c2c32] shadow-md border-none text-white bg-[#0d1321]' : 'bg-[#3e5c76]'}

// Component
import CardButton from "./CardButton";

// Utils
// import handleAddToCart from "../utils/handleAddToCart";

const ProductCard = ({product}) => {
    
    // const isDarkMode = useSelector((state) => state.mode.isDarkMode);
    const [hover, setHover] = useState(false);
    // const [isInCart, setIsInCart] = useState({
    //     inCart: true,
    //     itemId: product.id,
    // });
    const dispatch = useDispatch();

    const mouseOver = () => {
        setHover(true);
        // console.log("Hovered");
    }

    const mouseOut = () => {
        setHover(false);
        // console.log("UnHovered");
    }

    const handleAddToCartClick = () => {
        // Dispatch the addToCart action with the item details
        dispatch(addToCart(product));
        // setIsInCart(true)
        console.log("Added Product To Cart");
    };
    
    
    return (
        <div onMouseOver={mouseOver} onTouchStart={() => setHover(!hover)} onMouseOut={mouseOut} className={`relative card grid grid-cols-1 shadow-lg dark:shadow-[#2e2c2c32] dark:shadow-md lg:w-[220px] md:w-[180px] w-[100px] mx-auto dark:border-none dark:text-white bg-[#] dark:bg-[#0d1321] overflow-hidden rounded-lg`}>
            { hover 
                ? <img src={product.url2} className="object-cover object-center lg:h-[200px] md:h-[180px] h-[100px] w-full rounded-t-lg" alt=""/> 
                : <img src={product.url} className="object-cover object-center lg:h-[200px] md:h-[180px] h-[100px] w-full rounded-t-lg" alt=""/>
            }
            <h2 className='text-center py-2 font-bold lg:text-[1rem] md:text-[0.6rem] text-[0.4rem]'>{product.productName}</h2>
            <div className="flex justify-center items-center pb-2 gap-x-4">
                {product.promoPercentage > 0 && <p className="lg:text-[1rem] md:text-[0.6rem] text-[0.4rem] opacity-60 decoration-solid lg:decoration-[2px] md:decoration-[1.4px] decoration-[1px] line-thru">&#x20A6; {product.price.toLocaleString(undefined, {maximumFractionDigits:2})}</p>}
                <p className="text-[red] lg:text-[1.2rem] md:text-[1rem] text-[0.6rem] font-bold">&#x20A6; {product.newPrice.toLocaleString(undefined, {maximumFractionDigits:2})}</p>
            </div>
            {product.promoPercentage > 0 && 
                <div className="absolute lh:top-2 top-1 lg:left-2 left-1 flex items-center justify-center bg-[gold] rounded-full lg:h-[50px] h-[35px] lg:w-[50px] w-[35px]">
                    <p className="text-[red] lg:text-[0.7rem] text-[0.44rem] font-bold rotate-[-20deg]">{product.promoPercentage}% Off</p>
                </div>
            }
            <CardButton handleAddToCartClick={handleAddToCartClick}/>
        </div>
    )
}

export default ProductCard;