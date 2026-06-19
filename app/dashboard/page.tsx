import Link from "next/link";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { getFeaturedBooks } from "@/lib/data";

export default async function DashboardPage() {
  const cookieStore = await cookies();
  const authCookie = cookieStore.get("auth");
  if (!authCookie) redirect("/login");

  const books = await getFeaturedBooks();

  async function logout() {
    "use server";
    const c = await cookies();
    c.set("auth", "", { httpOnly: true, path: "/", maxAge: 0 });
    redirect("/login");
  }

  return (
    <div className="flex flex-col flex-1 items-center bg-zinc-50 font-sans">
      <div className="w-full max-w-5xl px-6 py-10">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <p className="text-sm text-zinc-500 mt-1">Welcome back, seller</p>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/dashboard/new"
              className="px-5 py-2.5 rounded-full bg-brand-purple text-white text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Add New Book
            </Link>
            <form action={logout}>
              <button
                type="submit"
                className="text-sm text-zinc-500 hover:text-red-500 transition-colors"
              >
                Logout
              </button>
            </form>
          </div>
        </div>

        <div className="bg-white rounded-3xl overflow-hidden border border-zinc-100">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-zinc-50 text-left text-zinc-500 text-xs uppercase tracking-wider">
                <th className="px-6 py-4 font-medium">Title</th>
                <th className="px-6 py-4 font-medium">Category</th>
                <th className="px-6 py-4 font-medium">Price</th>
                <th className="px-6 py-4 font-medium">Added</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100">
              {books.map((book) => (
                <tr key={book.id} className="hover:bg-zinc-50 transition-colors">
                  <td className="px-6 py-4">
                    <Link
                      href={`/books/${book.slug}`}
                      className="font-medium text-brand-purple hover:underline"
                    >
                      {book.title}
                    </Link>
                  </td>
                  <td className="px-6 py-4 text-zinc-600">{book.category}</td>
                  <td className="px-6 py-4 font-semibold">
                    ${book.price.toFixed(2)}
                  </td>
                  <td className="px-6 py-4 text-zinc-500">
                    {new Date(book.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
