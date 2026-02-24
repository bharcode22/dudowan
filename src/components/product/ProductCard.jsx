import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Coffee, ChevronLeft, ChevronRight } from 'lucide-react';
import Badge from '../ui/Badge';

const ProductCard = ({ product }) => {
  const { id, name, origin, roastLevel, price, weight, description, images } = product;
  const [imgIndex, setImgIndex] = useState(0);
  const touchStartX = useRef(null);

  const hasMultiple = images && images.length > 1;

  const prev = (e) => {
    e.preventDefault();
    setImgIndex(i => (i - 1 + images.length) % images.length);
  };

  const next = (e) => {
    e.preventDefault();
    setImgIndex(i => (i + 1) % images.length);
  };

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 40) setImgIndex(i => (i + 1) % images.length);
    else if (diff < -40) setImgIndex(i => (i - 1 + images.length) % images.length);
    touchStartX.current = null;
  };

  const image = images?.[imgIndex];

  // Function to determine badge variant based on roast level
  const getRoastVariant = (roast) => {
    switch(roast.toLowerCase()) {
      case 'light': return 'light';
      case 'medium': return 'medium';
      case 'dark': return 'dark';
      default: return 'default';
    }
  };

  // Format price to IDR
  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="glass-card rounded-xl overflow-hidden group hover:scale-105 transition-all duration-300">
      {/* Image Container */}
      <div
        className="relative h-48 overflow-hidden bg-white/5"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80';
            }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <Coffee className="w-12 h-12 text-white/20" />
          </div>
        )}

        {/* Prev/Next arrows - hanya muncul saat hover jika ada >1 gambar */}
        {hasMultiple && (
          <>
            <button
              onClick={prev}
              className="absolute left-1 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-0.5 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={next}
              className="absolute right-1 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-0.5 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

            {/* Dot indicators */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
              {images.map((_, i) => (
                <span
                  key={i}
                  className={`block w-1.5 h-1.5 rounded-full transition-all ${
                    i === imgIndex ? 'bg-white' : 'bg-white/40'
                  }`}
                />
              ))}
            </div>
          </>
        )}

        {/* Roast Level Badge */}
        <div className="absolute top-3 right-3">
          <Badge variant={getRoastVariant(roastLevel)}>
            {roastLevel} Roast
          </Badge>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-white">{name}</h3>
          <span className="text-sm text-white/40">{origin}</span>
        </div>
        
        <p className="text-white/60 text-sm mb-4 line-clamp-2">
          {description}
        </p>

        {/* Weight & Price */}
        {/* <div className="flex justify-between items-center mb-4">
          <span className="text-sm text-white/40">{weight}</span>
          <span className="text-lg font-bold text-white">{formatPrice(price)}</span>
        </div> */}

        {/* Action Button */}
        <Link 
          to={`/product/${id}`}
          className="glass-btn-primary w-full py-2 px-4 rounded-lg flex items-center justify-center gap-2 text-sm font-medium"
        >
          <ShoppingBag className="w-4 h-4" />
          Lihat Detail
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;