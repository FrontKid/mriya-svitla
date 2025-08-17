"use client";

import { useQueryState } from "nuqs";

import { brandConfig } from "../../model/brandConfig";
import { brandCatigory } from "../../model/brandCategory";

import { updateQueryParam } from "@/shared/lib/helpers";

const ProductBrand = () => {
  const [brand, setBrand] = useQueryState(brandConfig.PARAM_NAME);

  const handleBrand = (brand: string) => {
    updateQueryParam(brand, setBrand);
  };

  return (
    <select
      onChange={(e) => handleBrand(e.target.value)}
      className="field"
      value={brand ?? ""}
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
