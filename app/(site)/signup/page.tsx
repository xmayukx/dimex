"use client";
import { FC } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Exo_2 } from "next/font/google";
import { Register } from "../components/register";
import { Login } from "../components/login";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { BsGoogle } from "react-icons/bs";
const exo_2 = Exo_2({
  weight: "700",
  subsets: ["latin-ext"],
  display: "swap",
});

const Signup = () => {
  // const customStyle: React.CSSProperties = {
  // //  borderRadius:'0.5px'
  // };
  return (
    <>
      <div className="flex font-secondary justify-center relative mx-8 top-[5rem]">
        <Tabs defaultValue="signup" className="w-[400px]">
          <TabsList className="grid w-full grid-cols-2 font-primary rounded-none">
            <TabsTrigger value="signup" className=" font-bold rounded-none">
              Sign up
            </TabsTrigger>
            <TabsTrigger value="login" className=" font-bold rounded-none">
              Log in
            </TabsTrigger>
          </TabsList>

          <TabsContent value="signup" className="">
            <Card>
              <CardHeader className="items-center">
                <CardTitle className=" text-lg">Sign up</CardTitle>
                <CardDescription>
                  Fill the form below to create an account
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Register />
              </CardContent>
              <CardFooter>
                <Button
                  className="p-6 text-base font-secondary mx-auto"
                  onClick={(event) => {
                    event.preventDefault();
                    signIn("google");
                  }}
                >
                  <BsGoogle className="mr-4 h-4 w-4" /> Sign up with Google
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="login">
          {/* h-[464px] */}
            <Card className="">
              <CardHeader className=" items-center">
                <CardTitle className=" text-lg">Log in</CardTitle>
                <CardDescription>Fill the form below to log in</CardDescription>
              </CardHeader>
              <CardContent>
                <Login />
              </CardContent>
              <CardFooter className="">
                <Button
                  className="p-6 text-base font-secondary mx-auto"
                  onClick={(event) => {
                    event.preventDefault();
                    signIn("google");
                  }}
                >
                  <BsGoogle className="mr-4 h-4 w-4" /> Sign in with Google
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default Signup;
