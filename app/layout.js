import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'My Demo Blog',
  description: 'Next.js + Tailwind demo blog',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-gray-800">
        <header className="bg-white shadow-sm">
          <div className="max-w-3xl mx-auto p-4 flex justify-between">
            <Link href="/" className="text-xl font-bold text-blue-600">MyBlog</Link>
            <Link href="/about" className="text-sm text-gray-600">About</Link>
          </div>
        </header>
        <main className="max-w-3xl mx-auto p-6">{children}</main>
        <footer className="text-center p-6 text-sm text-gray-500">
          © {new Date().getFullYear()} MyBlog
        </footer>
      </body>
    </html>
  );
}
