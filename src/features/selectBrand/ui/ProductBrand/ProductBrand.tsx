"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

import { updateQueryParam } from "@/shared/lib/helpers";
import { globalConfig } from "@/shared/lib/globalConfig";

const brandCatigory = [{ id: "1", name: "Feron", slug: "feron" }];

const ProductBrand = () => {
  const pathname = usePathname();
  const { replace } = useRouter();
  const searchParams = useSearchParams();

  const handleBrand = useDebouncedCallback((brand: string) => {
    updateQueryParam("brand", brand, searchParams, replace, pathname);
  }, globalConfig.DEBOUNCE_DELAY_MS);

  return (
    <select
      defaultValue={searchParams.get("brand")?.toString() ?? ""}
      onChange={(e) => handleBrand(e.target.value)}
      className="field"
    >
      <option value="">Все бренды</option>
      {brandCatigory.map((brand) => (
        <option key={brand.id} value={brand.slug}>
          {brand.name}
        </option>
      ))}
    </select>
  );
};

export { ProductBrand };
