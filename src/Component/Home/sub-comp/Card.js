import React, { useState } from 'react'

function Card(props) {
    const { name, image, price } = props.product


    return (
        <div>
            <div className="card">
                <img src={image} className="card-img-top" alt="" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Price : $ {price}</p>
                    <button onClick={() => props.handler(props.product)} className="btn btn-outline-primary">Add To Cart <i className="fa-solid fa-cart-plus ms-2"></i></button>
                </div>
            </div>

        </div>
    )
}

export default Card