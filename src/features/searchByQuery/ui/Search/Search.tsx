"use client";

import { useQueryState } from "nuqs";

import { searchConfig } from "../../model/searchConfig";

import { updateQueryParam } from "@/shared/lib/helpers";

const Search = () => {
  const [name, setName] = useQueryState(searchConfig.PARAM_NAME);

  const handleSearch = (query: string) => {
    updateQueryParam(query, setName);
  };

  return (
    <>
      <label htmlFor="search" className="sr-only">
        {searchConfig.SEARCH_PLACEHOLDER}
      </label>
      <input
        id="search"
        onChange={(e) => handleSearch(e.target.value)}
        className="field"
        value={name ?? ""}
        placeholder={searchConfig.SEARCH_PLACEHOLDER}
      />
    </>
  );
};

export { Search };
