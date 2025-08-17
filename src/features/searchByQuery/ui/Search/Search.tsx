"use client";
import { useQueryState } from "nuqs";

import { searchConfig } from "@/features/searchByQuery/model/searchConfig";
import { updateQueryParam } from "@/shared/lib/helpers";

const Search = () => {
  const [name, setName] = useQueryState(searchConfig.PARAM_NAME);

  const handleSearch = (query: string) => {
    updateQueryParam(query, setName);
  };

  return (
    <input
      onChange={(e) => {
        handleSearch(e.target.value);
      }}
      className="field"
      value={name ?? ""}
      placeholder={searchConfig.SEARCH_PLACEHOLDER}
    />
  );
};

export { Search };
