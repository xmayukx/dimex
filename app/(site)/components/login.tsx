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
import { signIn } from "next-auth/react";
import { BsGoogle } from "react-icons/bs";

const formSchema = z.object({
  email: z.string().email().includes("@"),
  password: z.string().length(8, "Password should be 8 charecters long"),
  // confirmPassword: z.string().length(8, "Password should be 8 charecters long"),
});

export const Login = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className=" font-secondary">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="type your email" {...field} />
                </FormControl>
                <FormDescription>Email should be valid</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="your password" {...field} />
                </FormControl>
                <FormDescription>
                  Password should be 8 charecters long
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Log in</Button>
        </form>
      </Form>
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
      </div>
    </div>
  );
};
