import { Footer } from "./_components/footer/footer";
import { Header } from "./_components/header/header";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="rtl" className={`dark`}>
      <body className="min-h-screen grid grid-rows-[80px_1fr_auto] dark:bg-base-200 dark:text-base-content" >
        <Header />
        <div className="flex flex-1"> {children}</div>
        <Footer />
      </body>
    </html>
  );
}
