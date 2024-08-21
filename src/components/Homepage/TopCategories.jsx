import React, { useRef } from 'react';
import fruits from '../images/fruits.jpeg';
import vegetables from '../images/vegetables.jpeg';
import dairy from '../images/dairy.jpeg';
import bakery from '../images/bakery.jpeg';
import spices from '../images/spices.jpeg';
import snacks from '../images/snacks.jpeg';
import './TopCategories.css'; 

function TopCategories() {
  const categoriesRef = useRef(null);

  const slide = (direction) => {
    const scrollAmount = 300;
    if (categoriesRef.current) {
      const container = categoriesRef.current;
      const maxScrollLeft = container.scrollWidth - container.clientWidth;
      if (direction === 'left') {
        container.scrollLeft = Math.max(container.scrollLeft - scrollAmount, 0);
      } else {
        container.scrollLeft = Math.min(container.scrollLeft + scrollAmount, maxScrollLeft);
      }
    }
  };

  const categories = [
    { name: 'Fruits', image: fruits, rating: 4.5 },
    { name: 'Vegetables', image: vegetables, rating: 4.7 },
    { name: 'Dairy', image: dairy, rating: 4.3 },
    { name: 'Bakery', image: bakery, rating: 4.6 },
    { name: 'Snacks', image: snacks, rating: 4.4 },
    {name: 'Spices', image: spices, rating: 4.5 },
  ];

  return (
     <div className="top-categories">
      <h2>Top Best Selling Categories</h2>
      <h5> If you want to enjoy your life with healthy body and healthy mind, you are the most
        <br></br> welcome in out shopping zone,we serve quality grocery for you</h5>
       
      <div className="carousel-container">
        <button className="arrow left-arrow" onClick={() => slide('left')}>←</button>
        <div className="carousel" ref={categoriesRef}>
          {categories.map((category, index) => (
            <div className="category" key={index}>
              <img src={category.image} alt={category.name} />
              <h3>{category.name}</h3>
              <div className="rating">
                {Array.from({ length: 5 }, (_, i) => (
                  <span key={i} className={i < Math.round(category.rating) ? 'filled' : ''}>★</span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <button className="arrow right-arrow" onClick={() => slide('right')}>→</button>
      </div>
    </div>
  );
}

export default TopCategories;
