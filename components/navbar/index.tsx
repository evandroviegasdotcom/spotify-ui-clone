import React from "react";
import Logo from "./Logo";
import { GoHome } from "react-icons/go";
import SearchInput from "./search-input";
import { IoArrowDownOutline, IoNotificationsOutline } from "react-icons/io5";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between text-dimmed">
      <Logo />
      <div className="flex items-center gap-2">
        <div className="text-2xl bg-foreground p-2.5 rounded-full hover:scale-105">
          <GoHome />
        </div>
        <SearchInput />
      </div>
      <div className="flex items-center gap-6">
    <button className="hidden md:inline px-3 py-1.5 rounded-full bg-white text-black font-bold text-sm">
      Explore Premium
    </button>

        <div className="flex items-center gap-1.5 text-white">
          <div className="rounded-full text-lg font-bold border-2">
            <IoArrowDownOutline />
          </div>
          <span className="font-semibold text-xs">Install App</span>
        </div>

        <IoNotificationsOutline className="text-xl" />

        <Image src="https://github.com/EvandrooViegas.png" alt="User Pic" width={35} height={35} className="rounded-full" />
      </div>
    </div>
  );
}
