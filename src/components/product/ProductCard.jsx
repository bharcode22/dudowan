import { Link } from 'react-router-dom';
import { ShoppingBag, Coffee } from 'lucide-react';
import Badge from '../ui/Badge';

const ProductCard = ({ product }) => {
  const { id, name, origin, roastLevel, price, weight, description, image } = product;

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
      <div className="relative h-48 overflow-hidden bg-white/5">
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
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm text-white/40">{weight}</span>
          <span className="text-lg font-bold text-white">{formatPrice(price)}</span>
        </div>

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