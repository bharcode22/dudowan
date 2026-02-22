import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const ProductFilter = ({ onFilterChange }) => {
  const [selectedRoast, setSelectedRoast] = useState('all');
  const [selectedOrigin, setSelectedOrigin] = useState('all');
  const [isOpen, setIsOpen] = useState(false);

  const roastLevels = ['all', 'Light', 'Medium', 'Medium-Dark', 'Dark'];
  const origins = ['all', 'Aceh', 'Bali', 'Sulawesi', 'Jawa Timur', 'Flores', 'Papua'];

  const handleRoastChange = (roast) => {
    setSelectedRoast(roast);
    onFilterChange({ roast: roast === 'all' ? null : roast, origin: selectedOrigin === 'all' ? null : selectedOrigin });
  };

  const handleOriginChange = (origin) => {
    setSelectedOrigin(origin);
    onFilterChange({ roast: selectedRoast === 'all' ? null : selectedRoast, origin: origin === 'all' ? null : origin });
  };

  const clearFilters = () => {
    setSelectedRoast('all');
    setSelectedOrigin('all');
    onFilterChange({ roast: null, origin: null });
  };

  return (
    <div className="glass-dark rounded-xl p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-white font-semibold">Filter Produk</h3>
        {(selectedRoast !== 'all' || selectedOrigin !== 'all') && (
          <button 
            onClick={clearFilters}
            className="text-sm text-white/40 hover:text-white transition-colors"
          >
            Reset Filter
          </button>
        )}
      </div>

      {/* Mobile Filter Toggle */}
      <button
        className="lg:hidden flex items-center justify-between w-full py-2 text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>Show Filters</span>
        <ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Filter Content */}
      <div className={`space-y-6 mt-4 ${isOpen ? 'block' : 'hidden lg:block'}`}>
        {/* Roast Level Filter */}
        <div>
          <h4 className="text-white/60 text-sm mb-3">Roast Level</h4>
          <div className="space-y-2">
            {roastLevels.map((roast) => (
              <label key={roast} className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="roast"
                  value={roast}
                  checked={selectedRoast === roast}
                  onChange={(e) => handleRoastChange(e.target.value)}
                  className="w-4 h-4 accent-coffee-500"
                />
                <span className="text-white capitalize">
                  {roast === 'all' ? 'Semua Roast' : roast}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Origin Filter */}
        <div>
          <h4 className="text-white/60 text-sm mb-3">Asal Daerah</h4>
          <div className="space-y-2">
            {origins.map((origin) => (
              <label key={origin} className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="origin"
                  value={origin}
                  checked={selectedOrigin === origin}
                  onChange={(e) => handleOriginChange(e.target.value)}
                  className="w-4 h-4 accent-coffee-500"
                />
                <span className="text-white capitalize">
                  {origin === 'all' ? 'Semua Daerah' : origin}
                </span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFilter;