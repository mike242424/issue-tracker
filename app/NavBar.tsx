'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import classNames from 'classnames';
import { AiFillBug } from 'react-icons/ai';

const NavBar = () => {
  const pathname = usePathname();

  const listItems = [
    { name: 'Dashboard', href: '/' },
    { name: 'Issues', href: '/issues' },
  ];
  return (
    <nav className="flex space-x-6 border-b px-5 h-14 items-center mb-5">
      <Link href="/">
        <AiFillBug />
      </Link>
      <ul className="flex space-x-6">
        {listItems.map((item) => (
          <li
            key={item.href}
            className={classNames({
              'text-zinc-900': item.href === pathname,
              'text-zinc-500': item.href !== pathname,
              'hover:text-zinc-800 transition-colors': true,
            })}
          >
            <Link href={item.href}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
