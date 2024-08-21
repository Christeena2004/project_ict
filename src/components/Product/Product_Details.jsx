import React, { useState, useEffect, useRef } from 'react';
import { FaHeart, FaAngleDoubleDown, FaAngleDoubleUp, FaDotCircle, FaShoppingCart, FaShare} from 'react-icons/fa';
import { IoCart } from 'react-icons/io5';

// Function to categorize products
const getCategory = (productName) => {
  const berryFruits = ['Blackberry', 'Blueberry', 'Raspberry', 'Gooseberry'];
  const pomeFruits = ['Apple', 'Guava', 'Pear', 'Quince'];
  const dryFruits = ['Dates', 'Cashewnut', 'Walnut', 'Olive'];
  const citrusFruits = ['Orange', 'Mosambi', 'Lemon', 'Lime'];

  if (berryFruits.includes(productName)) return 'Berry Fruits';
  if (pomeFruits.includes(productName)) return 'Pome Fruits';
  if (dryFruits.includes(productName)) return 'Dry Fruits';
  if (citrusFruits.includes(productName)) return 'Citrus Fruits';
  return 'Other';
};

// Array of product names
const productNames = [
  'Apple', 'Apricot', 'Avocado', 'Blackberry', 'Blueberry',
  'Dragonfruit', 'Durian', 'Gooseberry', 'Watermelon', 'Kiwi',
  'Guava', 'Jackfruit', 'Miraclefruit', 'Orange', 'Passionfruit',
  'Peach', 'Pineapple', 'Raspberry', 'Rambutan', 'Cranberry', 'Boysenberry', 'Miracle fruit', 'Huckleberry', 'Cape Gooseberry', 'Mosambi', 'Sapota', 'Loquat', 'Pear', 'Quince', 'Plum', 'Cherry', 'Mango', 'Olive', 'Dates', 'Cashewnut', 'Walnut', 'Lemon', 'Lime'
  // Add more product names as needed
];

// Function to determine the correct image extension and include width and height
const getImageUrl = (index, width = 100, height = 100) => {
  const jpegImages = [26, 25, 34, 35, 36, 37, 38]; // Indices of products with .jpeg images
  const extension = jpegImages.includes(index) ? 'jpeg' : 'jpg';
  return `/images/Product${index}.${extension}?width=${width}&height=${height}`;
};
// Define your product details dynamically
const initialProducts = Array.from({ length: productNames.length }, (_, i) => ({
  id: i + 1,
  name: productNames[i], // Assign name from the productNames array
  price: (Math.floor(Math.random() * 37) + 1) * 100, // Price in rupees
  image: getImageUrl(i + 1),
  offer: '50% Off',
  category: getCategory(productNames[i]), // Assign category based on product name
  imageWidth: 100,
  imageHeight: 100,
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
    color: 'black',
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
    height: '300px',
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
    top: '10px', // Positioned at the top
    right: '10px',
    fontSize: '20px',
    cursor: 'pointer',
    color: 'red',
  },
  shareIcon: {
    position: 'absolute',
    top: '40px', // Positioned below the wishlist icon
    right: '10px',
    fontSize: '20px',
    cursor: 'pointer',
    color: 'gray',
  },
};

function ProductDetails() {
  const [products, setProducts] = useState(initialProducts);
  const [filteredProducts, setFilteredProducts] = useState(initialProducts);
  const [filterMenuOpen, setFilterMenuOpen] = useState(false);
  const [filterOptionsOpen, setFilterOptionsOpen] = useState(false);
  const [showScrollButtons, setShowScrollButtons] = useState(false);
  const [selectedSort, setSelectedSort] = useState(null);
  const [specificImageWidth, setSpecificImageWidth] = useState(100); // State for specific image width
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
        setFilterOptionsOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const sortProducts = (order) => {
    const sortedProducts = [...filteredProducts].sort((a, b) => order === 'lowToHigh' ? a.price - b.price : b.price - a.price);
    setFilteredProducts(sortedProducts);
    setSelectedSort(order);
  };

  const filterByCategory = (category) => {
    if (category === 'All Fruits') {
      setFilteredProducts(initialProducts);
    } else {
      const filtered = initialProducts.filter(product => product.category === category);
      setFilteredProducts(filtered);
    }
  };

  const sortByArrival = () => {
    // For simplicity, let's assume recently arrived products are the last 10 in the list
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

  const handleImageWidthChange = (newWidth) => {
    setSpecificImageWidth(newWidth);
  };

  return (
    <div style={styles.app}>
      <nav style={styles.navbar}>
        <div>Fruits</div>
        <div style={{ display: 'flex' }}>
          <div style={{ position: 'relative' }}>
            <button style={styles.navButton} onClick={() => setFilterMenuOpen(!filterMenuOpen)}>Filter</button>
            {filterMenuOpen && (
              <div ref={filterMenuRef} style={styles.filterContainer}>
                <button style={styles.filterMenuButton} onClick={() => filterByCategory('Berry Fruits')}>Berry Fruits</button>
                <button style={styles.filterMenuButton} onClick={() => filterByCategory('Pome Fruits')}>Pome Fruits</button>
                <button style={styles.filterMenuButton} onClick={() => filterByCategory('Dry Fruits')}>Dry Fruits</button>
                <button style={styles.filterMenuButton} onClick={() => filterByCategory('Citrus Fruits')}>Citrus Fruits</button>
                <button style={styles.filterMenuButton} onClick={() => filterByCategory('All Fruits')}>All Fruits</button>
              </div>
            )}
          </div>
          <div style={{ position: 'relative' }}>
            <button style={styles.navButton} onClick={() => setFilterOptionsOpen(!filterOptionsOpen)}>Sort</button>
            {filterOptionsOpen && (
              <div ref={sortMenuRef} style={styles.filterContainer}>
                <button
                  style={styles.filterMenuButton}
                  onClick={() => sortProducts('lowToHigh')}
                >
                  {selectedSort === 'lowToHigh' && <FaDotCircle style={{ marginRight: '5px' }} />} Price: Low to High
                </button>
                <button
                  style={styles.filterMenuButton}
                  onClick={() => sortProducts('highToLow')}
                >
                  {selectedSort === 'highToLow' && <FaDotCircle style={{ marginRight: '5px' }} />} Price: High to Low
                </button>
                <button
                  style={styles.filterMenuButton}
                  onClick={() => sortByArrival()}
                >
                  {selectedSort === 'recent' && <FaDotCircle style={{ marginRight: '5px' }} />} Recently Arrived
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>

      <section style={styles.section}>
        <div style={styles.productGrid}>
          {filteredProducts.map((product, index) => (
            <div key={product.id} style={styles.item}>
              <span style={styles.offerIcon}>{product.offer}</span>
              <img
                src={product.image}
                alt={product.name}
                style={{
                  maxHeight: '60%',
                  width: index === 0 ? specificImageWidth + 'px' : '60%', // Adjust width for the first image
                  objectFit: 'contain',
                }}
              />
              <div>{product.name}</div>
              <div>Price: ₹{product.price}</div>
              <div style={styles.buttonContainer}>
                <button style={styles.button}>
                  <IoCart style={{ marginRight: '5px' }} /> Add to Cart
                </button>
                <button style={styles.buyNowButton}>
                  <FaShoppingCart style={{ marginRight: '5px' }} /> Buy Now
                </button>
              </div>
              <FaHeart style={styles.wishlistIcon} />
              <FaShare style={styles.shareIcon} />
            </div>
          ))}
        </div>
      </section>

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
export default ProductDetails;
