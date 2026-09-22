import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link href="/" className="navbar__brand">Daily Comfy Finds</Link>
      <div className="navbar__links">
        <Link href="/about">About</Link>
        <Link href="/stores">Stores</Link>
        <Link href="/admin">Admin</Link>
        <Link href="/login">Login</Link>
      </div>
    </nav>
  );
}
