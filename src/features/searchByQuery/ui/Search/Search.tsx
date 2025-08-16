"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

import { searchConfig } from "@/features/searchByQuery/model/searchConfig";
import { globalConfig } from "@/shared/lib/globalConfig";

const Search = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((query: string) => {
    const params = new URLSearchParams(searchParams);

    if (query) {
      params.set(searchConfig.PARAM_NAME, query);
    } else {
      params.delete(searchConfig.PARAM_NAME);
    }

    replace(`${pathname}?${params.toString()}`, { scroll: false });
  }, globalConfig.DEBOUNCE_DELAY_MS);

  return (
    <input
      onChange={(e) => {
        handleSearch(e.target.value);
      }}
      className="field"
      defaultValue={searchParams.get(searchConfig.PARAM_NAME) || ""}
      placeholder={searchConfig.SEARCH_PLACEHOLDER}
    />
  );
};

export { Search };
