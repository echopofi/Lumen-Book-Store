'use client';

import { useState } from 'react';

export default function BuyButton() {
  const [clicked, setClicked] = useState(false);

  return (
    <div>
      <button
        onClick={() => setClicked(true)}
        className="px-6 py-3 rounded-full bg-brand-purple text-white text-sm font-medium hover:opacity-90 transition"
      >
        Buy Now
      </button>
      {clicked && (
        <p className="text-sm text-zinc-500 mt-2">Coming soon!</p>
      )}
    </div>
  );
}
