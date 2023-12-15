"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Pagination({ totalPages, currentPage }) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const handleClick = (page) => {
    const params = new URLSearchParams(searchParams);
    if (params) {
      params.set("page", page);
    } else {
      params.delete("page");
    }
    replace(`${pathname}?${params?.toString()}`);
  };

  return (
    <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6 mt-3">
      <div className="flex items-center justify-between">
        <nav
          className="isolate inline-flex rounded-md shadow-sm"
          aria-label="Pagination">
          {pages.map((page) => (
            <span
              key={page}
              onClick={() => handleClick(page)}
              aria-current="page"
              className={
                page == currentPage
                  ? " cursor-pointer relative hidden items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                  : " cursor-pointer relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
              }>
              {page}
            </span>
          ))}
        </nav>
      </div>
    </div>
  );
}
