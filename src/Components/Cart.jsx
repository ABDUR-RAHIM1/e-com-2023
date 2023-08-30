import React, { useContext, useState } from 'react'
import { AiOutlineShoppingCart, AiOutlineClose } from "react-icons/ai"
import CartItems from './CartItems';
import { GlobalContext } from '../Context/Context';

function Cart() {
    const { cart, setCart } = useContext(GlobalContext)
    const [showCart, setShowCart] = useState(true)

    let totalPrice = 0;
    if (cart) {
        cart.forEach(item => {
            totalPrice += item.price
        });
    }

    //     remove items 
    const removeFromCart = (id) => {
        const items = cart.filter(item => item.id !== id);
        setCart(items)
    }

    return (
        <div className={`${showCart ? "w-0" : "w-11/12 sm:w-80 md:w-96"} duration-500 fixed top-0 right-0 bg-slate-700 h-screen overflow-auto scrollbar-hide`}>

            <AiOutlineClose
                onClick={() => setShowCart(!showCart)}
                className='text-4xl bg-slate-500 p-1 text-white sticky top-0'
            />

            <div className={` flex items-center p-2  bg-slate-700 fixed ${showCart ? "top-0 right-0" : "top-10 right-20"} duration-500 cursor-pointer hover:bg-slate-600`}>
                <div>
                    <button disabled={!showCart}>
                        <AiOutlineShoppingCart
                            className='text-white text-3xl'
                            onClick={() => setShowCart(!showCart)}

                        />
                    </button>
                    <p className='text-white text-1xl absolute top-9 bg-slate-900 py-0 px-2 rounded-full text-center'>{cart.length}</p>
                </div>
                <p className={`text-white text-2xl ml-4 duration-500 ${showCart && "hidden"}`}>  Cart  </p>
            </div>

            <div className="cartItems my-16 p-3">

                {
                    cart && cart.map((cart, index) => (
                        <CartItems
                            key={index}
                            cart={cart}
                            removeFromCart={removeFromCart}
                        />
                    ))
                }

                {
                    cart.length <= 0 && <h1 className='text-red-600 text-center text-3xl'>Cart is Empty</h1>
                }

                {cart.length > 0 && <div className='text-center w-full  mt-20 bg-slate-600 p-4 sticky  bottom-0'>

                    <h1 className='text-2xl text-white'>Total Price : {totalPrice}</h1>

                </div>}
            </div>
        </div>
    )
}

export default Cart