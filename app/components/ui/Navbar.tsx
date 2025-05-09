import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-100">
      {/* Logo */}
      <div className="flex items-center">
        <Image
          src="/skulemate.png"
          alt="Skulemate Logo"
          width={30}
          height={30}
        />
      </div>

      {/* Navbar Links */}
      <ul className="flex space-x-6">
        <li>
          <Link href="/about" className="text-sm font-bold hover:text-blue-500">
            Tentang
          </Link>
        </li>
        <li>
          <Link
            href="/beasiswa"
            className="text-sm font-bold hover:text-blue-500"
          >
            Cari Beasiswa
          </Link>
        </li>
        <li>
          <Link href="/faq" className="text-sm font-bold hover:text-blue-500">
            Faq
          </Link>
        </li>
        <li>
          <Link
            href="/register-scholarship"
            className="text-sm font-bold hover:text-blue-500"
          >
            Daftar Beasiswa
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
