"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface Props {
  path: string;
  text: string;
}

export const ActiveLink = ({ path, text }: Props) => {
  const pathName = usePathname();

  console.log(pathName === path);

  console.log(pathName);

  console.log(path);
  return (
    <Link
      className={`hover:underline hover:text-blue-400 mr-2 transition-all  ${
        pathName === path ? "text-blue-700" : ""
      }`}
      href={path}
    >
      {text}
    </Link>
  );
};
