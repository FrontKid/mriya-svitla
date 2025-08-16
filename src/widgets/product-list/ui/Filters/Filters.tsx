import { FC, memo } from "react";

import {
  Search,
  ProductCategory,
  FilterByMinMax,
  ProductBrand,
} from "@/features";
import { ICategories } from "@/shared/lib/types/tCategories";

interface IFiltersProps {
  categories: ICategories[];
}

const FiltersMemo: FC<IFiltersProps> = ({ categories }) => {
  return (
    <section id="catalog" className="section-container">
      <form className="card text text-md mb-3 grid grid-cols-[2fr_1fr_1fr_1fr] gap-3">
        <Search />
        <ProductBrand />
        <ProductCategory categories={categories} />
        <FilterByMinMax />
      </form>
    </section>
  );
};

const Filters = memo(FiltersMemo);

export { Filters };
