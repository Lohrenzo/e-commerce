// Redux
import { useSelector } from 'react-redux';


export default function Checkout () {
    const { cartItems } = useSelector(state => state.cart);
    
    // Calculate the total amount
    const subTotal = cartItems.reduce((total, item) => total + item.newPrice, 0);

    const vat = (3/100) * subTotal;

    const totalAmount = subTotal + vat;

    return (
    <section className='flex justify-center items-center h-[100vh] w-full'>
        {cartItems.length> 0 ? 
            <div className="pl-5 grid grid-cols-2 text-[black] dark:text-white">
                <div>
                    <p className="mb-1 font-semibold">Subtotal: </p>
                    <p className="mb-1">VAT: </p>
                    <p className="mb-1 font-extrabold">Total: </p>
                </div>
                <div>
                    <p className="mb-1 font-semibold sub-total">&#x20A6; {subTotal.toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    <p className="mb-1">&#x20A6; {vat.toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                    <p className="mb-1 font-extrabold">&#x20A6; {totalAmount.toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                </div>
            </div> :
            <h3>No Item In Cart</h3>
        }
    </section>
    );
}
