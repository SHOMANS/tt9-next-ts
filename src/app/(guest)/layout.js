'use client';
import Link from 'next/link';
import { useThemeContext } from '@/contexts/themeContext';

export default function RootLayout({ children }) {
  const { toggleTheme } = useThemeContext();
  return (
    <>
      <header>
        <h2>Guest layout</h2>
        <nav>
          <ul>
            <li>
              <Link href='/'>Home</Link>
            </li>
            <li>
              <Link href='/about'>About</Link>
            </li>
            <li>
              <Link href='/login'>Login</Link>
            </li>
          </ul>
        </nav>
        <button onClick={toggleTheme}>Toggle theme</button>
      </header>
      <div style={{ margin: '0 auto', width: '90%', padding: 20 }}>
        {children}
      </div>

      <footer>
        <p>© 2023</p>
      </footer>
    </>
  );
}
