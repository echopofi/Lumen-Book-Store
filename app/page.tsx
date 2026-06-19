import Image from "next/image";
import Link from "next/link";
import { getFeaturedBooks } from "@/lib/data";

export const revalidate = 3600;

export default async function Home() {
  const books = await getFeaturedBooks();

  return (
    <div className="flex flex-col flex-1 items-center bg-zinc-50 font-sans dark:bg-black">
      {/* Hero section */}
      <section className="flex flex-col items-center text-center gap-4 py-20 px-6">
        <h1 className="text-4xl sm:text-5xl font-bold">Lumen Books</h1>
        <p className="text-zinc-600 dark:text-zinc-400 max-w-md">
          Discover your next favorite read, curated by independent sellers.
        </p>
        <Link
          href="/books"
          className="mt-2 px-6 py-3 rounded-full bg-black text-white dark:bg-white dark:text-black font-medium"
        >
          Browse the catalog
        </Link>
      </section>

      {/* Featured books */}
      <section className="w-full max-w-5xl px-6 pb-20">
        <h2 className="text-2xl font-semibold mb-6">Featured Books</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {books.map((book) => (
            <Link key={book.id} href={`/books/${book.slug}`} className="flex flex-col gap-2">
              <div className="relative aspect-[2/3] bg-zinc-200 dark:bg-zinc-800 rounded-md overflow-hidden">
                <Image
                  src={book.coverImageUrl}
                  alt={book.title}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-medium text-sm">{book.title}</h3>
              <p className="text-xs text-zinc-500">{book.author}</p>
              <p className="text-sm font-semibold">${book.price.toFixed(2)}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}