// components/Hero.tsx
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="container mx-auto mt-4 rounded-3xl bg-zinc-300 px-4 md:px-8 py-10 md:py-16 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-10">
      {/* Left: text + search */}
      <div className="max-w-md flex flex-col gap-5">
        <p className='text-brand-purple text-3xl md:text-5xl'>
            LUMEN BOOKS
        </p>
        <span className="text-xs font-medium bg-white rounded-full px-3 py-1 w-fit text-zinc-600">
          We Are Still Running A Full Service Platform
        </span>

        <h1 className="text-3xl md:text-5xl font-bold leading-tight text-[grey]">
          Reading Is <span className="text-brand-purple">Fascinating</span>
        </h1>

        <p className="text-zinc-600">
          Discover your next favorite read, curated by independent sellers
          from every genre.
        </p>

        <form action="/books" className="flex items-center bg-white rounded-full px-2 py-2 shadow-sm">
          <input
            type="text"
            name="q"
            placeholder="Type here..."
            className="flex-1 px-4 py-2 outline-none bg-transparent text-sm text-muted"
          />
          <button
            type="submit"
            className="px-6 py-2 rounded-full bg-brand-purple text-white text-sm font-medium"
          >
            Search
          </button>
        </form>
      </div>

      {/* Right: illustration */}
      <div className="relative w-full max-w-sm h-56 sm:h-72 md:w-150 md:h-72 flex-shrink-0">
        <Image
          src="/illustrations/hero3.png"
          alt="Reading illustration"
          fill
          className="object-contain"
        />
      </div>
    </section>
  );
}