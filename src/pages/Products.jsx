import { useState } from 'react';
import Container from '../components/layout/Container';
import SectionTitle from '../components/ui/SectionTitle';
import ProductGrid from '../components/product/ProductGrid';
// import ProductFilter from '../components/product/ProductFilter';
import { products } from '../data/products';

const Products = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleFilterChange = ({ roast, origin }) => {
    let filtered = [...products];

    if (roast) {
      filtered = filtered.filter(p => p.roastLevel === roast);
    }

    if (origin) {
      filtered = filtered.filter(p => p.origin === origin);
    }

    setFilteredProducts(filtered);
  };

  return (
    <div className="py-16">
      <Container>
        <SectionTitle 
          title="Koleksi Kopi Kami" 
          subtitle="Jelajahi berbagai pilihan kopi terbaik dari seluruh Indonesia"
        />

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar Filter */}
          {/* <div className="lg:col-span-1">
            <ProductFilter onFilterChange={handleFilterChange} />
          </div> */}

          {/* Product Grid */}
          <div className="lg:col-span-4">
            {/* Result Info */}
            <div className="flex justify-between items-center mb-6">
              <p className="text-white/60">
                Menampilkan {filteredProducts.length} dari {products.length} produk
              </p>
            </div>

            <ProductGrid products={filteredProducts} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Products;