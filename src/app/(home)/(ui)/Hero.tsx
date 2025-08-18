"use client";

import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";

import { AppLink } from "@/shared/ui/Button";
import { ImageSceleton } from "@/shared/ui/ImageSceleton";

const Hero = () => {
  const [isLoading, setLoading] = useState(true);

  return (
    <section className="section-container pb-8 sm:pb-12">
      <div className="flex flex-col items-center gap-6 md:flex-row md:items-start">
        <div className="w-full md:w-1/2">
          <h1 className="mb-3 text-2xl leading-snug font-extrabold sm:text-3xl sm:leading-10 lg:text-4xl lg:leading-[3rem]">
            Каталог освітлення для бізнесу та дому
          </h1>
          <p className="text-muted mb-4 text-sm sm:text-base lg:text-lg">
            Перевірені бренди, швидкі поставки, допомога у підборі. Трекові,
            вбудовані, вуличні, офісні рішення. Працюємо з роздрібом та оптом.
          </p>
          <div className="flex items-center gap-3">
            <AppLink title="Відкрити каталог" type="btn" href="#catalog">
              Відкрити каталог
            </AppLink>
          </div>
        </div>

        <div className="relative w-full md:w-1/2">
          {isLoading && (
            <ImageSceleton classname="rounded-2xl h-[240px] sm:h-[300px] md:h-[346px]" />
          )}
          <Image
            title="Освещение баннер"
            className={clsx(
              "border-line w-full rounded-2xl border border-solid transition-opacity duration-500",
              {
                "opacity-0": isLoading,
                "opacity-100": !isLoading,
              },
            )}
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
