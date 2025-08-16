import { FC, useState } from "react";
import Image from "next/image";
import clsx from "clsx";

import { IProduct } from "@/shared/lib/types/tProduct";
import { AppLink } from "@/shared/ui/Button";
import { EContacts } from "@/shared/lib/contacts";

type TCardProps = {
  product: IProduct;
};

const Card: FC<TCardProps> = ({ product }) => {
  const [loading, setLoading] = useState(true);
  const {
    image,
    vendor,
    name,
    power,
    price,
    colorTemperature,
    socket,
    voltage,
    available,
  } = product;

  const photoUrl = Array.isArray(image) ? image[0] : image;

  return (
    <li className="card-product">
      <div className="relative">
        {loading && (
          <div className="absolute inset-0 flex animate-pulse items-center justify-center bg-gray-200">
            {/* Спиннер */}
            <svg
              className="h-6 w-6 animate-spin text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              />
            </svg>
          </div>
        )}
        <Image
          className={clsx(
            "border-line bg-card-product flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-xl border border-solid",
            {
              "opacity-0": loading,
              "opacity-100": !loading,
            },
          )}
          alt={name}
          src={photoUrl}
          width={300}
          height={300}
          onLoad={() => setLoading(false)}
        />
        {available === "false" && !loading && (
          <>
            <div className="absolute inset-0 rounded-xl bg-black/50"></div>
            <span className="text-bg absolute top-1/2 left-1/2 -translate-1/2 font-bold">
              Нет в наличии
            </span>
          </>
        )}
      </div>
      <span className="text-muted text-md">{vendor}</span>
      <h2 className="text-subtitle m-0 font-bold">{name}</h2>
      <div className="flex flex-wrap gap-1.5">
        {power && (
          <span className="bg-card-product border-line rounded-[10px] border border-solid px-2 py-0.5 text-xs text-gray-700">
            {power}
          </span>
        )}
        {colorTemperature && (
          <span className="bg-card-product border-line rounded-[10px] border border-solid px-2 py-0.5 text-xs text-gray-700">
            {colorTemperature}
          </span>
        )}

        {socket && (
          <span className="bg-card-product border-line rounded-[10px] border border-solid px-2 py-0.5 text-xs text-gray-700">
            {socket}
          </span>
        )}

        {voltage && (
          <span className="bg-card-product border-line rounded-[10px] border border-solid px-2 py-0.5 text-xs text-gray-700">
            {voltage}
          </span>
        )}
      </div>
      <span className="text-lg font-extrabold">{`${price} \u20B4`}</span>
      <div className="flex items-center gap-3">
        <AppLink
          type="btn"
          className="flex-2 text-center"
          href={`viber://${EContacts.PHONE_NUMBER}`}
        >
          {available === "false" ? "Узнать о наличии" : "Запросить цену"}
        </AppLink>
        <AppLink
          className="flex-1 text-center"
          href={`https://wa.me/${EContacts.PHONE_NUMBER}`}
          type="btn-outline"
          target="_blank"
        >
          WhatsApp
        </AppLink>
      </div>
    </li>
  );
};

export { Card };
