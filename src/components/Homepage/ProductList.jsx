import React from 'react';
import apple from '../images/apple.jpeg';
import broccoli from '../images/broccoli.jpeg';
import milk from '../images/milk.jpeg';
import bread from '../images/bread.jpeg';
import chips from '../images/chips.jpeg';

function ProductList() {
  const products = [
    { name: 'Apple', description: 'Fresh and juicy apples', price: '$1.00', image: apple },
    { name: 'Broccoli', description: 'Organic broccoli florets', price: '$2.50', image:broccoli },
    { name: 'Milk', description: '1 gallon of whole milk', price: '$3.00', image:milk },
    { name: 'Bread', description: 'Whole wheat bread loaf', price: '$2.00', image: bread },
    { name: 'Chips', description: 'Crunchy potato chips', price: '$1.50', image: chips },
  ];

  return (
    <div className="product-list">
      <h2>Top Selling Products</h2>
      <div className="products-container">
        {products.map((product, index) => (
          <div className="product" key={index}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
