import Link from "next/link";

export default function Footer() {
  return (
    <footer className="container mx-auto bg-zinc-100 rounded-3xl px-4 md:px-8 py-10 md:py-12">
      <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8">
        <div className="col-span-2 sm:col-span-1">
          <span className="font-bold text-lg text-brand-purple">Lumen Books</span>
          <p className="text-sm text-zinc-600 mt-2 leading-relaxed">
            Your next favorite read is just a click away.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-sm mb-3 text-brand-purple">Shop</h3>
          <div className="flex flex-col gap-2 text-sm text-zinc-600">
            <Link href="/books" className="hover:text-brand-purple transition-colors">
              All Books
            </Link>
            <Link href="/books?category=Sci-Fi" className="hover:text-brand-purple transition-colors">
              Sci-Fi
            </Link>
            <Link href="/books?category=Drama" className="hover:text-brand-purple transition-colors">
              Drama
            </Link>
            <Link href="/books?category=Thriller" className="hover:text-brand-purple transition-colors">
              Thriller
            </Link>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-sm mb-3 text-brand-purple">Support</h3>
          <div className="flex flex-col gap-2 text-sm text-zinc-600">
            <Link href="/contact" className="hover:text-brand-purple transition-colors">
              Contact
            </Link>
            <Link href="/faq" className="hover:text-brand-purple transition-colors">
              FAQ
            </Link>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-sm mb-3 text-brand-purple">Account</h3>
          <div className="flex flex-col gap-2 text-sm text-zinc-600">
            <Link href="/login" className="hover:text-brand-purple transition-colors">
              Login
            </Link>
            <Link href="/dashboard" className="hover:text-brand-purple transition-colors">
              Dashboard
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto mt-8 pt-6 border-t border-zinc-200">
        <p className="text-xs text-zinc-500 text-center">
          &copy; {new Date().getFullYear()} Lumen Books. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
