import React from 'react'
import Catagorie from './Catagorie'
import Shop from './Shop'
import Cart from './Cart'
function Home() {
    return (
        <div className='px-5 py-2 flex flex-wrap relative '>
            <div className="categorie w-full md:w-1/4 ">
                <Catagorie />
            </div>
            <div className="categorie w-full md:w-3/4">
                <Shop />
            </div>
    
            {/*  cart items menu  */}

            <Cart />

        </div>
    )
}

export default Home