import Link from "next/link";
import Image from "next/image";

const categoryImage: Record<string, string> = {
  "Sci-Fi": "/illustrations/scifi-book.webp",
  Drama: "/illustrations/drama.webp",
  Thriller: "/illustrations/thriller.webp",
  Mystery: "/illustrations/mystery.webp",
};

export default function CategoryGrid({ categories }: { categories: string[] }) {
  return (
    <section className="container mx-auto mt-6 bg-zinc-100 rounded-3xl px-4 md:px-8 py-10 md:py-16">
      <h2 className="text-2xl font-semibold text-center mb-10 text-zinc-500">Shop By Category</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {categories.map((category) => (
          <Link
            key={category}
            href={`/books?category=${encodeURIComponent(category)}`}
            className="bg-white rounded-2xl overflow-hidden hover:shadow-md transition-shadow p-2"
          >
            <div className="relative h-24 md:h-32 w-full">
              <Image
                src={categoryImage[category] || ""}
                alt={category}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <span className="font-semibold text-brand-purple">{category}</span>
              <span className="text-sm text-zinc-500 ml-2">Shop Now</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
