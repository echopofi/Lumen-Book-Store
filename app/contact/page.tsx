"use client";

import { useActionState, useRef, useEffect } from "react";
import { sendContactMessage } from "./actions";

export default function ContactPage() {
  const [state, formAction, isPending] = useActionState(sendContactMessage, undefined);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state?.success) {
      formRef.current?.reset();
    }
  }, [state]);

  return (
    <div className="flex flex-1 items-center justify-center bg-zinc-50 font-sans px-4">
      <div className="w-full max-w-lg">
        <h1 className="text-3xl font-bold text-center mb-1 text-zinc-800">
          Contact Us
        </h1>
        <p className="text-sm text-zinc-500 text-center mb-8">
          We&apos;d love to hear from you
        </p>

        {state?.success ? (
          <div className="text-center">
            <p className="text-green-600 font-medium mb-4">
              Message sent successfully! We&apos;ll get back to you soon.
            </p>
            <button
              onClick={() => formRef.current?.reset()}
              className="px-6 py-2.5 rounded-full bg-brand-purple text-white text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form ref={formRef} action={formAction} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" className="text-sm font-medium text-zinc-700">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="px-4 py-2.5 rounded-xl border border-zinc-200 bg-white text-sm outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition"
                placeholder="Your name"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-sm font-medium text-zinc-700">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="px-4 py-2.5 rounded-xl border border-zinc-200 bg-white text-sm outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition"
                placeholder="you@example.com"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="text-sm font-medium text-zinc-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="px-4 py-2.5 rounded-xl border border-zinc-200 bg-white text-sm outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition resize-none"
                placeholder="What&apos;s on your mind?"
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
              {isPending ? "Sending…" : "Send Message"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
