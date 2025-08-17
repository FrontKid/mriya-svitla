import Image from "next/image";

import { EContacts } from "@/shared/lib/contacts";
import { AppLink } from "@/shared/ui/Button";
import { formatPhone } from "@/shared/lib/helpers";

const currentYear = new Date().getFullYear();

const Footer = () => (
  <footer id="contacts">
    <div className="section-container">
      <div className="card mb-13 grid grid-cols-[1fr_1fr] gap-4">
        <div className="flex flex-col justify-center">
          <h2 className="mb-3 text-2xl font-bold">Связаться с нами</h2>
          <ul className="mx-0 mt-2 mb-0 flex flex-col gap-4 p-0 text-blue-400">
            <li>
              <AppLink
                title="Номер телефона"
                className="before:content-['📞']"
                type="simple"
                href={`tel:${EContacts.PHONE_NUMBER}`}
              >
                {formatPhone(EContacts.PHONE_NUMBER)}
              </AppLink>
              &nbsp;|&nbsp;
              <AppLink
                title="Вайбер"
                type="simple"
                target="_blank"
                href={`viber://chat?number=${EContacts.PHONE_NUMBER}`}
              >
                Viber
              </AppLink>
            </li>
            <li>
              <AppLink
                title="Гугл почта"
                className="before:content-['✉️']"
                type="simple"
                href={`mailto:${EContacts.EMAIL}`}
              >
                {EContacts.EMAIL}
              </AppLink>
            </li>
            <li className="text-text">📍Одесса • Доставка по Украине и ЕС</li>
          </ul>
        </div>
        <div className="bg-card-product border-line grid min-h-[220px] place-items-center rounded-2xl border border-solid text-gray-400">
          <Image
            title="Домашнее освещение"
            className="rounded-2xl"
            src="/footer/footer.jpg"
            alt="footer light"
            width={600}
            height={400}
          />
        </div>
      </div>
    </div>

    <div className="before:bg-line relative py-7 text-center before:absolute before:top-0 before:left-0 before:h-[1px] before:w-full">
      <span className="before:content-['©']">{currentYear}</span>
      &nbsp;{EContacts.NAME} • Освещение. Все права защищены.
      <p className="text-[14px]">
        <AppLink
          title="modern icons"
          type="simple"
          target="_blank"
          href="https://www.flaticon.com/free-icons/modern"
        >
          Modern icons created by Freepik - Flaticon
        </AppLink>
      </p>
    </div>
  </footer>
);

export { Footer };
