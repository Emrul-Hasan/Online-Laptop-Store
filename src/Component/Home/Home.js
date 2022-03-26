import React, { useState, useEffect } from 'react'
import Bonus from '../Bonus'
import './Home.css'
import Card from './sub-comp/Card'
import Cart from './sub-comp/Cart'
const Home = () => {
    const [products, setProducts] = useState([])
    const [carts, setCart] = useState([])

    const URL = `https://raw.githubusercontent.com/mdtomiz420/json-data/main/product.json`;
    useEffect(() => {
        fetch(URL)
            .then(res => res.json())
            .then(json => setProducts(json))
    }, [URL])

    const HandleCart = (productS) => {
        const exists = carts.find(product => product.id === productS.id);
        if (!exists) {
            if (carts.length < 4) {
                const newCarts = [...carts, productS]
                setCart(newCarts)
            } else {
                limitedAlert.style.display = 'flex'
                selectinoAlert.style.display = 'none'
            }
        }
        else {
            selectinoAlert.style.display = 'flex'
            limitedAlert.style.display = 'none'
        }

    }
    const resetSetProduct = () => {
        setCart([])
    }
    const limitedAlert = document.getElementById('alert-limit')
    const selectinoAlert = document.getElementById('alert-selected')

    const close = () => {
        selectinoAlert.style.display = 'none'
        limitedAlert.style.display = 'none'
    }
    return (
        <> <h1 className='text-center py-3 mt-5 fw-bold'>Online Shop</h1>
            <h3 className='text-center mb-4'>Choose 4 Item</h3>
            <div className='container box'>

                <div className='product-container'>
                    {
                        products.map(product => {
                            return (
                                <Card key={product.id}
                                    handler={HandleCart}
                                    selectinoAlert={selectinoAlert}
                                    product={product} />
                            )
                        })
                    }
                </div>
                <div className='cart-container'>
                    <Cart
                        added={carts}
                        reset={resetSetProduct}
                    />
                </div>
            </div>
            {/* error message 1  */}
            <div id='alert-limit' className='alert-box fixed-top'>
                <h1>You can select only 4 Product</h1>
                <i onClick={close} className="fa-solid fa-xmark"></i>
            </div>
            {/* error message 2 */}
            <div id='alert-selected' className='alert-box fixed-top'>
                <h1>Alrady selected</h1>
                <i onClick={close} className="fa-solid fa-xmark"></i>
            </div>
            <div className='container my-5'>
                <Bonus />
            </div>
        </>
    )
}

export default Home