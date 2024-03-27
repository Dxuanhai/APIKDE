"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
interface Props {
  children: React.ReactNode;
  type: boolean;
}
const Authenticate = ({ children, type }: Props) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const value = localStorage.getItem("userLogin");

    if (type === true) {
      if (!value) {
        router.push("/login");
        return;
      }

      setLoading(true);
    } else {
      if (value) {
        router.push("/");
        return;
      }
      setLoading(true);
    }
  }, [loading, router, type]);
  return (
    <>
      {loading ? (
        <>{children}</>
      ) : (
        <main className="w-full h-screen flex items-center justify-center relative">
          <span className="loading loading-ring w-[10px]  text-pink-100  absolute"></span>
          <span className="loading loading-ring w-[50px]  text-pink-200 absolute"></span>
          <span className="loading loading-ring w-[100px]  text-pink-300 absolute"></span>
          <span className="loading loading-ring w-[200px] text-pink-400 absolute "></span>
          <span className="loading loading-ring w-[400px] text-pink-500 absolute "></span>
        </main>
      )}
    </>
  );
};

export default Authenticate;
