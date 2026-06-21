'use client';

import Image from 'next/image';
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
    <nav className="mx-4 flex items-center justify-between px-4 md:px-8 py-4 bg-white rounded-3xl">
      <span className="font-bold text-lg">
            <Image src="/covers/logo.png" alt="logo" width={40} height={40} />
          </span>

      <div className="flex gap-4 md:gap-8">
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