import StoreProvider from "@/app/providers/StoreProvider";
import { Header, Footer } from "@/widgets";
import { inter } from "@/shared/lib/fonts";
import "@/app/globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth" lang="en">
      <body id="page-top" className={`${inter.className} bg-bg`}>
        <Header />
        <StoreProvider>{children}</StoreProvider>
        <Footer />
      </body>
    </html>
  );
}
