'use client';

import { useCart } from '@/lib/CartContext';
import Image from 'next/image';
import Link from 'next/link';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, getCartTotal } = useCart();

  if (cart.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow p-8 text-center">
          <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
          <p className="text-gray-600 mb-6">Add some products to get started!</p>
          <Link
            href="/products"
            className="inline-block bg-amazon hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow">
            {cart.map((item) => (
              <div key={item.product.id} className="border-b last:border-b-0 p-6">
                <div className="flex gap-4">
                  <div className="relative w-32 h-32 flex-shrink-0">
                    <Image
                      src={item.product.image}
                      alt={item.product.name}
                      fill
                      className="object-cover rounded"
                    />
                  </div>

                  <div className="flex-1">
                    <Link
                      href={`/product/${item.product.id}`}
                      className="text-lg font-semibold hover:text-amazon-blue"
                    >
                      {item.product.name}
                    </Link>

                    {item.product.inStock ? (
                      <p className="text-green-600 text-sm mt-1">In Stock</p>
                    ) : (
                      <p className="text-red-600 text-sm mt-1">Out of Stock</p>
                    )}

                    {item.product.prime && (
                      <div className="flex items-center gap-2 mt-2">
                        <span className="bg-amazon-blue text-white text-xs px-2 py-1 rounded">
                          Prime
                        </span>
                        <span className="text-sm">FREE delivery</span>
                      </div>
                    )}

                    <div className="flex items-center gap-4 mt-4">
                      <div className="flex items-center gap-2">
                        <label className="text-sm font-semibold">Qty:</label>
                        <select
                          value={item.quantity}
                          onChange={(e) => updateQuantity(item.product.id, Number(e.target.value))}
                          className="border rounded px-3 py-1"
                        >
                          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                            <option key={num} value={num}>{num}</option>
                          ))}
                        </select>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        className="text-amazon-blue hover:underline text-sm"
                      >
                        Delete
                      </button>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="text-2xl font-bold">
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </p>
                    {item.product.originalPrice && (
                      <p className="text-gray-500 line-through text-sm">
                        ${(item.product.originalPrice * item.quantity).toFixed(2)}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow p-6 sticky top-4">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>

            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span>Subtotal ({cart.reduce((sum, item) => sum + item.quantity, 0)} items):</span>
                <span className="font-semibold">${getCartTotal().toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping:</span>
                <span className="text-green-600 font-semibold">FREE</span>
              </div>
            </div>

            <div className="border-t pt-4 mb-6">
              <div className="flex justify-between text-xl font-bold">
                <span>Total:</span>
                <span className="text-red-600">${getCartTotal().toFixed(2)}</span>
              </div>
            </div>

            <Link
              href="/checkout"
              className="block w-full bg-amazon hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition text-center mb-3"
            >
              Proceed to Checkout
            </Link>

            <Link
              href="/products"
              className="block w-full text-center text-amazon-blue hover:underline"
            >
              Continue Shopping
            </Link>

            <div className="mt-6 text-sm text-gray-600">
              <p className="mb-1">✓ Secure checkout</p>
              <p className="mb-1">✓ Free returns</p>
              <p>✓ Prime eligible items ship free</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
