"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { FC } from "react";
import { useDebouncedCallback } from "use-debounce";

import { productCategoryConfig } from "@/features/selectCategory/model/productCategoryConfig";
import { ICategories } from "@/shared/lib/types/tCategories";
import { globalConfig } from "@/shared/lib/globalConfig";
import { updateQueryParam } from "@/shared/lib/helpers";

interface IProductCategoryProps {
  categories: ICategories[];
}

const ProductCategory: FC<IProductCategoryProps> = ({ categories }) => {
  const pathname = usePathname();
  const { replace } = useRouter();
  const searchParams = useSearchParams();

  const handleCategory = useDebouncedCallback((category: string) => {
    updateQueryParam(
      productCategoryConfig.PARAM_NAME,
      category,
      searchParams,
      replace,
      pathname,
    );
  }, globalConfig.DEBOUNCE_DELAY_MS);

  return (
    <select
      onChange={(e) => handleCategory(e.target.value)}
      className="field"
      defaultValue={searchParams
        .get(productCategoryConfig.PARAM_NAME)
        ?.toString()}
      id="category"
    >
      <option value="">Все товары</option>
      {categories.map(({ text, id }) => (
        <option key={id} value={id}>
          {text}
        </option>
      ))}
    </select>
  );
};

export { ProductCategory };
