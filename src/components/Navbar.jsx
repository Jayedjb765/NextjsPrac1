"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div>
      <div className="flex justify-between  bg-gray-400 px-6 py-3">
        <h1 className="text-xl font-bold">Practice</h1>
        <div className="space-x-4">
          <Link
            href="/blogs"
            className={
              pathname == "/blogs"
                ? "text-blue-400 underline text-xl font-bold"
                : "text-black text-xl font-bold hover:text-green-400"
            }
          >
            {" "}
            Blogs
          </Link>
          <Link href="/blogs" className="text-xl font-semibold">
            Blogs
          </Link>
          <Link href="/blogs" className="text-xl font-semibold">
            Blogs
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
