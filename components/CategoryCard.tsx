import Link from 'next/link';
import Image from 'next/image';
import { Category } from '@/types';

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link href={`/products?category=${encodeURIComponent(category.name)}`}>
      <div className="bg-white rounded-lg shadow hover:shadow-lg transition p-4">
        <h3 className="font-bold text-lg mb-3">{category.name}</h3>
        <div className="relative w-full h-48">
          <Image
            src={category.image}
            alt={category.name}
            fill
            className="object-cover rounded"
          />
        </div>
        <p className="mt-3 text-amazon-blue text-sm hover:underline">Shop now</p>
      </div>
    </Link>
  );
}
