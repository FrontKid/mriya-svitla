import { Suspense } from "react";

import { ProductList } from "../ui/ProductList";

import { Filters } from "@/widgets/product-list/ui/Filters";
import { ICategories } from "@/shared/lib/types/tCategories";
import { fetchProducts } from "@/shared/lib/helpers";
import { AppLink } from "@/shared/ui/Button";
import { EContacts } from "@/shared/lib/contacts";
import { ProductsSkeleton } from "@/shared/ui/ProductsSceleton";
import { FiltersSceleton } from "@/shared/ui/FiltersSceleton";
import { globalConfig } from "@/shared/lib/globalConfig";

const ProductListWrapper = async () => {
  const { productsData, error } = await fetchProducts();

  const category = !error ? productsData.yml_catalog.categories.category : [];

  const preparedCategories: ICategories[] = category.filter(
    (category: ICategories) => {
      const removeDublicateCategory = category.id !== "57";

      return (
        !!category.parentId &&
        !globalConfig.deletedGoodsIds.includes(category.id) &&
        removeDublicateCategory
      );
    },
  );

  return (
    <>
      <Suspense fallback={<FiltersSceleton />}>
        <Filters categories={preparedCategories} />
      </Suspense>

      {!error && (
        <Suspense fallback={<ProductsSkeleton />}>
          <ProductList products={productsData?.yml_catalog.items.item} />
        </Suspense>
      )}

      {error && (
        <div className="flex flex-col items-center justify-center py-10">
          <h2 className="text-subtitle pb-5 text-center font-bold">
            Сейчас товары недоступны, попробуйте позже!
          </h2>
          <AppLink
            title="Написать в вайбер"
            href={`viber://chat?number=${EContacts.PHONE_NUMBER}`}
            type="btn"
          >
            Обратитесь к поставщику
          </AppLink>
        </div>
      )}
    </>
  );
};

export { ProductListWrapper };
