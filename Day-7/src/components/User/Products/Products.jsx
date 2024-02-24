import React from 'react'
import './Products.css'

export default function Products() {

    const products = [
        {
          name: 'Scented Candle',
          image: 'candle.jpg',
          description: 'A lovely scented candle for a cozy atmosphere.',
          price: 10.99
        },
        {
          name: 'Mug with Cute Design',
          image: 'mug.jpg',
          description: 'A delightful mug featuring an adorable design.',
          price: 8.99
        },
        // Add more products as needed
      ];
    
      return (
        <div className="gift-grid">
          {products.map((product, index) => (
            <div key={index} className="gift-item">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <span>${product.price}</span>
              <button>Add to Cart</button>
            </div>
          ))}
        </div>
      );
};

