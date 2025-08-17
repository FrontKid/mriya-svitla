"use client";

import { useQueryState } from "nuqs";

import { brandConfig } from "../../model/brandConfig";

import { updateQueryParam } from "@/shared/lib/helpers";

const brandCatigory = [{ id: "1", name: "Feron", slug: "feron" }];

const ProductBrand = () => {
  const [brand, setBrand] = useQueryState(brandConfig.PARAM_NAME);

  const handleBrand = (brand: string) => {
    updateQueryParam(brand, setBrand);
  };

  return (
    <select
      value={brand ?? ""}
      onChange={(e) => handleBrand(e.target.value)}
      className="field"
    >
      <option value="">Все бренды</option>
      {brandCatigory.map((brand) => (
        <option key={brand.id} value={brand.slug}>
          {brand.name}
        </option>
      ))}
    </select>
  );
};

export { ProductBrand };
