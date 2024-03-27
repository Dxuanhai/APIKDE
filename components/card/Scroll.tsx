"use client";
import { useState, useEffect } from "react";
import { twMerge } from "tailwind-merge";

import { IconType } from "react-icons/lib";
interface Props {
  icon: IconType;
  size: number;
  classname?: string;
  Function: () => void;
}

const Scroll = ({ icon, size, classname, Function }: Props) => {
  const [isScroll, setIsScroll] = useState(false);
  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 400) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    }
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScroll]);

  return (
    <div
      onClick={Function}
      className={twMerge(
        "hidden",
        "w-[40px]",
        "h-[40px]",
        "items-center",
        "justify-center",
        "text-white",
        "bg-[rgba(0,0,0,0.3)]",
        "fixed",
        "right-4",
        "bottom-[40px]",
        "z-[999]",
        "cursor-pointer",
        "rounded-md",
        "xl:hover:bg-pink-600",

        isScroll ? "xl:flex " : "",
        classname
      )}
    >
      {icon({ size })}
    </div>
  );
};

export default Scroll;
