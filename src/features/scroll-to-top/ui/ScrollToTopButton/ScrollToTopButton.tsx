"use client";
import { useEffect, useState } from "react";
import clsx from "clsx";

import { syne } from "@/shared/lib/fonts";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {visible && (
        <button
          className={clsx(syne.className, "button-up")}
          onClick={scrollToTop}
        >
          <svg
            className="absolute top-2 right-1/2 translate-x-1/2"
            width="30"
            height="31"
            viewBox="0 0 22 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.3346 22.1663L12.3346 5.93967L19.788 13.393L21.668 11.4997L11.0013 0.833008L0.334635 11.4997L2.21463 13.3797L9.66797 5.93967L9.66797 22.1663H12.3346Z"
              fill="#202020"
            />
          </svg>
          <span className="absolute right-1/2 bottom-0 translate-x-1/2">
            Up
          </span>
        </button>
      )}
    </>
  );
};

export { ScrollToTopButton };
