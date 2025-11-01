'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/types';
import { useCart } from '@/lib/CartContext';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product);
  };

  return (
    <Link href={`/product/${product.id}`}>
      <div className="bg-white rounded-lg shadow hover:shadow-lg transition p-4 h-full flex flex-col">
        <div className="relative w-full h-48 mb-4">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover rounded"
          />
          {product.prime && (
            <div className="absolute top-2 right-2 bg-amazon-blue text-white text-xs px-2 py-1 rounded">
              Prime
            </div>
          )}
        </div>

        <h3 className="font-semibold text-sm mb-2 line-clamp-2 flex-grow">
          {product.name}
        </h3>

        <div className="flex items-center gap-2 mb-2">
          <div className="flex items-center">
            <span className="text-amazon text-sm">★</span>
            <span className="text-sm ml-1">{product.rating}</span>
          </div>
          <span className="text-gray-500 text-xs">({product.reviews})</span>
        </div>

        <div className="flex items-baseline gap-2 mb-3">
          <span className="text-2xl font-bold">${product.price}</span>
          {product.originalPrice && (
            <span className="text-gray-500 line-through text-sm">
              ${product.originalPrice}
            </span>
          )}
        </div>

        {product.inStock ? (
          <button
            onClick={handleAddToCart}
            className="w-full bg-amazon hover:bg-orange-600 text-white py-2 rounded transition font-semibold"
          >
            Add to Cart
          </button>
        ) : (
          <button
            disabled
            className="w-full bg-gray-300 text-gray-600 py-2 rounded cursor-not-allowed"
          >
            Out of Stock
          </button>
        )}
      </div>
    </Link>
  );
}
