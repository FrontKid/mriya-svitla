"use client";
import { ArrowDown } from "lucide-react";
import { FC, useState } from "react";
import clsx from "clsx";
import { parseAsString, useQueryStates } from "nuqs";

import { IProduct } from "@/shared/lib/types/tProduct";
import { AppButton } from "@/shared/ui/Button";
import { Card } from "@/shared/ui/Card";
import { getPreparedProducts } from "@/shared/lib/helpers";
import { globalConfig } from "@/shared/lib/globalConfig";
import {
  brandConfig,
  minMaxConfig,
  productCategoryConfig,
  searchConfig,
} from "@/features";

type TProductListProps = {
  products: IProduct[];
};

const ProductList: FC<TProductListProps> = ({ products }) => {
  const [{ query, brand, categoryId, minCost, maxCost }] = useQueryStates({
    [searchConfig.PARAM_NAME]: parseAsString.withDefault(""),
    [brandConfig.PARAM_NAME]: parseAsString.withDefault(""),
    [productCategoryConfig.PARAM_NAME]: parseAsString.withDefault(""),
    [minMaxConfig.PARAM_NAME_MIN]: parseAsString.withDefault(""),
    [minMaxConfig.PARAM_NAME_MAX]: parseAsString.withDefault(""),
  });

  const [productsPerPage, setProductsPerPage] = useState(
    globalConfig.PRODUCTS_PER_PAGE,
  );

  const options = { query, brand, categoryId, minCost, maxCost };

  const preparedProducts = getPreparedProducts(products, options).slice(
    0,
    productsPerPage,
  );

  const shouldShowMore = productsPerPage <= preparedProducts.length;
  const hasParams =
    !!query || !!brand || !!categoryId || !!minCost || !!maxCost;
  const showFilteredProducts =
    hasParams && !getPreparedProducts(products, options).length;

  const handleShowMore = () => {
    if (shouldShowMore) {
      setProductsPerPage(
        (pageCount) => pageCount + globalConfig.PRODUCTS_PER_PAGE,
      );
    }
  };

  return (
    <section
      className={clsx("section-container pb-12", {
        "pt-12": showFilteredProducts,
      })}
    >
      <ul className="relative grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
        {preparedProducts.map((product) => (
          <Card key={product.model} product={product} />
        ))}

        {shouldShowMore && (
          <li className="gradient-up absolute inset-x-0 bottom-0 flex h-[250px] w-full items-end justify-center rounded-2xl font-bold backdrop-blur-[1px]">
            <AppButton
              title="Показати ще"
              onClick={handleShowMore}
              className="text-subtitle hover:text-bg relative mb-12 rounded-2xl pr-8 text-green-800 transition-colors duration-300 hover:bg-green-800"
            >
              Показати ще
              <ArrowDown
                className="absolute top-1/2 right-1 -translate-y-1/2"
                size={22}
              />
            </AppButton>
          </li>
        )}
      </ul>

      {showFilteredProducts && (
        <div className="flex flex-col items-center gap-3">
          <div className="text-muted mx-0 my-3 text-center">
            Нічого не знайдено. Змініть фільтри.
          </div>
        </div>
      )}
    </section>
  );
};

export { ProductList };
