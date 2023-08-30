import React, { useContext, useEffect, useState } from 'react'
import Product from './Product' 
import Loading from './Loading' 
import { GlobalContext } from '../Context/Context'

function Shop() {
   const {cart, setCart} = useContext(GlobalContext)
    const {filterText} = useContext(GlobalContext)
    const [isLoading, setIsLoading] = useState(false)
    const [products, setProducts] = useState(null)
    useEffect(() => {
        setIsLoading(true)
        fetch("https://dummyjson.com/products")
            .then(res => res.json())
            .then(data => {
                setIsLoading(false)
                if (data.products) {
                    if (filterText.length <= 0) {
                        setProducts(data.products)
                    } else {
                        const filterProducts = data.products.filter(pd => pd.category === filterText)
                        setProducts(filterProducts)
                    }

                }
            })
    }, [filterText])


    const handelAddToCart = (product) => {
        setCart([...cart, product])
    };

    useEffect(() => {
        window.localStorage.setItem("cartItems", JSON.stringify(cart))

    }, [cart])


    if (isLoading) return <Loading />
    return (
        <div className=' my-2 md:my-20'>
            <p className='text-red-500 my-4'> {products && products.length} Product(s) found</p>
            <div className=" flex justify-around md:justify-between flex-wrap">
                {
                    products && products.map(pd => (
                        <Product
                            key={pd.id}
                            product={pd}
                            handelAddToCart={handelAddToCart}
                        />
                    ))
                }
            </div>


        </div>
    )
}

export default Shop