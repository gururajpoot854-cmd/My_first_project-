'use client';

import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function AccountPage() {
  const { data: session } = useSession();
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut({ redirect: false });
    router.push('/');
    router.refresh();
  };
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Your Account</h1>
        <button
          onClick={handleSignOut}
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-2 rounded-lg font-semibold transition"
        >
          Sign Out
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
          <div className="text-4xl mb-4">📦</div>
          <h2 className="text-xl font-bold mb-2">Your Orders</h2>
          <p className="text-gray-600 mb-4">Track, return, or buy things again</p>
          <Link href="#" className="text-amazon-blue hover:underline">
            View orders →
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
          <div className="text-4xl mb-4">🔒</div>
          <h2 className="text-xl font-bold mb-2">Login & Security</h2>
          <p className="text-gray-600 mb-4">Edit login, name, and mobile number</p>
          <Link href="#" className="text-amazon-blue hover:underline">
            Manage settings →
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
          <div className="text-4xl mb-4">⭐</div>
          <h2 className="text-xl font-bold mb-2">Prime</h2>
          <p className="text-gray-600 mb-4">View benefits and payment settings</p>
          <Link href="#" className="text-amazon-blue hover:underline">
            Manage Prime →
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
          <div className="text-4xl mb-4">📍</div>
          <h2 className="text-xl font-bold mb-2">Your Addresses</h2>
          <p className="text-gray-600 mb-4">Edit addresses for orders and gifts</p>
          <Link href="#" className="text-amazon-blue hover:underline">
            Manage addresses →
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
          <div className="text-4xl mb-4">💳</div>
          <h2 className="text-xl font-bold mb-2">Payment Options</h2>
          <p className="text-gray-600 mb-4">Edit or add payment methods</p>
          <Link href="#" className="text-amazon-blue hover:underline">
            Manage payments →
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
          <div className="text-4xl mb-4">💬</div>
          <h2 className="text-xl font-bold mb-2">Contact Us</h2>
          <p className="text-gray-600 mb-4">Get help with your orders and account</p>
          <Link href="#" className="text-amazon-blue hover:underline">
            Get support →
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
          <div className="text-4xl mb-4">❤️</div>
          <h2 className="text-xl font-bold mb-2">Your Lists</h2>
          <p className="text-gray-600 mb-4">View and manage your wish lists</p>
          <Link href="#" className="text-amazon-blue hover:underline">
            View lists →
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
          <div className="text-4xl mb-4">🎁</div>
          <h2 className="text-xl font-bold mb-2">Gift Cards</h2>
          <p className="text-gray-600 mb-4">View balance or redeem a card</p>
          <Link href="#" className="text-amazon-blue hover:underline">
            Manage gift cards →
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
          <div className="text-4xl mb-4">🔔</div>
          <h2 className="text-xl font-bold mb-2">Your Messages</h2>
          <p className="text-gray-600 mb-4">View messages from Amazon</p>
          <Link href="#" className="text-amazon-blue hover:underline">
            View messages →
          </Link>
        </div>
      </div>

      <div className="mt-8 bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold mb-4">Account Information</h2>
        <div className="space-y-4">
          <div className="flex justify-between items-center border-b pb-4">
            <div>
              <h3 className="font-semibold">Name</h3>
              <p className="text-gray-600">{session?.user?.name || 'Not set'}</p>
            </div>
            <Link href="#" className="text-amazon-blue hover:underline">
              Edit
            </Link>
          </div>

          <div className="flex justify-between items-center border-b pb-4">
            <div>
              <h3 className="font-semibold">Email</h3>
              <p className="text-gray-600">{session?.user?.email || 'Not set'}</p>
            </div>
            <Link href="#" className="text-amazon-blue hover:underline">
              Edit
            </Link>
          </div>

          <div className="flex justify-between items-center border-b pb-4">
            <div>
              <h3 className="font-semibold">Phone Number</h3>
              <p className="text-gray-600">Not set</p>
            </div>
            <Link href="#" className="text-amazon-blue hover:underline">
              Add
            </Link>
          </div>

          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-semibold">Password</h3>
              <p className="text-gray-600">••••••••</p>
            </div>
            <Link href="#" className="text-amazon-blue hover:underline">
              Change
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
