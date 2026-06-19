export default function BooksLoading() {
  return (
    <div className="flex flex-col flex-1 items-center bg-zinc-50 font-sans">
      <div className="w-full max-w-5xl px-6 py-10 animate-pulse">
        <div className="h-9 bg-zinc-200 rounded w-32 mb-8" />

        <div className="flex gap-2 mb-4">
          <div className="h-7 bg-zinc-200 rounded-full w-16" />
          <div className="h-7 bg-zinc-200 rounded-full w-20" />
          <div className="h-7 bg-zinc-200 rounded-full w-16" />
          <div className="h-7 bg-zinc-200 rounded-full w-24" />
          <div className="h-7 bg-zinc-200 rounded-full w-16" />
        </div>

        <div className="flex gap-2 mb-8">
          <div className="h-7 bg-zinc-200 rounded-full w-20" />
          <div className="h-7 bg-zinc-200 rounded-full w-16" />
          <div className="h-7 bg-zinc-200 rounded-full w-20" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex flex-col gap-2">
              <div className="aspect-[2/3] bg-zinc-200 rounded-xl" />
              <div className="h-4 bg-zinc-200 rounded w-3/4" />
              <div className="h-3 bg-zinc-200 rounded w-1/2" />
              <div className="h-4 bg-zinc-200 rounded w-1/3" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
