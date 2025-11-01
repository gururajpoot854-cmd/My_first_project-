import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-amazon-dark text-white mt-12">
      <div className="bg-amazon-light py-4 text-center hover:bg-opacity-80 transition cursor-pointer">
        <p className="text-sm">Back to top</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">Get to Know Us</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:underline">About Us</Link></li>
              <li><Link href="#" className="hover:underline">Careers</Link></li>
              <li><Link href="#" className="hover:underline">Press Releases</Link></li>
              <li><Link href="#" className="hover:underline">Amazon Science</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Make Money with Us</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:underline">Sell on Amazon</Link></li>
              <li><Link href="#" className="hover:underline">Become an Affiliate</Link></li>
              <li><Link href="#" className="hover:underline">Advertise Your Products</Link></li>
              <li><Link href="#" className="hover:underline">Self-Publish with Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Amazon Payment Products</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:underline">Amazon Business Card</Link></li>
              <li><Link href="#" className="hover:underline">Shop with Points</Link></li>
              <li><Link href="#" className="hover:underline">Reload Your Balance</Link></li>
              <li><Link href="#" className="hover:underline">Amazon Currency Converter</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Let Us Help You</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:underline">Your Account</Link></li>
              <li><Link href="#" className="hover:underline">Your Orders</Link></li>
              <li><Link href="#" className="hover:underline">Shipping Rates & Policies</Link></li>
              <li><Link href="#" className="hover:underline">Returns & Replacements</Link></li>
              <li><Link href="#" className="hover:underline">Help</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 py-6">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <Link href="/" className="text-xl font-bold hover:opacity-80 transition inline-block mb-4">
            <span className="text-white">amazon</span>
            <span className="text-amazon">.clone</span>
          </Link>
          <p className="text-sm text-gray-400">
            © 2024 Amazon Clone. This is a demo project for educational purposes.
          </p>
        </div>
      </div>
    </footer>
  );
}
