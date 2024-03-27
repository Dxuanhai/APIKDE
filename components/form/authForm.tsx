"use client";
import Link from "next/link";
import React, { Suspense, useState } from "react";
import { useForm, type FieldValues, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import axios from "axios";
import { useRouter } from "next/navigation";
import { signInSchema, signUpSchema } from "@/app/lib/validation";

interface Props {
  login: boolean;
}

const Authform = ({ login }: Props) => {
  const formSchema = login ? signInSchema : signUpSchema;
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onRegister = async (data: FieldValues) => {
    setLoading(true);
    axios
      .post("/api/auth/register", data)
      .then((res) => {
        setLoading(false);
        if (res?.data) {
          router.push("/login");
        }
      })
      .catch((error) => {
        setLoading(false);
        if (error.response) {
          setErrorMessage(error.response.data.message);
        } else {
          setErrorMessage("An error occurred during registration.");
        }
      });
  };
  const onLogin = async (data: FieldValues) => {
    setLoading(true);
    axios
      .post("/api/auth/login", data)
      .then((res) => {
        setLoading(false);
        if (res?.data) {
          localStorage.setItem("userLogin", data.email);

          router.push("/");
        }
      })
      .catch((error) => {
        setLoading(false);
        if (error.response) {
          setErrorMessage(error.response.data.message);
        } else {
          setErrorMessage("An error occurred during login.");
        }
      });
  };
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSubmit(login ? onLogin : onRegister)();
    }
  };
  return (
    <>
      {loading && (
        <main className="w-full h-screen flex items-center justify-center absolute opacity-60 bg-pink-100 ">
          <span className="loading loading-ring w-[10px]  text-pink-100  absolute"></span>
          <span className="loading loading-ring w-[50px]  text-pink-200 absolute"></span>
          <span className="loading loading-ring w-[100px]  text-pink-300 absolute"></span>
          <span className="loading loading-ring w-[200px] text-pink-400 absolute "></span>
          <span className="loading loading-ring hidden xl:block w-[400px] text-pink-500 absolute "></span>
        </main>
      )}
      <div
        className={`md:flex h-screen w-full ${
          loading && "pointer-events-none"
        } `}
      >
        <div
          style={{
            backgroundImage: `${
              login
                ? "url('/images/demonSlayer.jpg')"
                : "url('/images/yourLieInApril.jpg')"
            }`,
          }}
          className="h-[400px] md:h-full md:w-2/3 bg-center bg-no-repeat bg-cover "
        ></div>
        <div className="bg-white w-full md:max-w-md lg:max-w-full  md:mx-0 md:w-1/2 xl:w-1/3 md:h-screen px-6 lg:px-16 xl:px-12 flex items-center justify-center">
          <div className="w-full h-100">
            <h1 className=" md:hidden xl:block text-xl md:text-2xl font-bold leading-tight mt-12">
              {login ? "Log in to your account" : "Create a new account"}
            </h1>
            <form
              className="mt-6"
              onSubmit={handleSubmit(login ? onLogin : onRegister)}
            >
              <div>
                <label className="block text-gray-700">Email Address</label>
                <input
                  {...register("email")}
                  type="email"
                  name="email"
                  placeholder="Enter Email Address"
                  onKeyDown={handleKeyDown}
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                />
              </div>
              {errors.email && (
                <p className="text-red-500">{`${errors.email.message}`}</p>
              )}
              <div className="mt-4">
                <label className="block text-gray-700">Password</label>
                <input
                  {...register("password")}
                  type="password"
                  name="password"
                  placeholder="Enter Password"
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                />
              </div>
              {errors.password && (
                <p className="text-red-500">{`${errors.password.message}`}</p>
              )}
              {!login && (
                <div className="mt-4">
                  <label className="block text-gray-700">
                    Confirm password
                  </label>
                  <input
                    {...register("confirmPassword")}
                    type="password"
                    name="confirmPassword"
                    placeholder="Enter Password"
                    className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
            focus:bg-white focus:outline-none"
                  />
                </div>
              )}
              {errors.confirmPassword && (
                <p className="text-red-500">{`${errors.confirmPassword.message}`}</p>
              )}
              <div className="text-right mt-2">
                <a
                  href="#"
                  className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700"
                >
                  Forgot Password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg px-4 py-3 mt-6"
              >
                {login ? "Log In" : "Register"}
              </button>
              {errorMessage && <p className="text-red-500">{errorMessage}</p>}
            </form>
            <hr className="my-6 border-gray-300 w-full" />

            <p className="mt-8">
              Need an account?{" "}
              <Link
                href={login ? "/register" : "/login"}
                className="text-blue-500 hover:text-blue-700 font-semibold"
              >
                {login ? "Create an account" : "Already have an account"}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Authform;
