'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/', label: 'Home' },
  { href: '/books', label: 'Books' },
  { href: '/login', label: 'Login' },
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/contact', label: 'Contact' },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav>
      {links.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            style={{ fontWeight: isActive ? 'bold' : 'normal' }}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}