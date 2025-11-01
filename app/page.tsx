import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import CategoryCard from '@/components/CategoryCard';
import { products, categories } from '@/lib/data';

export default function Home() {
  const featuredProducts = products.slice(0, 8);
  const dealsProducts = products.filter(p => p.originalPrice).slice(0, 4);

  return (
    <div>
      <div className="bg-gradient-to-b from-amazon-light to-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h1 className="text-4xl font-bold mb-4">Welcome to Amazon Clone</h1>
            <p className="text-xl text-gray-600 mb-6">
              Discover amazing products at unbeatable prices
            </p>
            <Link
              href="/products"
              className="inline-block bg-amazon hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition"
            >
              Shop Now
            </Link>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Shop by Category</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {categories.map((category) => (
                <CategoryCard key={category.id} category={category} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Today&apos;s Deals</h2>
            <Link href="/products" className="text-amazon-blue hover:underline">
              See all deals
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {dealsProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Featured Products</h2>
            <Link href="/products" className="text-amazon-blue hover:underline">
              See all products
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Sign up for Prime</h2>
          <p className="text-gray-600 mb-6">
            Get FREE delivery, exclusive deals, and more benefits
          </p>
          <button className="bg-amazon hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition">
            Try Prime Free for 30 Days
          </button>
        </div>
      </div>
    </div>
  );
}
