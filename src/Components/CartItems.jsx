import React from 'react'

function CartItems(props) {
    const { thumbnail, category, price , id} = props.cart 
    return (
        <div className='flex text-white mt-5 items-center'>
            <img className='w-24 rounded-md h-24' src={thumbnail} alt="" />
            <div className='  ml-3'>
                <div className='gap-3'>
                    <h1 className='text-slate-300'>Catagory : {category}</h1>
                    <p className='text-slate-300'>Quantity: 1</p>
                    <p className='text-slate-300'>Price : {price}</p>
                </div>
                <div className='flex justify-between mt-2'>
                    
                    <button onClick={()=>props.removeFromCart(id)} className='px-5 py-1 font-bold bg-slate-600 hover:bg-slate-500'>Remove</button>
                </div>
            </div>
        </div>
    )
}

export default CartItems