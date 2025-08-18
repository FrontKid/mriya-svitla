"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import clsx from "clsx";

import { EContacts } from "@/shared/lib/contacts";
import { formatPhone } from "@/shared/lib/helpers";
import { AppLink } from "@/shared/ui/Button";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  return (
    <>
      <header className="border-line sticky top-0 z-50 border-b border-solid bg-white/80 backdrop-blur-sm backdrop-saturate-150">
        <div className="container flex items-center justify-between py-2.5">
          <Link
            href="#page-top"
            className={clsx("flex items-center gap-3", {
              hidden: isOpen,
            })}
          >
            <div className="grid h-9 w-9 place-items-center rounded-xl bg-black font-extrabold text-white">
              OK
            </div>
            <div>
              <div className="text-base font-extrabold sm:text-lg">
                Освітлення • {EContacts.NAME}
              </div>
              <div className="text-muted text-xs sm:text-sm">
                Feron • Linef • LeviStella
              </div>
            </div>
          </Link>

          <nav>
            <ul className="hidden items-center gap-4 md:flex lg:gap-6">
              <li>
                <Link title="Каталог" className="linkStyle" href="#catalog">
                  Каталог
                </Link>
              </li>
              <li>
                <Link title="Послуги" className="linkStyle" href="#services">
                  Послуги
                </Link>
              </li>
              <li>
                <Link title="Контакти" className="linkStyle" href="#contacts">
                  Контакти
                </Link>
              </li>
              <li>
                <AppLink
                  title="Номер телефону"
                  type="btn"
                  href={`tel:${EContacts.PHONE_NUMBER}`}
                >
                  {formatPhone(EContacts.PHONE_NUMBER)}
                </AppLink>
              </li>
            </ul>
          </nav>

          <button
            className="border-line cursor-pointer rounded-lg border border-solid bg-transparent px-2.5 py-1.5 md:hidden"
            onClick={() => setIsOpen(true)}
            aria-label="Відкрити меню"
          >
            ☰
          </button>
        </div>
      </header>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm md:hidden">
          <div className="absolute inset-0" onClick={() => setIsOpen(false)} />

          <div className="relative ml-auto flex h-full w-4/5 max-w-xs flex-col bg-white px-5 pt-3 shadow-xl">
            <button
              className="absolute top-3 right-4 mb-6 cursor-pointer p-1 text-2xl"
              onClick={() => setIsOpen(false)}
              aria-label="Закрыть меню"
            >
              ✖
            </button>

            <Link
              title="Освітлення • Oleksandr"
              href="#page-top"
              className="mb-3 flex flex-col gap-3"
              onClick={() => setIsOpen(false)}
            >
              <div className="grid h-9 w-9 place-items-center rounded-xl bg-black font-extrabold text-white">
                OK
              </div>
              <div>
                <div className="text-base font-extrabold sm:text-lg">
                  Освітлення • {EContacts.NAME}
                </div>
                <div className="text-muted text-xs sm:text-sm">
                  Feron • Linef • LeviStella
                </div>
              </div>
            </Link>

            <nav>
              <ul className="flex flex-col gap-4">
                <li>
                  <Link
                    title="Каталог"
                    className="text-lg font-medium"
                    href="#catalog"
                    onClick={() => setIsOpen(false)}
                  >
                    Каталог
                  </Link>
                </li>
                <li>
                  <Link
                    title="Послуги"
                    className="text-lg font-medium"
                    href="#services"
                    onClick={() => setIsOpen(false)}
                  >
                    Послуги
                  </Link>
                </li>
                <li>
                  <Link
                    title="Контакти"
                    className="text-lg font-medium"
                    href="#contacts"
                    onClick={() => setIsOpen(false)}
                  >
                    Контакти
                  </Link>
                </li>

                <li>
                  <AppLink
                    type="btn"
                    title="Номер телефону"
                    href={`tel:${EContacts.PHONE_NUMBER}`}
                    onClick={() => setIsOpen(false)}
                    className="text-center"
                  >
                    {formatPhone(EContacts.PHONE_NUMBER)}
                  </AppLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export { Header };
