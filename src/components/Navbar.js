"use client";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

const Navbar = () => {
  const categories = [
    { href: "action-rpg", label: "MMORPG" },
    { href: "Shooter", label: "Shooter" },
    { href: "Anime", label: "Anime" },
    { href: "battle-royale", label: "Battle Royale" },
    { href: "Racing", label: "Racing" },
    { href: "sci-fi", label: "Sci-Fi" },
    { href: "MOBA", label: "MOBA" },
    { href: "card", label: "Card Game" },
    { href: "social", label: "Social" },
  ];

  const platform = [
    { href: "pc", label: "PC" },
    { href: "browser", label: "Browser" },
  ];
  return (
    <div className="md:px-24 px-6 py-4 border-b-[1px] shadow-sm">
      <div className="flex items-center">
        <h4 className="font-bold text-3xl">
          <Link href="/" className="text-blue-500">
            FreeGame
          </Link>
        </h4>

        <div className="flex-1 space-x-6">
          <Menu as="div" className="relative inline-block text-left ml-3">
            <div>
              <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white text-sm font-semibold text-gray-900 hover:bg-gray-50">
                Categories
                <ChevronDownIcon
                  className="-mr-1 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95">
              <Menu.Items className="absolute right-0 z-10 mt-2 w-auto min-w-[125px] origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  {categories.map((category, index) => {
                    return (
                      <Menu.Item key={index}>
                        {({ active }) => (
                          <Link
                            href={`/games/categories/${category.href}`}
                            className={
                              (active
                                ? "bg-blue-300 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm")
                            }>
                            {category.label}
                          </Link>
                        )}
                      </Menu.Item>
                    );
                  })}
                </div>
              </Menu.Items>
            </Transition>
          </Menu>

          <Menu as="div" className="relative inline-block text-left ml-3">
            <div>
              <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white text-sm font-semibold text-gray-900 hover:bg-gray-50">
                PlatForm
                <ChevronDownIcon
                  className="-mr-1 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95">
              <Menu.Items className="absolute right-0 z-10 mt-2 w-auto min-w-[125px] origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  {platform.map((item, index) => {
                    return (
                      <Menu.Item key={index}>
                        {({ active }) => (
                          <Link
                            href={`/games/platform/${item.href}`}
                            className={
                              (active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm")
                            }>
                            {item.label}
                          </Link>
                        )}
                      </Menu.Item>
                    );
                  })}
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>

        <Link className="flex items-center space-x-1" href="/games/search">
          <span className="font-semibold">Find Games</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="w-6 h-6 cursor-pointer">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
