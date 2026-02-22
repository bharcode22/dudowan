import ProductCard from './ProductCard';

const ProductGrid = ({ products, className = '' }) => {
  if (!products || products.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-white/40">Tidak ada produk ditemukan</p>
      </div>
    );
  }

  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ${className}`}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;