'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/', label: 'Home' },
  { href: '/books', label: 'Shop' },
  { href: '/contact', label: 'Contact' },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="mx-4 flex items-center justify-between px-8 py-4 bg-white rounded-3xl">
      <span className="font-bold text-lg"><img src="./covers/logo.png" alt="logo" /></span>

      <div className="flex gap-8">
        {links.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={
                isActive
                  ? 'text-brand-purple font-semibold'
                  : 'text-zinc-600 hover:text-zinc-900'
              }
            >
              {link.label}
            </Link>
          );
        })}
      </div>

      <div className="flex items-center gap-3">
        <Link
          href="/login"
          className="px-4 py-2 rounded-full bg-brand-purple text-white text-sm font-medium"
        >
          Login
        </Link>
      </div>
    </nav>
  );
}