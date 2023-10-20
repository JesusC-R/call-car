"use client";

import { useState, useEffect } from "react";

import Link from "next/link";
import Image from "next/image";
import { CustomButton } from ".";

const Navbar = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <header className="w-full absolute z-10">
      <nav
        className="max-w-[1440px] mx-auto flex justify-between
        items-center sm:px-16 px-6 py-4"
      >
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/logo.svg"
            alt="logo"
            width={118}
            height={18}
            className="object-contain"
          />
        </Link>
        <CustomButton
          text="Sign In"
          btnType="button"
          containerStyles="text-blue-500 rounded-full bg-white
          min-w-[130px] shadow-md hover:bg-blue-500 hover:text-white
          hover:shadow-lg"
        />
      </nav>
    </header>
  );
};

export default Navbar;
