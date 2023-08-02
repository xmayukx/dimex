import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { BsGoogle } from "react-icons/bs";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import User from "../components/user";

const Hero = async () => {
  const session = await getServerSession(options);
  return (
    <main className="">
      <h2>Server side:</h2>
      {JSON.stringify(session)}
      <h2>Client side:</h2>
      <User />
    </main>
  );
};

export default Hero;
