"use client";

import React, { FC } from "react";
import { useQueryState } from "nuqs";

import { productCategoryConfig } from "@/features/selectCategory/model/productCategoryConfig";
import { ICategories } from "@/shared/lib/types/tCategories";
import { updateQueryParam } from "@/shared/lib/helpers";

interface IProductCategoryProps {
  categories: ICategories[];
}

const ProductCategory: FC<IProductCategoryProps> = ({ categories }) => {
  const [category, setCategory] = useQueryState(
    productCategoryConfig.PARAM_NAME,
  );

  const handleCategory = (category: string) => {
    updateQueryParam(category, setCategory);
  };

  return (
    <select
      onChange={(e) => handleCategory(e.target.value)}
      className="field"
      value={category ?? ""}
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
