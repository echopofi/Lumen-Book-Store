"use client";

import { useActionState } from "react";
import { login } from "./actions";

export default function LoginPage() {
  const [state, formAction, isPending] = useActionState(login, undefined);

  return (
    <div className="flex flex-1 items-center justify-center bg-zinc-50 font-sans">
      <div className="w-full max-w-sm mx-4">
        <h1 className="text-2xl font-bold text-center mb-1">
          Login to {process.env.NEXT_PUBLIC_SITE_NAME}
        </h1>
        <p className="text-sm text-zinc-500 text-center mb-8">
          Sign in to manage your book store
        </p>

        <form action={formAction} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="username" className="text-sm font-medium text-zinc-700">
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              required
              className="px-4 py-2.5 rounded-xl border border-zinc-200 bg-white text-sm outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition"
              placeholder="seller"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="password" className="text-sm font-medium text-zinc-700">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="px-4 py-2.5 rounded-xl border border-zinc-200 bg-white text-sm outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition"
              placeholder="••••••••"
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
            {isPending ? "Signing in…" : "Sign in"}
          </button>
        </form>
      </div>
    </div>
  );
}
