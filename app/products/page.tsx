'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import ProductCard from '@/components/ProductCard';
import { products } from '@/lib/data';

function ProductsContent() {
  const searchParams = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [sortBy, setSortBy] = useState('featured');

  useEffect(() => {
    const category = searchParams.get('category');
    const search = searchParams.get('search');

    let filtered = [...products];

    if (category) {
      filtered = filtered.filter(p => p.category === category);
    }

    if (search) {
      const searchLower = search.toLowerCase();
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(searchLower) ||
        p.description.toLowerCase().includes(searchLower) ||
        p.category.toLowerCase().includes(searchLower)
      );
    }

    if (sortBy === 'price-low') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      filtered.sort((a, b) => b.rating - a.rating);
    }

    setFilteredProducts(filtered);
  }, [searchParams, sortBy]);

  const category = searchParams.get('category');
  const search = searchParams.get('search');

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">
          {category ? category : search ? `Search results for "${search}"` : 'All Products'}
        </h1>
        <p className="text-gray-600">
          {filteredProducts.length} {filteredProducts.length === 1 ? 'result' : 'results'}
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <aside className="md:w-64 flex-shrink-0">
          <div className="bg-white rounded-lg shadow p-4 mb-4">
            <h3 className="font-bold mb-3">Sort By</h3>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full border rounded px-3 py-2"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Customer Rating</option>
            </select>
          </div>

          <div className="bg-white rounded-lg shadow p-4">
            <h3 className="font-bold mb-3">Filters</h3>
            
            <div className="mb-4">
              <h4 className="font-semibold mb-2">Prime Eligible</h4>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm">Prime Shipping</span>
              </label>
            </div>

            <div className="mb-4">
              <h4 className="font-semibold mb-2">Price Range</h4>
              <label className="flex items-center mb-1">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm">Under $25</span>
              </label>
              <label className="flex items-center mb-1">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm">$25 to $50</span>
              </label>
              <label className="flex items-center mb-1">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm">$50 to $100</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm">$100 & Above</span>
              </label>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Customer Rating</h4>
              <label className="flex items-center mb-1">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm">★★★★★ & Up</span>
              </label>
              <label className="flex items-center mb-1">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm">★★★★☆ & Up</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm">★★★☆☆ & Up</span>
              </label>
            </div>
          </div>
        </aside>

        <div className="flex-1">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow p-8 text-center">
              <p className="text-xl text-gray-600">No products found</p>
              <p className="text-gray-500 mt-2">Try adjusting your search or filters</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center">Loading products...</div>
      </div>
    }>
      <ProductsContent />
    </Suspense>
  );
}
