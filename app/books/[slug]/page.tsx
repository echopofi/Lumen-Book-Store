import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import type { Metadata } from "next";
import { getAllSlugs, getBookBySlug, getRecommendedBooks } from "@/lib/data";
import BuyButton from "@/components/BuyButton";

export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const book = await getBookBySlug(slug);
  if (!book) return {};
  return {
    title: `${book.title} — Lumen Books`,
    description: book.description,
    openGraph: {
      title: book.title,
      description: book.description,
      images: [{ url: book.coverImageUrl }],
    },
  };
}

async function RecommendedSection({ slug }: { slug: string }) {
  const recommended = await getRecommendedBooks(slug);
  return (
    <section className="mt-16">
      <h2 className="text-2xl font-semibold mb-6 text-muted">Recommended for You</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
        {recommended.map((book) => (
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
            <h3 className="font-semibold text-sm mt-1 text-muted">{book.title}</h3>
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

function RecommendedSkeleton() {
  return (
    <section className="mt-16">
      <h2 className="text-2xl font-semibold mb-6 ">Recommended for You</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex flex-col gap-2 animate-pulse">
            <div className="relative aspect-[2/3] bg-zinc-200 rounded-xl" />
            <div className="h-4 bg-zinc-200 rounded w-3/4" />
            <div className="h-3 bg-zinc-200 rounded w-1/2" />
            <div className="h-4 bg-zinc-200 rounded w-1/3" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default async function BookPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const book = await getBookBySlug(slug);
  if (!book) notFound();

  return (
    <div className="flex flex-col flex-1 items-center bg-zinc-50 font-sans">
      <div className="w-full max-w-5xl px-6 py-10">
        <Link
          href="/books"
          className="text-sm text-zinc-500 hover:text-brand-purple transition-colors mb-6 inline-block"
        >
          &larr; Back to catalog
        </Link>

        <div className="flex flex-col sm:flex-row gap-10">
          <div className="relative w-full sm:w-80 aspect-[2/3] bg-zinc-100 rounded-2xl overflow-hidden flex-shrink-0">
            <Image
              src={book.coverImageUrl}
              alt={book.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="flex flex-col gap-4 flex-1">
            <p className="text-xs font-medium text-brand-purple uppercase tracking-wider">
              {book.category}
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold text-muted">{book.title}</h1>
            <p className="text-zinc-500">by {book.author}</p>
            <p className="text-2xl font-semibold text-brand-purple">
              ${book.price.toFixed(2)}
            </p>
            <BuyButton />
            <p className="text-zinc-600 leading-relaxed">{book.description}</p>
          </div>
        </div>

        <Suspense fallback={<RecommendedSkeleton />}>
          <RecommendedSection slug={slug} />
        </Suspense>
      </div>
    </div>
  );
}
