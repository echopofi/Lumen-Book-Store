import Link from "next/link";
import Image from "next/image";
import LiveSearch from "@/components/LiveSearch";
import { getBooks, getCategories } from "@/lib/data";

const categories = ["All", "Sci-Fi", "Drama", "Thriller", "Mystery"];

const sortOptions = [
  { label: "Default", value: "" },
  { label: "Price", value: "price" },
  { label: "Newest", value: "newest" },
];

export default async function BooksPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string; sort?: string; q?: string }>;
}) {
  const { category, sort, q } = await searchParams;
  const validSort = sort === "price" || sort === "newest" ? sort : undefined;
  const books = await getBooks({ category, sort: validSort, q});

  return (
    <div className="flex flex-col flex-1 items-center bg-zinc-50 font-sans">
      <div className="w-full max-w-5xl px-6 py-10">
        <h1 className="text-3xl font-bold mb-6">Catalog</h1>

        <LiveSearch />

        {/* Category filters */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="text-sm text-zinc-500 mr-1 self-center">Category:</span>
          {categories.map((cat) => {
            const href =
              cat === "All"
                ? `/books${sort ? `?sort=${sort}` : ""}`
                : `/books?category=${encodeURIComponent(cat)}${sort ? `&sort=${sort}` : ""}`;
            const isActive = cat === "All" ? !category : category === cat;
            return (
              <Link
                key={cat}
                href={href}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-brand-purple text-white"
                    : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"
                }`}
              >
                {cat}
              </Link>
            );
          })}
        </div>

        {/* Sort filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          <span className="text-sm text-zinc-500 mr-1 self-center">Sort:</span>
          {sortOptions.map((opt) => {
            const href =
              opt.value === ""
                ? `/books${category ? `?category=${encodeURIComponent(category)}` : ""}`
                : `/books?sort=${opt.value}${category ? `&category=${encodeURIComponent(category)}` : ""}`;
            const isActive = opt.value === "" ? !sort : sort === opt.value;
            return (
              <Link
                key={opt.value}
                href={href}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-brand-purple text-white"
                    : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"
                }`}
              >
                {opt.label}
              </Link>
            );
          })}
        </div>

        {/* Results */}
        {books.length === 0 ? (
          <p className="text-zinc-500 text-center py-20">No books found</p>
        ) : (
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
                <h3 className="font-semibold text-sm mt-1">{book.title}</h3>
                <p className="text-xs text-zinc-500">{book.author}</p>
                <p className="text-sm font-semibold text-brand-purple">
                  ${book.price.toFixed(2)}
                </p>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
