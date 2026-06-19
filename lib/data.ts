export type Book = {
  id: string;
  slug: string;
  title: string;
  author: string;
  price: number;
  description: string;
  coverImageUrl: string;
  category: string;
  createdAt: string;
  ratingsCount: number;
};

const books: Book[] = [
  {
    id: "1",
    slug: "the-silent-orbit",
    title: "The Silent Orbit",
    author: "Maren Cole",
    price: 18.99,
    description: "A lone engineer drifts through a dying space station, piecing together what happened to her crew.",
    coverImageUrl: "/covers/silent-orbit.jpg",
    category: "Sci-Fi",
    createdAt: "2026-01-12",
    ratingsCount: 214,
  },
  {
    id: "2",
    slug: "harbor-of-ash",
    title: "Harbor of Ash",
    author: "Femi Okonkwo",
    price: 15.5,
    description: "A coastal town rebuilds after a great fire, but old secrets resurface with the smoke.",
    coverImageUrl: "/covers/harbor-of-ash.jpg",
    category: "Drama",
    createdAt: "2025-11-03",
    ratingsCount: 89,
  },
  {
    id: "3",
    slug: "the-quiet-algorithm",
    title: "The Quiet Algorithm",
    author: "Priya Nadar",
    price: 21.0,
    description: "A reclusive programmer builds an AI that starts asking questions she can't answer.",
    coverImageUrl: "/covers/quiet-algorithm.jpg",
    category: "Thriller",
    createdAt: "2026-03-22",
    ratingsCount: 342,
  },
  {
    id: "4",
    slug: "fields-of-glass",
    title: "Fields of Glass",
    author: "Dele Martins",
    price: 12.75,
    description: "A farming community discovers their land sits atop something far older than crops.",
    coverImageUrl: "/covers/fields-of-glass.jpg",
    category: "Mystery",
    createdAt: "2025-09-17",
    ratingsCount: 156,
  },
];

export async function getFeaturedBooks(): Promise<Book[]> {
  await new Promise((r) => setTimeout(r, 500)); // simulate network latency
  return books;
}
export async function getCategories(): Promise<string[]> {
  await new Promise((r) => setTimeout(r, 500));
  const unique = Array.from(new Set(books.map((b) => b.category)));
  return unique;
}