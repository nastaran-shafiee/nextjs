import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <header className="bg-gray-400 flex items-center w-full h-20 justify-center">header</header>
        <div className="flex flex-1"> {children}</div>

        <footer className="bg-gray-400 flex items-center w-full h-20 justify-center">footer</footer>
      </body>
    </html>
  );
}
