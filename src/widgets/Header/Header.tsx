import Link from "next/link";

import { EContacts } from "@/shared/lib/contacts";
import { formatPhone } from "@/shared/lib/helpers";

const Header = () => {
  return (
    <header className="backdrop-saturate-header border-b-line border-solid; sticky top-0 z-5 border-b bg-white/10 backdrop-blur-sm">
      <div className="container flex items-center justify-between py-2.5">
        <Link href="#page-top" className="flex items-center gap-3">
          <div className="grid h-9 w-9 place-items-center rounded-xl bg-black font-extrabold text-white">
            OK
          </div>
          <div>
            <div className="text-lg font-extrabold">
              Освещение • {EContacts.NAME}
            </div>
            <div className="text-muted text-xs">Feron • Linef • LeviStella</div>
          </div>
        </Link>
        <nav className="flex items-center gap-4">
          <Link className="linkStyle" href="#catalog">
            Каталог
          </Link>
          <Link className="linkStyle" href="#services">
            Услуги
          </Link>
          <Link className="linkStyle" href="#contacts">
            Контакты
          </Link>
          <Link
            className="border-text rounded-xl border border-solid px-3 py-2 font-bold"
            href={`tel:${EContacts.PHONE_NUMBER}`}
          >
            {formatPhone(EContacts.PHONE_NUMBER)}
          </Link>
        </nav>
        <button
          className="border-line hidden rounded-lg border border-solid bg-transparent px-2.5 py-1.5"
          id="navToggle"
          aria-label="Открыть меню"
        >
          ☰
        </button>
      </div>
    </header>
  );
};

export { Header };
