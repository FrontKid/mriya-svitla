"use client";
import { ArrowDown } from "lucide-react";
import { FC, Suspense, useMemo, useState } from "react";
import clsx from "clsx";

import { IProduct } from "@/shared/lib/types/tProduct";
import { AppButton } from "@/shared/ui/Button";
import { Card } from "@/shared/ui/Card";
import { getPreparedProducts } from "@/shared/lib/helpers";
import { globalConfig } from "@/shared/lib/globalConfig";
import { ProductsSkeleton } from "@/shared/ui/ProductsSceleton";

type TProductListProps = {
  products: IProduct[];
  options: {
    query: string;
    categoryId: string;
    minCost: string;
    maxCost: string;
  };
};

const ProductList: FC<TProductListProps> = ({ products, options }) => {
  const { query, categoryId, minCost, maxCost } = options;
  const [productsParPage, setProductsPerPage] = useState(
    globalConfig.PRODUCTS_PER_PAGE,
  );

  const preparedProducts = getPreparedProducts(products, options).slice(
    0,
    productsParPage,
  );

  const shouldShowMore = productsParPage <= preparedProducts.length;

  const handleShowMore = () => {
    if (shouldShowMore) {
      setProductsPerPage(
        (pageCount) => pageCount + globalConfig.PRODUCTS_PER_PAGE,
      );
    }
  };

  const hasParams = !!query || !!categoryId || !!minCost || !!maxCost;

  const showFilteredProducts =
    hasParams && !getPreparedProducts(products, options).length;

  return (
    <section
      className={clsx("section-container pb-12", {
        "pt-12": showFilteredProducts,
      })}
    >
      <Suspense fallback={<ProductsSkeleton />}>
        <ul className="relative grid grid-cols-[1fr_1fr_1fr] gap-3">
          {preparedProducts.map((product) => (
            <Card key={product.model} product={product} />
          ))}
          {shouldShowMore && (
            <div className="gradient-up absolute right-0 bottom-0 left-0 flex h-[250px] w-full items-end justify-center rounded-2xl font-bold backdrop-blur-[1px]">
              <AppButton
                onClick={handleShowMore}
                className="text-subtitle hover:text-bg relative mb-12 rounded-2xl pr-10 text-green-800 transition-colors duration-300 hover:bg-green-800"
              >
                Показать еще
                <ArrowDown
                  className="absolute top-1/2 right-0 -translate-1/2"
                  size={22}
                />
              </AppButton>
            </div>
          )}
        </ul>
      </Suspense>

      {showFilteredProducts && (
        <div className="flex flex-col items-center gap-3">
          <div className="text-muted mx-0 my-3 text-center">
            Ничего не найдено. Измените фильтры.
          </div>
        </div>
      )}
    </section>
  );
};

export { ProductList };
