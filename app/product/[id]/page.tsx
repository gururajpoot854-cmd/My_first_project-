'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { products } from '@/lib/data';
import { useCart } from '@/lib/CartContext';
import { useState } from 'react';

export default function ProductDetailPage() {
  const params = useParams();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  const product = products.find(p => p.id === params.id);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow p-8 text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <Link href="/products" className="text-amazon-blue hover:underline">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-4">
        <Link href="/products" className="text-amazon-blue hover:underline">
          ← Back to Products
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="relative w-full h-96 mb-4">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover rounded"
              />
            </div>
          </div>

          <div>
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>

            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center">
                <span className="text-amazon text-xl">★</span>
                <span className="text-xl ml-1">{product.rating}</span>
              </div>
              <span className="text-amazon-blue hover:underline cursor-pointer">
                {product.reviews} ratings
              </span>
            </div>

            <div className="border-t border-b py-4 mb-4">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-3xl font-bold text-red-600">
                  ${product.price}
                </span>
                {product.originalPrice && (
                  <>
                    <span className="text-gray-500 line-through text-xl">
                      ${product.originalPrice}
                    </span>
                    <span className="text-red-600 font-semibold">
                      Save ${(product.originalPrice - product.price).toFixed(2)}
                    </span>
                  </>
                )}
              </div>
              {product.prime && (
                <div className="flex items-center gap-2">
                  <span className="bg-amazon-blue text-white text-sm px-3 py-1 rounded">
                    Prime
                  </span>
                  <span className="text-sm">FREE delivery</span>
                </div>
              )}
            </div>

            <div className="mb-6">
              <h3 className="font-bold mb-2">About this item</h3>
              <p className="text-gray-700 mb-4">{product.description}</p>
              <ul className="list-disc list-inside space-y-1">
                {product.features.map((feature, index) => (
                  <li key={index} className="text-gray-700">{feature}</li>
                ))}
              </ul>
            </div>

            <div className="border-t pt-6">
              <div className="mb-4">
                <label className="block font-semibold mb-2">Quantity:</label>
                <select
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className="border rounded px-4 py-2"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </select>
              </div>

              {product.inStock ? (
                <>
                  <button
                    onClick={handleAddToCart}
                    className="w-full bg-amazon hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition mb-2"
                  >
                    Add to Cart
                  </button>
                  {addedToCart && (
                    <p className="text-green-600 text-center font-semibold">
                      ✓ Added to cart!
                    </p>
                  )}
                  <Link
                    href="/cart"
                    className="block w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition text-center"
                  >
                    Buy Now
                  </Link>
                </>
              ) : (
                <button
                  disabled
                  className="w-full bg-gray-300 text-gray-600 py-3 rounded-lg cursor-not-allowed"
                >
                  Out of Stock
                </button>
              )}

              <div className="mt-4 text-sm text-gray-600">
                <p className="mb-1">✓ Secure transaction</p>
                <p className="mb-1">✓ Ships from Amazon</p>
                <p>✓ Sold by Amazon</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t pt-8">
          <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>
          <div className="space-y-4">
            <div className="border-b pb-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-amazon">★★★★★</span>
                <span className="font-semibold">Excellent product!</span>
              </div>
              <p className="text-sm text-gray-600 mb-2">Reviewed on October 15, 2024</p>
              <p className="text-gray-700">
                This product exceeded my expectations. Great quality and fast shipping!
              </p>
            </div>

            <div className="border-b pb-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-amazon">★★★★☆</span>
                <span className="font-semibold">Good value for money</span>
              </div>
              <p className="text-sm text-gray-600 mb-2">Reviewed on October 10, 2024</p>
              <p className="text-gray-700">
                Works as described. Would recommend to others.
              </p>
            </div>

            <div className="border-b pb-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-amazon">★★★★★</span>
                <span className="font-semibold">Love it!</span>
              </div>
              <p className="text-sm text-gray-600 mb-2">Reviewed on October 5, 2024</p>
              <p className="text-gray-700">
                Perfect! Exactly what I was looking for. Highly recommended.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
