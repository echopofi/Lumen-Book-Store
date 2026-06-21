
import Image from "next/image";
import Link from "next/link";
import type { Book } from "@/lib/data";

export default function BookGrid({
  title,
  books,
}: {
  title: string;
  books: Book[];
}) {
  return (
    <section className="container mx-auto px-8 py-16">
      <h2 className="text-2xl font-semibold text-zinc-500 text-center mb-8">{title}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {books.map((book) => (
          <Link
            key={book.id}
            href={`/books/${book.slug}`}
            className="flex flex-col gap-2"
          >
            <div className="relative aspect-[2/3] bg-zinc-100 rounded-xl overflow-hidden">
              <Image
                src={book.coverImageUrl}
                alt={book.title}
                fill
                className="object-cover"
              />
            </div>
            <h3 className="font-semibold text-brand-purple text-sm mt-1">{book.title}</h3>
            <p className="text-xs text-zinc-500">{book.author}</p>
            <p className="text-sm font-semibold text-brand-purple">
              ${book.price.toFixed(2)}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}