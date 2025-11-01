'use client';

import Link from 'next/link';
import { useCart } from '@/lib/CartContext';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Header() {
  const { getCartCount } = useCart();
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/products?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <header className="bg-amazon-dark text-white">
      <div className="bg-amazon-dark py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <Link href="/" className="text-2xl font-bold hover:opacity-80 transition">
            <span className="text-white">amazon</span>
            <span className="text-amazon">.clone</span>
          </Link>

          <form onSubmit={handleSearch} className="flex-1 max-w-2xl">
            <div className="flex">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products..."
                className="flex-1 px-4 py-2 rounded-l text-black focus:outline-none"
              />
              <button
                type="submit"
                className="bg-amazon px-6 py-2 rounded-r hover:bg-orange-600 transition"
              >
                Search
              </button>
            </div>
          </form>

          <nav className="flex items-center gap-6">
            <Link href="/account" className="hover:opacity-80 transition">
              <div className="text-xs">Hello, Sign in</div>
              <div className="font-bold">Account</div>
            </Link>

            <Link href="/cart" className="hover:opacity-80 transition relative">
              <div className="text-xs">Cart</div>
              <div className="font-bold flex items-center">
                🛒 ({getCartCount()})
              </div>
            </Link>
          </nav>
        </div>
      </div>

      <div className="bg-amazon-light py-2 px-4">
        <div className="max-w-7xl mx-auto">
          <nav className="flex gap-6 text-sm">
            <Link href="/products" className="hover:opacity-80 transition">
              All Products
            </Link>
            <Link href="/products?category=Electronics" className="hover:opacity-80 transition">
              Electronics
            </Link>
            <Link href="/products?category=Fashion" className="hover:opacity-80 transition">
              Fashion
            </Link>
            <Link href="/products?category=Home & Kitchen" className="hover:opacity-80 transition">
              Home & Kitchen
            </Link>
            <Link href="/products?category=Books" className="hover:opacity-80 transition">
              Books
            </Link>
            <Link href="/products?category=Sports" className="hover:opacity-80 transition">
              Sports
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
