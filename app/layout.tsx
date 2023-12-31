import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@radix-ui/themes/styles.css';
import './globals.css';
import './theme-config.css';
import NavBar from './NavBar';
import { Theme, ThemePanel } from '@radix-ui/themes';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Issue Tracker App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Theme appearance="light" accentColor="teal">
          <NavBar />
          {/* <ThemePanel/> */}
          <main className="p-5">{children}</main>
        </Theme>
      </body>
    </html>
  );
}
