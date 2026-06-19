"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

type SearchResult = {
  slug: string;
  title: string;
  author: string;
  price: number;
};

export default function LiveSearch() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [open, setOpen] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      setOpen(false);
      return;
    }

    clearTimeout(timer.current);
    timer.current = setTimeout(async () => {
      const res = await fetch(`/api/books?q=${encodeURIComponent(query)}`);
      const data = await res.json();
      setResults(data);
      setOpen(data.length > 0);
    }, 300);

    return () => clearTimeout(timer.current);
  }, [query]);

  return (
    <div className="relative mb-6 max-w-md">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search books…"
        className="w-full px-5 py-2.5 rounded-full border border-zinc-200 bg-white text-sm outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition"
      />
      {open && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-2xl border border-zinc-200 shadow-md overflow-hidden z-10">
          {results.map((book) => (
            <Link
              key={book.slug}
              href={`/books/${book.slug}`}
              onClick={() => {
                setOpen(false);
                setQuery("");
              }}
              className="flex items-center justify-between px-4 py-3 text-sm hover:bg-zinc-50 transition-colors"
            >
              <div>
                <span className="font-medium">{book.title}</span>
                <span className="text-zinc-500 ml-2">by {book.author}</span>
              </div>
              <span className="text-sm font-semibold text-brand-purple">
                ${book.price.toFixed(2)}
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
