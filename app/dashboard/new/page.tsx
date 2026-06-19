"use client";

import { useActionState } from "react";
import { createBook } from "./actions";

export default function NewBookPage() {
  const [state, formAction, isPending] = useActionState(createBook, undefined);

  return (
    <div className="flex flex-col flex-1 items-center bg-zinc-50 font-sans">
      <div className="w-full max-w-lg px-6 py-10">
        <h1 className="text-2xl font-bold mb-8">Add New Book</h1>

        <form action={formAction} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="title" className="text-sm font-medium text-zinc-700">
              Title *
            </label>
            <input
              id="title"
              name="title"
              type="text"
              required
              className="px-4 py-2.5 rounded-xl border border-zinc-200 bg-white text-sm outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="author" className="text-sm font-medium text-zinc-700">
              Author *
            </label>
            <input
              id="author"
              name="author"
              type="text"
              required
              className="px-4 py-2.5 rounded-xl border border-zinc-200 bg-white text-sm outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="price" className="text-sm font-medium text-zinc-700">
              Price * ($)
            </label>
            <input
              id="price"
              name="price"
              type="number"
              step="0.01"
              min="0"
              required
              className="px-4 py-2.5 rounded-xl border border-zinc-200 bg-white text-sm outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="slug" className="text-sm font-medium text-zinc-700">
              Slug * (e.g. my-new-book)
            </label>
            <input
              id="slug"
              name="slug"
              type="text"
              required
              className="px-4 py-2.5 rounded-xl border border-zinc-200 bg-white text-sm outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="category" className="text-sm font-medium text-zinc-700">
              Category
            </label>
            <select
              id="category"
              name="category"
              className="px-4 py-2.5 rounded-xl border border-zinc-200 bg-white text-sm outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition"
            >
              <option value="Sci-Fi">Sci-Fi</option>
              <option value="Drama">Drama</option>
              <option value="Thriller">Thriller</option>
              <option value="Mystery">Mystery</option>
              <option value="General">General</option>
            </select>
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="description" className="text-sm font-medium text-zinc-700">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              rows={3}
              className="px-4 py-2.5 rounded-xl border border-zinc-200 bg-white text-sm outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition resize-none"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="coverImageUrl" className="text-sm font-medium text-zinc-700">
              Cover Image URL
            </label>
            <input
              id="coverImageUrl"
              name="coverImageUrl"
              type="text"
              placeholder="/illustrations/orbit2.webp"
              className="px-4 py-2.5 rounded-xl border border-zinc-200 bg-white text-sm outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition"
            />
          </div>

          {state?.error && (
            <p className="text-sm text-red-500 text-center">{state.error}</p>
          )}

          <button
            type="submit"
            disabled={isPending}
            className="mt-2 px-6 py-2.5 rounded-full bg-brand-purple text-white text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            {isPending ? "Saving…" : "Save Book"}
          </button>
        </form>
      </div>
    </div>
  );
}
