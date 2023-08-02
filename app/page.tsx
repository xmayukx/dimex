"use client";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { BsGoogle } from "react-icons/bs";

export default function Home() {
  return (
    <main className="flex lg:mx-[35rem] flex-col bg-black space-y-[10rem]">
      <section className="flex flex-col justify-start items-start m-24">
        <h1 className="text-6xl font-extrabold font-primary py-2">DIMEX</h1>
        <div className="text-3xl font-bold font-primary">
          Track <span className="text-emerald-400">Save </span>{" "}
          <span className=" text-indigo-400">Succeed.</span>
        </div>
      </section>
      <div className="flex flex-col">
        <Button
          className="p-6 text-base font-secondary mx-auto"
          onClick={(event) => {
            event.preventDefault();
            signIn("google");
          }}
        >
          <BsGoogle className="mr-4 h-4 w-4" /> Sign up with Google
        </Button>
        <span className="font-secondary mx-auto text-sm mt-2">
          Already have an account?{" "}
          <span className=" font-semibold underline">Login</span>
        </span>
      </div>
    </main>
  );
}
