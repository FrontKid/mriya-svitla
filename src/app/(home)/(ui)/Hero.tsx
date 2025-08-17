"use client";

import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";

import { AppLink } from "@\/shared/ui/Button";
import { EContacts } from "@/shared/lib/contacts";
import { ImageSceleton } from "@/shared/ui/ImageSceleton";

const Hero = () => {
  const [isLoading, setLoading] = useState(true);

  return (
    <section className="section-container pb-12">
      <div className="flex items-center gap-6">
        <div>
          <h1 className="text-title mb-2 leading-12 font-extrabold">
            Каталог освещения для бизнеса и дома
          </h1>
          <p className="text-muted mb-4">
            Проверенные бренды, быстрые поставки, помощь в подборе. Трековые,
            встраиваемые, уличные, офисные решения. Работаем c розницей и оптом.
          </p>
          <div className="flex items-center gap-3">
            <AppLink type="btn" href="#catalog">
              Открыть каталог
            </AppLink>
            <AppLink
              target="_blank"
              type="btn-outline"
              href={`https://wa.me/${EContacts.PHONE_NUMBER}`}
            >
              Написать в WhatsApp
            </AppLink>
          </div>
        </div>
        <div className="relative w-full">
          {isLoading && <ImageSceleton classname="rounded-2xl h-[346px]" />}
          <Image
            className={clsx("border-line rounded-2xl border border-solid", {
              "opacity-0": isLoading,
              "opacity-100": !isLoading,
            })}
            width={483}
            height={363}
            priority
            src="/hero/shop-place.jpg"
            alt="Освещение баннер"
            onLoad={() => setLoading(false)}
          />
        </div>
      </div>
    </section>
  );
};

export { Hero };
