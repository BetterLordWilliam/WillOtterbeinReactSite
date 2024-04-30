import Link from "next/link";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <main>
          <nav>
            <Link href="/">
              Home
            </Link>
            <Link href="/notes">
              Notes
            </Link>
            <Link href="/contact">
              Contact
            </Link>
          </nav>
          {children}
        </main>
      </body>
    </html>
  );
}
