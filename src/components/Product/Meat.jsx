import React, { useState, useEffect, useRef } from 'react';
import { FaHeart, FaAngleDoubleDown, FaAngleDoubleUp, FaDotCircle, FaCartPlus, FaShare, FaDrumstickBite } from 'react-icons/fa';
import { IoCart } from 'react-icons/io5';

// Array of vegetable product names
const productNames = [
'chicken curry cut(skin off)', 'chicken curry cut (with skin)', 'chicken breast boneless', 'chicken boneless(cubes)', 'chiken drumstick', 'Free Range Mutton Boneless', 'Leg Curry Cut (Front / Back Leg)',
  'prawns (medium)', 'Rohu (cut)', 'Salmon(cut)', 'Freshwater Pomfret - Yeri Vavval', 'dry prawns', 'Dry Anchovy Fish', 'Dry ribbon fish',
'beef steak','beef curry cut(boneless)','beef curry cut (with bone)',
];

const productPrices = {
  'chicken curry cut(skin off)': 300,
  'chicken curry cut(with skin)': 300,
  'chicken breast boneless': 200,
  'chicken boneless(cubes)': 400,
  'chicken drumstick': 400,
  'Free Range Mutton Boneless': 600,
  'Leg Curry Cut (Front / Back Leg)': 1110,
  'prawns (medium)': 700,
  'Rohu (cut)': 1130,
  'Salmon(cut)': 1140,
  'Freshwater Pomfret - Yeri Vavval': 1160,
  'dry prawns': 50,
  'Dry Anchovy Fish': 200,
  'Dry ribbon fish': 140,
  'beef steak': 70,
  'beef curry cut(boneless)': 1180,
  'beef curry cut (with bone)': 1150,
};

const productWeights = {
  'chicken curry cut(skin off)': '1kg',
  'chicken curry cut(with skin)': '1kg',
  'chicken breast boneless': '1kg',
  'chicken boneless(cubes)': '1kg',
  'chicken drumstick': '1kg',
  'Free Range Mutton Boneless': '1 kg',
  'Leg Curry Cut (Front / Back Leg)': '1 kg',
  'prawns (medium)': '500g',
  'Rohu (cut)': '500 g',
  'Salmon(cut)': '500g',
  'Freshwater Pomfret - Yeri Vavval': '1kg',
  'dry prawns': '500g',
  'Dry Anchovy Fish': '2kg',
  'Dry ribbon fish': '1kg',
  'Crab': '1kg',
  'beef steak': '1kg',
  'beef curry cut(boneless)':'1kg',
  'beef curry cut (with bone': '1kg',
};

// Function to determine the correct image extension
const getImageUrl = (index) => {
  const jpegImages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
  const extension = jpegImages.includes(index) ? 'jpeg' : 'jpg';
  return `/details/product${index}.${extension}`;
};

const getCategory = (name) => {
  const categories = { 'chicken curry cut(skin off)':'chicken' ,
    'chicken curry cut(with skin)': 'chicken',
    'chicken breast boneless': 'chicken',
    'chicken boneless(cubes)':'chicken',
    'chicken drumstick': 'chicken',
    'Free Range Mutton Boneless': 'mutton',
    'Leg Curry Cut (Front / Back Leg)': 'mutton',
    'prawns (medium)': 'fish',
    'Rohu (cut)': 'fish',
    'Salmon(cut)': 'fish',
    'Freshwater Pomfret - Yeri Vavval': 'fish',
    'dry prawns': 'fish',
    'Dry Anchovy Fish': ' fish',
    'Dry ribbon fish': 'fish',
    'beef steak': 'beef',
    'beef curry cut(boneless)': 'beef',
    'beef curry cut (with bone)': 'beef',
      
    };
    return categories[name] || 'Unknown';
  };

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
    backgroundColor: '#984040',
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
    backgroundColor: '#984040',
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
  wishlistIcon: (isWished) => ({
    position: 'absolute',
    top: '10px',
    right: '10px',
    color: isWished ? 'red' : 'grey',
    cursor: 'pointer',
    fontSize: '18px',
    zIndex: 2,
  }),
};

function MeatProductDetails() {
  const [products] = useState(initialProducts);
  const [filteredProducts, setFilteredProducts] = useState(initialProducts);
  const [filterMenuOpen, setFilterMenuOpen] = useState(false);
  const [sortMenuOpen, setSortMenuOpen] = useState(false);
  const [showScrollButtons, setShowScrollButtons] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedSort, setSelectedSort] = useState(null);
  const [wishlist, setWishlist] = useState(new Set());
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

  const toggleWishlist = (id) => {
    setWishlist(prevWishlist => {
      const newWishlist = new Set(prevWishlist);
      if (newWishlist.has(id)) {
        newWishlist.delete(id);
      } else {
        newWishlist.add(id);
      }
      return newWishlist;
    });
  };

  return (
    <div style={styles.app}>
      <nav style={styles.navbar}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <FaDrumstickBite style={{ marginRight: '10px' }} />
          <span>freshmeats</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ position: 'relative' }}>
            <button style={styles.navButton} onClick={() => setFilterMenuOpen(!filterMenuOpen)}>Filter</button>
            {filterMenuOpen && (
              <div ref={filterMenuRef} style={styles.filterContainer}>
                <button style={styles.filterMenuButton} onClick={() => setSelectedCategory('All')}>All Products</button>
                <button style={styles.filterMenuButton} onClick={() => setSelectedCategory('mutton')}>mutton</button>
                <button style={styles.filterMenuButton} onClick={() => setSelectedCategory('fish')}>fish</button>
                <button style={styles.filterMenuButton} onClick={() => setSelectedCategory('beef')}>beef</button>
                <button style={styles.filterMenuButton} onClick={() => setSelectedCategory('chicken')}>chicken</button>
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
            <div style={styles.wishlistIcon(wishlist.has(product.id))} onClick={() => toggleWishlist(product.id)}>
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

export default MeatProductDetails;

