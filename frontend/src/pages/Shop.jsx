import { useState } from 'react';
import { PRODUCTS } from '../constants/data';
import ProductCard from '../components/ProductCard';

const CATEGORIES = ['all', 'medicine', 'supplement', 'equipment', 'skincare'];

export default function Shop() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');
  const [sort, setSort] = useState('default');

  const filtered = PRODUCTS
    .filter(p => category === 'all' || p.category === category)
    .filter(p => p.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      if (sort === 'price-asc') return a.price - b.price;
      if (sort === 'price-desc') return b.price - a.price;
      if (sort === 'rating') return b.rating - a.rating;
      return 0;
    });

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-teal-500 text-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold mb-2">Medicine Shop</h1>
          <p className="text-blue-100">Browse our collection of genuine medicines and health products</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search + Sort */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
            <input
              type="text"
              placeholder="Search medicines, supplements..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            />
          </div>
          <select
            value={sort}
            onChange={e => setSort(e.target.value)}
            className="border border-gray-200 rounded-xl px-4 py-2.5 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="default">Sort: Default</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>

        {/* Category Pills */}
        <div className="flex gap-2 flex-wrap mb-8">
          {CATEGORIES.map(c => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium capitalize transition ${
                category === c
                  ? 'bg-blue-600 text-white shadow'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-blue-400 hover:text-blue-600'
              }`}
            >
              {c === 'all' ? 'All Products' : c}
            </button>
          ))}
        </div>

        {/* Results count */}
        <p className="text-sm text-gray-500 mb-4">
          Showing <span className="font-semibold text-gray-800">{filtered.length}</span> products
        </p>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filtered.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        ) : (
          <div className="text-center py-20">
            <span className="text-6xl">🔍</span>
            <p className="text-gray-500 mt-4 text-lg">No products found</p>
            <button onClick={() => { setSearch(''); setCategory('all'); }} className="mt-4 text-blue-600 hover:underline text-sm">
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
