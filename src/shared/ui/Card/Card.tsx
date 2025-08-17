import { FC, useState } from "react";
import Image from "next/image";
import clsx from "clsx";

import { ImageSceleton } from "../ImageSceleton";
import { Tag } from "../Tag";

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
        {loading && <ImageSceleton />}
        <Image
          title={name}
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
          loading="lazy"
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
        {power && <Tag tagName={power} />}
        {colorTemperature && <Tag tagName={colorTemperature} />}
        {socket && <Tag tagName={socket} />}
        {voltage && <Tag tagName={voltage} />}
      </div>
      <span className="text-lg font-extrabold">{`${price} \u20B4`}</span>
      <div className="flex items-center gap-3">
        <AppLink
          title="Заказать"
          type="btn"
          className="flex-2 text-center"
          href={`viber://chat?number=${EContacts.PHONE_NUMBER}`}
        >
          {available === "false" ? "Узнать о наличии" : "Заказать"}
        </AppLink>
      </div>
    </li>
  );
};

export { Card };
