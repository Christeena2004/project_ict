import React, { useState, useEffect, useRef } from 'react';
import { FaHeart, FaAngleDoubleDown, FaAngleDoubleUp, FaDotCircle, FaCarrot, FaCartPlus, FaShare } from 'react-icons/fa';
import { IoCart } from 'react-icons/io5';

// Array of vegetable product names
const productNames = [
  'Onion', 'Bitter gourd', 'Ladyfinger', 'Potato', 'Cabbage', 'Cauliflower', 'Carrot',
  'Cucumber', 'Pumpkin', 'Taro root', 'Red chili', 'Coriander leaves', 'Beetroot', 'Capsicum',
  'Spinach', 'Lettuce', 'Broccoli', 'Celery', 'Asparagus'
];
const productPrices = {
  'Onion': 100,
  'Bitter gourd': 150,
  'Ladyfinger': 200,
  'Potato': 120,
  'Cabbage': 80,
  'Cauliflower': 90,
  'Carrot': 110,
  'Cucumber': 70,
  'Pumpkin': 130,
  'Taro root': 140,
  'Red chili': 160,
  'Coriander leaves': 50,
  'Beetroot': 90,
  'Capsicum': 140,
  'Spinach': 60,
  'Lettuce': 70,
  'Broccoli': 180,
  'Celery': 150,
  'Asparagus': 200
};
const productWeights = {
  'Onion': '1 kg',
  'Bitter gourd': '500 g',
  'Ladyfinger': '250 g',
  'Potato': '1 kg',
  'Cabbage': '500 g',
  'Cauliflower': '1 kg',
  'Carrot': '500 g',
  'Cucumber': '300 g',
  'Pumpkin': '1 kg',
  'Taro root': '500 g',
  'Red chili': '100 g',
  'Coriander leaves': '100 g',
  'Beetroot': '500 g',
  'Capsicum': '250 g',
  'Spinach': '200 g',
  'Lettuce': '200 g',
  'Broccoli': '500 g',
  'Celery': '250 g',
  'Asparagus': '300 g'
};

// Function to determine the correct image extension
const getImageUrl = (index) => {
  const jpegImages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
  const extension = jpegImages.includes(index) ? 'jpeg' : 'jpg';
  return `/picture/product${index}.${extension}`;
};

const getCategory = (name) => {
  // Example category assignment based on product names
  const categories = {
    'Onion': 'Root',
    'Bitter gourd': 'Fruit',
    'Ladyfinger': 'Fruit',
    'Potato': 'Root',
    'Cabbage': 'Leafy',
    'Cauliflower': 'Flower',
    'Carrot': 'Root',
    'Cucumber': 'Fruit',
    'Pumpkin': 'Fruit',
    'Taro root': 'Root',
    'Red chili': 'Fruit',
    'Coriander leaves': 'Leafy',
    'Beetroot': 'Root',
    'Capsicum': 'Fruit',
    'Spinach': 'Leafy',
    'Lettuce': 'Leafy',
    'Broccoli': 'Flower',
    'Celery': 'Stem',
    'Asparagus': 'Stem'
  };
  return categories[name] || 'Unknown';
};

// Define your product details dynamically
const initialProducts = Array.from({ length: productNames.length }, (_, i) => ({
  id: i + 1,
  name: productNames[i],
  price: productPrices[productNames[i]] || 0,
  weight: productWeights[productNames[i]] || 'N/A',
  image: getImageUrl(i + 1),
  offer: '60% Off',
  category: getCategory(productNames[i]),
}));

const styles = {
  app: {
    backgroundColor: 'white',
    fontFamily: 'Arial, sans-serif',
    margin: '20px',
  },
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px',
    backgroundColor: 'green',
    color: 'white',
  },
  navButton: {
    backgroundColor: 'white',
    color: 'black',
    border: 'none',
    padding: '10px 20px',
    cursor: 'pointer',
    borderRadius: '5px',
    marginLeft: '10px',
  },
  section: {
    marginBottom: '20px',
  },
  productGrid: {
    padding: '30px',
    borderRadius: '20px',
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '20px',
  },
  item: {
    border: '1px solid #ddd',
    padding: '10px',
    boxSizing: 'border-box',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    gap: '10px',
  },
  button: {
    backgroundColor: 'green',
    color: 'white',
    border: 'none',
    padding: '5px 10px',
    cursor: 'pointer',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
  },
  buyNowButton: {
    backgroundColor: 'blue',
    color: 'white',
    border: 'none',
    padding: '5px 10px',
    cursor: 'pointer',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
  },
  buttonHover: {
    backgroundColor: '#0056b3',
  },
  filterContainer: {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    top: '40px',
    left: 0,
    backgroundColor: 'white',
    color: 'black',
    boxShadow: '0px 0px 10px rgba(0,0,0,0.1)',
    zIndex: 1,
  },
  filterMenuButton: {
    backgroundColor: 'white',
    color: 'black',
    border: 'none',
    padding: '10px',
    cursor: 'pointer',
    borderRadius: '5px',
    width: '150px',
    textAlign: 'center',
  },
  sortMenu: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    position: 'absolute',
    top: '40px',
    right: 0,
    backgroundColor: 'white',
    color: 'black',
    boxShadow: '0px 0px 10px rgba(0,0,0,0.1)',
    zIndex: 1,
  },
  sortMenuButton: {
    backgroundColor: 'white',
    color: 'black',
    border: 'none',
    padding: '10px',
    cursor: 'pointer',
    borderRadius: '5px',
    width: '150px',
    textAlign: 'center',
  },
  scrollButton: {
    position: 'fixed',
    backgroundColor: '',
    color: 'black',
    border: 'none',
    padding: '5px',
    borderRadius: '100%',
    cursor: 'pointer',
    fontSize: '18px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
  },
  scrollButtonUp: {
    bottom: '80px',
    right: '20px',
  },
  scrollButtonDown: {
    bottom: '20px',
    right: '20px',
  },
  offerIcon: {
    position: 'absolute',
    top: '10px',
    left: '10px',
    backgroundColor: 'red',
    color: 'white',
    padding: '5px',
    borderRadius: '5px',
    fontSize: '12px',
  },
  wishlistIcon: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    color: 'red',
    cursor: 'pointer',
    fontSize: '18px',
    zIndex: 2,
  },
  shareIcon: {
    position: 'absolute',
    top: '35px',
    right: '10px',
    color: 'grey',
    cursor: 'pointer',
    fontSize: '18px',
    zIndex: 2,
  },
  image: {
    width: '100%',
    height: '150px',
    objectFit: 'cover',
    borderRadius: '10px',
  },
  price: {
    fontSize: '18px',
    fontWeight: 'bold',
  },
  weight: {
    fontSize: '14px',
    color: 'grey',
  },
};

function VegProductDetails() {
  const [products] = useState(initialProducts);
  const [filteredProducts, setFilteredProducts] = useState(initialProducts);
  const [filterMenuOpen, setFilterMenuOpen] = useState(false);
  const [sortMenuOpen, setSortMenuOpen] = useState(false);
  const [showScrollButtons, setShowScrollButtons] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedSort, setSelectedSort] = useState(null);
  const filterMenuRef = useRef(null);
  const sortMenuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButtons(true);
    };

    const handleClickOutside = (event) => {
      if (filterMenuRef.current && !filterMenuRef.current.contains(event.target)) {
        setFilterMenuOpen(false);
      }
      if (sortMenuRef.current && !sortMenuRef.current.contains(event.target)) {
        setSortMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(product => product.category === selectedCategory));
    }
  }, [selectedCategory, products]);

  const sortProducts = (order) => {
    const sortedProducts = [...filteredProducts].sort((a, b) => order === 'lowToHigh' ? a.price - b.price : b.price - a.price);
    setFilteredProducts(sortedProducts);
    setSelectedSort(order);
  };

  const sortByArrival = () => {
    const recentlyArrived = initialProducts.slice(-10);
    setFilteredProducts(recentlyArrived);
    setSelectedSort('recent');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
  };

  return (
    <div style={styles.app}>
      <nav style={styles.navbar}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <FaCarrot style={{ marginRight: '10px' }} />
          <span>Vegetables</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ position: 'relative' }}>
            <button style={styles.navButton} onClick={() => setFilterMenuOpen(!filterMenuOpen)}>Filter</button>
            {filterMenuOpen && (
              <div ref={filterMenuRef} style={styles.filterContainer}>
                <button style={styles.filterMenuButton} onClick={() => setSelectedCategory('All')}>All Products</button>
                <button style={styles.filterMenuButton} onClick={() => setSelectedCategory('Leafy')}>Leafy</button>
                <button style={styles.filterMenuButton} onClick={() => setSelectedCategory('Root')}>Root</button>
                <button style={styles.filterMenuButton} onClick={() => setSelectedCategory('Flower')}>Flower</button>
                <button style={styles.filterMenuButton} onClick={() => setSelectedCategory('Stem')}>Stem</button>
              </div>
            )}
          </div>
          <div style={{ position: 'relative', marginLeft: '10px' }}>
            <button style={styles.navButton} onClick={() => setSortMenuOpen(!sortMenuOpen)}>Sort</button>
            {sortMenuOpen && (
              <div ref={sortMenuRef} style={styles.sortMenu}>
                <button style={styles.sortMenuButton} onClick={() => sortProducts('lowToHigh')}>
                  {selectedSort === 'lowToHigh' && <FaDotCircle style={{ marginRight: '5px' }} />} Price: Low to High
                </button>
                <button style={styles.sortMenuButton} onClick={() => sortProducts('highToLow')}>
                  {selectedSort === 'highToLow' && <FaDotCircle style={{ marginRight: '5px' }} />} Price: High to Low
                </button>
                <button style={styles.sortMenuButton} onClick={sortByArrival}>
                  {selectedSort === 'recent' && <FaDotCircle style={{ marginRight: '5px' }} />} Recently Added
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>
      <div style={styles.productGrid}>
        {filteredProducts.map((product, index) => (
          <div key={product.id} style={styles.item}>
            <img
              src={product.image}
              alt={product.name}
              style={{ width: index === 0 ? '80%' : '60%', borderRadius: '10px' }}
            />
            <div style={styles.wishlistIcon}>
              <FaHeart />
            </div>
            <div style={styles.shareIcon}>
              <FaShare />
            </div>
            <div>{product.name}</div>
            <div style={styles.price}>₹{product.price}</div>
            <div style={styles.weight}>{product.weight}</div>
            <div style={styles.offerIcon}>{product.offer}</div>
            <div style={styles.buttonContainer}>
              <button style={styles.button}>
                <IoCart style={{ marginRight: '5px' }} /> Add to Cart
              </button>
              <button style={styles.buyNowButton}>
                <FaCartPlus style={{ marginRight: '5px' }} /> Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
      {showScrollButtons && (
        <>
          <button style={{ ...styles.scrollButton, ...styles.scrollButtonUp }} onClick={scrollToTop}>
            <FaAngleDoubleUp />
          </button>
          <button style={{ ...styles.scrollButton, ...styles.scrollButtonDown }} onClick={scrollToBottom}>
            <FaAngleDoubleDown />
          </button>
        </>
      )}
    </div>
  );
}

export default VegProductDetails;

