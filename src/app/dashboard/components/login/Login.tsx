"use client";

import { useRouter } from "next/navigation";
import React from "react";

export default function Login() {
  const navigation = useRouter();

  return (
    <>
      <form
        role="form text-left"
        onSubmit={(e) => {
          e.preventDefault();
          navigation.push("/dashboard");
        }}
      >
        <div className="mb-4">
          <input
            type="email"
            className="text-size-sm outline-none focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-zinc-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-blue-primary focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
            placeholder="Email"
            aria-label="Email"
            aria-describedby="email-addon"
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            className="text-size-sm outline-none focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-zinc-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-blue-primary focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
            placeholder="Password"
            aria-label="Password"
            aria-describedby="password-addon"
            required
          />
        </div>
        <div className="mb-4">
          <button
            type="submit"
            className="inline-block w-full px-6 py-3 mt-6 mb-0 font-bold text-center text-white uppercase align-middle transition-all border-0 rounded-lg hover:scale-102 active:opacity-85 shadow-soft-sm bg-blue-primary
                text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25"
          >
            Entrar
          </button>
        </div>
      </form>
    </>
  );
}
