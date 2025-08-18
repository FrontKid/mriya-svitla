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
    <>
      <label className="sr-only" htmlFor="category">
        Категорії
      </label>
      <select
        id="category"
        onChange={(e) => handleCategory(e.target.value)}
        value={category ?? ""}
        className="field"
      >
        <option value="">Усі категорії</option>
        {categories.map(({ text, id }) => (
          <option key={id} value={id}>
            {text}
          </option>
        ))}
      </select>
    </>
  );
};

export { ProductCategory };
