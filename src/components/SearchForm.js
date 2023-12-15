"use client";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

const SearchForm = () => {
  const pathname = usePathname();
  const { replace } = useRouter();
  const searchParams = useSearchParams();

  const handleChange = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 500);

  return (
    <div>
      <input
        onChange={(e) => handleChange(e.target.value)}
        type="search"
        className="border py-2 px-1 border-gray-300 bg-gray-100 min-w-[350px] w-auto"
        placeholder="Search Games"
        defaultValue={searchParams.get("query")?.toString()}
      />
    </div>
  );
};

export default SearchForm;
