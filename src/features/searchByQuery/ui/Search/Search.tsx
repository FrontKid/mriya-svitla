"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { useState } from "react";

import { searchConfig } from "@/features/searchByQuery/model/searchConfig";
import { globalConfig } from "@/shared/lib/globalConfig";
import { updateQueryParam } from "@/shared/lib/helpers";

const Search = () => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(
    searchParams.get(searchConfig.PARAM_NAME) || "",
  );

  const handleSearch = useDebouncedCallback((query: string) => {
    updateQueryParam(
      searchConfig.PARAM_NAME,
      query,
      searchParams,
      router,
      pathname,
    );
  }, globalConfig.DEBOUNCE_DELAY_MS);
  return (
    <input
      onChange={(e) => {
        handleSearch(e.target.value);
        setQuery(e.target.value);
      }}
      className="field"
      value={query}
      placeholder={searchConfig.SEARCH_PLACEHOLDER}
    />
  );
};

export { Search };
