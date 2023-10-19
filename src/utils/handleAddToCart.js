import { useDispatch } from 'react-redux';
import { addToCart } from "../redux/cartSlice";



const handleAddToCart = (product) => {
    const dispatch = useDispatch();
    // Dispatch the addToCart action with the item details
    dispatch(addToCart(product));
};

export default handleAddToCart;
