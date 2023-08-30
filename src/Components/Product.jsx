import React, { useState }  from 'react'

function Product(props) { 
    const { price, brand, category, thumbnail } = props.product;

    return (
        <div className=' w-2/5 md:w-1/5  relative h-80 m-1 mt-6 border-2 bg-slate-100 rounded-sm'>
            <div className="img overflow-hidden h-32">
                <img className='w-full hover:scale-110 duration-500 h-full mb-3' src={thumbnail} alt="" />
            </div>
            <div className="text  p-2">
             
                <p>Brand : {brand}</p>
                <p>Price : {price}</p>
            </div>
            <button onClick={()=>props.handelAddToCart(props.product)}  className={`w-full bottom-0 absolute py-2 md:py-3  md:px-2 text-white font-bold duration-200 bg-sky-700  hover:bg-sky-500`}>ADD TO CART</button>
        </div>
    )
}

export default Product