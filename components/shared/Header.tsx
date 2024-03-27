"use client";

import { BiLogOut, BiMenu, BiSolidUpArrowAlt } from "react-icons/bi";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";
import Brand from "../Brand";
import Scroll from "../card/Scroll";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const router = useRouter();
  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 40) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userLogin");
    router.push("/login");
    return;
  };

  const ShowMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <Scroll
        icon={BiSolidUpArrowAlt}
        size={24}
        classname="bottom-[100px]"
        Function={handleScrollTop}
      />
      <Scroll
        icon={BiLogOut}
        size={24}
        Function={handleLogout}
        classname="flex"
      />
      <div className=" ">
        <div className="border border-solid h-[40px] ">
          <div className="container mx-auto 2xl:w-[1280px]">
            <Brand />
          </div>
        </div>
        <div
          className={`bg-white w-full  h-[100px] flex justify-center  
           ${
             isFixed ? "fixed top-0 z-[100] h-[60px] w-screen " : ""
           } border-b-2  transition-all`}
        >
          <div className=" container 2xl:w-[1280px]">
            <div className="flex items-center w-full md:justify-between">
              <button onClick={ShowMenu} className="md:hidden ">
                <BiMenu size={24} />
              </button>
              <Link href="/" className="mx-auto md:mx-0 ">
                <Image
                  src="/images/logo.png"
                  alt="logo"
                  width={isFixed ? 150 : 250}
                  height={100}
                  className="transition-all"
                />
              </Link>
              <ul
                className="
                hidden
                md:flex
                items-center
                text-main
                h-full
                "
              >
                <li className="font-bold hover:text-cyan-500 px-4 flex items-center justify-center  hover:border-b-[8px] hover:border-cyan-500 h-full transition-all ">
                  <Link href="/">HOME</Link>
                </li>
                <li className="font-bold hover:text-cyan-500 px-4 flex items-center justify-center  hover:border-b-[8px] hover:border-cyan-500 h-full transition-all">
                  <Link href="/news">NEWS</Link>
                </li>
                <li className="font-bold hover:text-fuchsia-500 px-4 flex items-center justify-center  hover:border-b-[8px] hover:border-fuchsia-500 h-full transition-all ">
                  <Link href="/shows">SHOWS</Link>
                </li>
                <li className="font-bold hover:text-pink-500 px-4 flex items-center justify-center  hover:border-b-[8px] hover:border-pink-500 h-full transition-all ">
                  <Link href="/products">PRODUCTS</Link>
                </li>
              </ul>
            </div>
            {isMenuOpen && (
              <ul
                className="
              text-main
              bg-white
              relative
              z-10
              md:hidden
              "
              >
                <li className="py-4 hover:text-cyan-500 font-bold border-b-[1px] hover:border-b-[8px] hover:border-cyan-500 h-full transition-all">
                  <Link href="/">HOME</Link>
                </li>
                <li className="py-4 hover:text-teal-500 font-bold border-b-[1px] hover:border-b-[8px] hover:border-teal-500 h-full transition-all">
                  <Link href="/news">NEWS</Link>
                </li>
                <li className="py-4 hover:text-fuchsia-500 font-bold border-b-[1px] hover:border-b-[8px] hover:border-fuchsia-500 h-full transition-all">
                  <Link href="/shows">SHOWS</Link>
                </li>
                <li className="py-4 hover:text-pink-500 font-bold border-b-[1px] hover:border-b-[8px] hover:border-pink-500 h-full transition-all">
                  <a href="https://store.aniplexusa.com/">SHOP</a>
                </li>
              </ul>
            )}
          </div>
        </div>
        {isFixed && <div className="h-[80px] transition-all"></div>}
      </div>
    </>
  );
};

export default Header;
