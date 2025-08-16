"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { FC } from "react";
import { useDebouncedCallback } from "use-debounce";

import { minMaxConfig } from "../../model/minMaxConfig";

import { globalConfig } from "@/shared/lib/globalConfig";
import { updateQueryParam } from "@/shared/lib/helpers";

type TFilterByMinMaxProps = object;

const FilterByMinMax: FC<TFilterByMinMaxProps> = () => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleMin = useDebouncedCallback((minCostIncome: string) => {
    updateQueryParam(
      minMaxConfig.PARAM_NAME_MIN,
      minCostIncome,
      searchParams,
      router,
      pathname,
    );
  }, globalConfig.DEBOUNCE_DELAY_MS);

  const handleMax = useDebouncedCallback((maxCostIncome: string) => {
    updateQueryParam(
      minMaxConfig.PARAM_NAME_MAX,
      maxCostIncome,
      searchParams,
      router,
      pathname,
    );
  }, globalConfig.DEBOUNCE_DELAY_MS);
  return (
    <div className="flex gap-2">
      <label>
        <input
          defaultValue={searchParams.get("minCost")?.toString()}
          onChange={(e) => handleMin(e.target.value)}
          className="field"
          id="minPrice"
          type="number"
          min="0"
          placeholder="Мин"
        />
      </label>
      <label>
        <input
          defaultValue={searchParams.get("maxCost")?.toString()}
          onChange={(e) => handleMax(e.target.value)}
          className="field"
          id="maxPrice"
          type="number"
          min="0"
          placeholder="Макс"
        />
      </label>
    </div>
  );
};

export { FilterByMinMax };
