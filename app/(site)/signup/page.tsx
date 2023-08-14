"use client";
import { FC } from "react";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Exo_2 } from "next/font/google";
import { Register } from "../components/register";
import { Login } from "../components/login";
const exo_2 = Exo_2({
  weight: "700",
  subsets: ["latin-ext"],
  display: "swap",
});

const formSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email().includes("@"),
  password: z.string().length(8, "Password should be 8 charecters long"),
  // confirmPassword: z.string().length(8, "Password should be 8 charecters long"),
});

const Signup = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <>
      <div className="flex flex-col">
        <Tabs defaultValue="signup" className="w-[400px]">
          <TabsList className="grid w-full grid-cols-2 font-primary">
            <TabsTrigger value="signup">Sign up</TabsTrigger>
            <TabsTrigger value="login">Log in</TabsTrigger>
          </TabsList>
          <TabsContent value="signup" className=" font-secondary">
            <Register />
          </TabsContent>
          <TabsContent value="login"> 
          <Login />
           </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default Signup;
