export default function RootLoading() {
  return (
    <div className="flex flex-1 items-center justify-center bg-zinc-50">
      <div className="flex flex-col items-center gap-3">
        <div className="h-8 w-8 rounded-full border-2 border-brand-purple border-t-transparent animate-spin" />
        <p className="text-sm text-zinc-500">Loading…</p>
      </div>
    </div>
  );
}
