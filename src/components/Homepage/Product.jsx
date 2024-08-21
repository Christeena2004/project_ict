import React from 'react';

function Product({ product }) {
  return (
   
        
    <div className="product">
    <img src={Image} alt={product.name}/>
      <h2>{product.name}</h2>
      <p>{product.price}</p>
      <button>Add to Cart</button>
    </div>
   
  );
}

export default Product;
