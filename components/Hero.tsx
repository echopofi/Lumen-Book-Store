// components/Hero.tsx
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="mx-4 mt-4 rounded-3xl bg-zinc-100 px-8 py-16 flex flex-col md:flex-row items-center justify-between gap-12">
      {/* Left: text + search */}
      <div className="max-w-md flex flex-col gap-5">
        <span className="text-xs font-medium bg-white rounded-full px-3 py-1 w-fit text-zinc-600">
          We Are Still Running A Full Service Platform
        </span>

        <h1 className="text-5xl font-bold leading-tight text-[grey]">
          Reading Is <span className="text-brand-purple">Fascinating</span>
        </h1>

        <p className="text-zinc-600">
          Discover your next favorite read, curated by independent sellers
          from every genre.
        </p>

        <form className="flex items-center bg-white rounded-full px-2 py-2 shadow-sm">
          <input
            type="text"
            placeholder="Type here..."
            className="flex-1 px-4 py-2 outline-none bg-transparent text-sm"
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
      <div className="relative w-72 h-72 flex-shrink-0">
        <Image
          src="/illustrations/hero-img.png"
          alt="Reading illustration"
          fill
          className="object-contain"
        />
      </div>
    </section>
  );
}