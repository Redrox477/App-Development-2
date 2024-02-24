import React from 'react'
import "./Cart.css";
import { Link } from 'react-router-dom';

export default function Cart() {
  return (
    <div class="container">
    <h1>Shopping Cart</h1>
    <div class="cart">
        <div class="product">
            <img src="https://via.placeholder.com/150" alt="Product 1" />
            <h2>Product 1</h2>
            <p>Description of Product 1</p>
            <p>$19.99</p>
            {/* <a href="#" class="btn">Add to Cart</a> */}
        </div>
        <div class="product">
            <img src="https://via.placeholder.com/150" alt="Product 2" />
            <h2>Product 2</h2>
            <p>Description of Product 2</p>
            <p>$24.99</p>
            {/* <a href="#" class="btn">Add to Cart</a> */}
        </div>
        <div class="product">
            <img src="https://via.placeholder.com/150" alt="Product 3" />
            <h2>Product 3</h2>
            <p>Description of Product 3</p>
            <p>$14.99</p>
            {/* <a href="#" class="btn">Add to Cart</a> */}
        </div>
        <button style={{backgroundColor:"red", height:"40px"}}><Link to="pay">Checkout</Link></button>
    </div>
</div>
  )
}
