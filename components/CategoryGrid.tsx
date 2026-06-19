import Link from "next/link";
import Image from "next/image";

const categoryImage: Record<string, string> = {
  "Sci-Fi": "/covers/sci-fi.svg",
  Drama: "/covers/drama.svg",
  Thriller: "/covers/thriller.svg",
  Mystery: "/covers/mystery.svg",
};

export default function CategoryGrid({ categories }: { categories: string[] }) {
  return (
    <section className="container mx-auto bg-zinc-100 rounded-3xl px-8 py-16">
      <h2 className="text-2xl font-semibold text-center mb-10 text-zinc-500">Shop By Category</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {categories.map((category) => (
          <Link
            key={category}
            href={`/books?category=${encodeURIComponent(category)}`}
            className="bg-white rounded-2xl overflow-hidden hover:shadow-md transition-shadow p-2"
          >
            <div className="relative h-32 w-full">
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
