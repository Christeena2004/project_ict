import React, { useEffect, useState } from 'react';
import ad1 from '../images/ad1.jpg';
import ad2 from '../images/ad2.jpg';
import ad3 from '../images/ad3.jpg';
function Advertisement() {
  const ads = [
    { src: ad1, alt: 'Advertisement 1' },
    { src: ad2, alt: 'Advertisement 2' },
    { src: ad3, alt: 'Advertisement 3' },
  ];
  const [currentAdIndex, setCurrentAdIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAdIndex((prevIndex) => (prevIndex + 1) % ads.length);
    }, 3000); // Change every 3 seconds
    return () => clearInterval(interval);
  }, [ads.length]);

  return (
    <div className="advertisement">
      <img src={ads[currentAdIndex].src} alt={ads[currentAdIndex].alt} />
    </div>
  );
}

export default Advertisement;
