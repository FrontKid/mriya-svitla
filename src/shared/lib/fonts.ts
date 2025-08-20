import { Inter, Syne } from "next/font/google";

const inter = Inter({
  subsets: ["cyrillic", "latin"],
  display: "swap",
  weight: ["400", "700", "800"],
});

const syne = Syne({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700", "800"],
});

export { inter, syne };
