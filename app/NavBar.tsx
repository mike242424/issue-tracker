import Link from 'next/link';
import { AiFillBug } from 'react-icons/ai';

const NavBar = () => {
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
            className="text-zinc-500 hover:text-zinc-800 transition-colors"
          >
            <Link href={item.href}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
