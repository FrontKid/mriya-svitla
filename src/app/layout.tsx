import StoreProvider from "@/app/providers/StoreProvider";
import { syne } from "@/shared/lib/fonts";
import "@/app/globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={syne.className}>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
