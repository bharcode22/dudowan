import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Coffee, Droplets, Thermometer, Scale, Phone, Minus, Plus } from 'lucide-react';
import Container from '../components/layout/Container';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import { products } from '../data/products';

const ProductDetail = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('250g');
  
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <Container className="py-20 text-center">
        <h2 className="text-2xl text-white mb-4">Produk tidak ditemukan</h2>
        <Link to="/products" className="glass-btn-primary inline-block px-6 py-3 rounded-lg">
          Kembali ke Products
        </Link>
      </Container>
    );
  }

  const { 
    name, 
    origin, 
    roastLevel, 
    price, 
    weight, 
    description, 
    flavorNotes, 
    brewMethods, 
    grind, 
    stock 
  } = product;

  const sizes = ['250g', '500g', '1kg'];

  const getRoastVariant = (roast) => {
    switch(roast.toLowerCase()) {
      case 'light': return 'light';
      case 'medium': return 'medium';
      case 'dark': return 'dark';
      default: return 'default';
    }
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price);
  };

  const handleWhatsAppOrder = () => {
    const message = `Halo, saya ingin memesan:\n\n${name} - ${selectedSize}\nJumlah: ${quantity}\nTotal: ${formatPrice(price * quantity)}`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/6281338440900?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="py-16">
      <Container>
        {/* Back Button */}
        <Link 
          to="/products" 
          className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Kembali ke Produk
        </Link>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Image */}
          <div>
            <div className="glass-dark rounded-2xl overflow-hidden aspect-square">
              <img 
                src={product.image || 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80'} 
                alt={name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Column - Details */}
          <div>
            {/* Header */}
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-3">
                <Badge variant={getRoastVariant(roastLevel)}>{roastLevel} Roast</Badge>
                <span className="text-white/40">{origin}</span>
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">{name}</h1>
              <p className="text-white/60 leading-relaxed">{description}</p>
            </div>

            {/* Flavor Notes */}
            <div className="mb-8">
              <h3 className="text-white font-semibold mb-3">Flavor Notes</h3>
              <div className="flex flex-wrap gap-2">
                {flavorNotes.map((note, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-white/10 rounded-full text-sm text-white/80 border border-white/10"
                  >
                    {note}
                  </span>
                ))}
              </div>
            </div>

            {/* Brewing Specs */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="glass-dark p-4 rounded-xl">
                <Droplets className="w-5 h-5 text-coffee-400 mb-2" />
                <p className="text-white/40 text-sm">Brew Methods</p>
                <p className="text-white font-medium">{brewMethods.join(' • ')}</p>
              </div>
              <div className="glass-dark p-4 rounded-xl">
                <Scale className="w-5 h-5 text-coffee-400 mb-2" />
                <p className="text-white/40 text-sm">Grind</p>
                <p className="text-white font-medium">{grind}</p>
              </div>
            </div>

            {/* Order Section */}
            <div className="glass-dark rounded-xl p-6">
              {/* Size Selector */}
              <div className="mb-6">
                <p className="text-white/60 text-sm mb-3">Pilih Ukuran</p>
                <div className="flex gap-3">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 rounded-lg border transition-all ${
                        selectedSize === size
                          ? 'bg-coffee-500 border-coffee-500 text-white'
                          : 'border-white/10 text-white/60 hover:border-white/20'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price & Quantity */}
              <div className="flex items-center justify-between mb-6">
                {/* <div>
                  <p className="text-white/40 text-sm mb-1">Harga</p>
                  <p className="text-3xl font-bold text-white">{formatPrice(price)}</p>
                </div> */}
                
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 rounded-lg border border-white/10 text-white/60 hover:text-white hover:border-white/20 transition-all"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="text-white font-medium w-8 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 rounded-lg border border-white/10 text-white/60 hover:text-white hover:border-white/20 transition-all"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Stock Info */}
              <p className="text-white/40 text-sm mb-4">
                Stok tersedia: {stock} {weight}
              </p>

              {/* Order Button */}
              <button
                onClick={handleWhatsAppOrder}
                className="glass-btn-primary w-full py-4 rounded-xl flex items-center justify-center gap-2 text-lg font-medium"
              >
                <Phone className="w-5 h-5" />
                Order via WhatsApp
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProductDetail;