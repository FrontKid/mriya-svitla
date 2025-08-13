import { Syne, Urbanist } from "next/font/google";

const syne = Syne({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700", "800"],
});

const urbanist = Urbanist({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600"],
});

export { syne, urbanist };
