"use client";

import React, { useState } from "react";
import { ChevronDown, Menu, Search, ShoppingCart, User } from "lucide-react";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ThemeSwitcher from "./ThemeSwitcher";

function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };
  return (
    <div className="flex items-center justify-between h-20 p-4 w-full dark:bg-slate-900 bg-white dark:text-yellow-500">
      <div className="flex items-center space-x-4">
        <div>
          <Image
            src="/images/leaf.png"
            alt="leaf"
            width={50}
            height={50}
            className=" w-5 h-5 absolute ml-9 -mt-2"
          />
          <h1 className="text-5xl font-[1000] -mt-2 relative">Organic</h1>
          <p className="text-xs font-bold absolute ml-[5.5rem] -mt-2">BAZAR</p>
        </div>
        <button className="hover:scale-110">
          {" "}
          <Menu />
        </button>
      </div>

      <div className="flex items-center space-x-8">
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="px-2 py-1 text-sm font-semibold flex items-center space-x-2">
                Categories <ChevronDown />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>All Categories</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup
              // value={position}
              // onValueChange={setPosition}
              >
                <DropdownMenuRadioItem value="top">
                  Groceries
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="bottom">
                  Drinks
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="right">
                  Chocolates
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="flex items-center space-x-2">
          <form>
            <input
              type="text"
              placeholder="Search for more than 20,200 products"
              value={searchQuery}
              onChange={handleSearch}
              className="bg-gray-300 rounded-md text-sm px-4 py-2 dark:bg-gray-700 dark:placeholder:text-yellow-500 focus:border-none"
            />
          </form>
          <button>
            <Search />
          </button>
        </div>
      </div>
      <div className="flex items-center space-x-3">
        <button className="text-sm font-semibold">
          <p>Home</p>
        </button>
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="px-2 py-1 text-sm font-semibold flex items-center space-x-2">
                Pages <ChevronDown />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuRadioGroup
              // value={position}
              // onValueChange={setPosition}
              >
                <DropdownMenuRadioItem value="top">
                  ABOUT US
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="bottom">
                  SHOP
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="right">
                  SINGLE PRODUCT
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="right">
                  CART
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="right">
                  CHECKOUT
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="right">
                  BLOG
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="right">
                  SINGLE POST
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="right">
                  STYLES
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="right">
                  CONTACT
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="right">
                  MY ACCOUNT
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className="flex items-center space-x-6">
        <ThemeSwitcher />
        <User />
        <ShoppingCart />
      </div>
    </div>
  );
}

export default Navbar;
