import { Suspense } from "react";

import { ProductList } from "../ui/ProductList";

import { Filters } from "@/widgets/product-list/ui/Filters";
import { ICategories } from "@/shared/lib/types/tCategories";
import { fetchProducts } from "@/shared/lib/helpers";
import { AppLink } from "@/shared/ui/Button";
import { EContacts } from "@/shared/lib/contacts";

const ProductListWrapper = async () => {
  const { productsData, error } = await fetchProducts();

  const category = !error ? productsData.yml_catalog.categories.category : [];

  const preparedCategories: ICategories[] = category.filter(
    (category: ICategories) => !!category.parentId,
  );

  return (
    <>
      <Suspense
        fallback={
          <section id="catalog" className="section-container">
            <form className="card text text-md mb-3 grid animate-pulse grid-cols-[2fr_1fr_1fr_1fr] gap-3">
              {/* Search */}
              <div className="h-10 w-full rounded-xl bg-gray-200" />

              {/* Brand */}
              <div className="h-10 w-full rounded-xl bg-gray-200" />

              {/* Category */}
              <div className="h-10 w-full rounded-xl bg-gray-200" />

              {/* Min/Max */}
              <div className="flex gap-2">
                <div className="h-10 w-full rounded-xl bg-gray-200" />
                <div className="h-10 w-full rounded-xl bg-gray-200" />
              </div>
            </form>
          </section>
        }
      >
        <Filters categories={preparedCategories} />
      </Suspense>

      {!error && (
        <ProductList products={productsData?.yml_catalog.items.item} />
      )}

      {error && (
        <div className="flex flex-col items-center justify-center py-10">
          <h2 className="text-subtitle pb-5 font-bold">
            Сейчас товары недоступны, попробуйте позже!
          </h2>
          <AppLink href={`viber://${EContacts.PHONE_NUMBER}`} type="btn">
            Обратитесь к поставщику
          </AppLink>
        </div>
      )}
    </>
  );
};

export { ProductListWrapper };
