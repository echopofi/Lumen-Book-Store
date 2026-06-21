import Hero from "@/components/Hero";
import CategoryGrid from "@/components/CategoryGrid";
import BookGrid from "@/components/BookGrid";
import { getFeaturedBooks, getCategories } from "@/lib/data";


export const revalidate = 3600;

export default async function Home() {
  const books = await getFeaturedBooks();
  const categories = await getCategories();

  return (
    <div className="flex flex-col flex-1 items-center bg-[#ededed] font-sans ">
      {/* Hero section */}
      <Hero />
      <CategoryGrid categories={categories} />

      <BookGrid title="Featured Books" books={books} />
    </div>
  );
}