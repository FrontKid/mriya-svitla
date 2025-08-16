"use client";
import { ArrowDown } from "lucide-react";
import { FC, Suspense, useState } from "react";

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

  return (
    <Suspense fallback={<ProductsSkeleton />}>
      <ul className="relative grid grid-cols-[1fr_1fr_1fr] gap-3">
        {preparedProducts.map((product) => (
          <Card key={product.model} product={product} />
        ))}
        {shouldShowMore && (
          <div className="from-bg to-bg/50 text-text absolute right-0 bottom-0 left-0 flex h-[150px] w-full items-center justify-center rounded-2xl bg-gradient-to-t text-[20px] font-bold backdrop-blur-[1px]">
            <AppButton
              type="btn"
              onClick={handleShowMore}
              className="relative pr-12"
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
  );
};

export { ProductList };
