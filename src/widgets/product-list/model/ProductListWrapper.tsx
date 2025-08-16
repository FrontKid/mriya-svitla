import { ProductList } from "../ui/ProductList";

import { Filters } from "@/widgets/product-list/ui/Filters";
import { ISearchParams } from "@/shared/lib/types/tSearchParams";
import { ICategories } from "@/shared/lib/types/tCategories";
import { fetchProducts } from "@/shared/lib/helpers";
import { AppLink } from "@/shared/ui/Button";
import { EContacts } from "@/shared/lib/contacts";

interface IProductListWrapperProps {
  searchParams: Promise<ISearchParams>;
}
const ProductListWrapper = async ({
  searchParams,
}: IProductListWrapperProps) => {
  const { productsData, error } = await fetchProducts();

  const category = !error ? productsData.yml_catalog.categories.category : [];

  const searchParam = await searchParams;

  const {
    query = "",
    categoryId = "",
    minCost = "",
    maxCost = "",
  } = searchParam ?? {};

  const options = {
    query,
    categoryId,
    minCost,
    maxCost,
  };

  const preparedCategories: ICategories[] = category.filter(
    (category: ICategories) => !!category.parentId,
  );

  return (
    <>
      <Filters categories={preparedCategories} />

      {!error && (
        <ProductList
          products={productsData?.yml_catalog.items.item}
          options={options}
        />
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
