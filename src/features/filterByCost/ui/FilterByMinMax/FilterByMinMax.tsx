"use client";

import { FC } from "react";
import { useQueryState } from "nuqs";

import { minMaxConfig } from "../../model/minMaxConfig";

import { updateQueryParam } from "@/shared/lib/helpers";

type TFilterByMinMaxProps = object;

const FilterByMinMax: FC<TFilterByMinMaxProps> = () => {
  const [minValue, setMinValue] = useQueryState(minMaxConfig.PARAM_NAME_MIN);
  const [maxValue, setMaxValue] = useQueryState(minMaxConfig.PARAM_NAME_MAX);

  const handleMin = (minCostIncome: string) => {
    updateQueryParam(minCostIncome, setMinValue);
  };

  const handleMax = (maxCostIncome: string) => {
    updateQueryParam(maxCostIncome, setMaxValue);
  };
  return (
    <div className="flex gap-2">
      <label>
        <input
          value={minValue ?? ""}
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
          value={maxValue ?? ""}
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
