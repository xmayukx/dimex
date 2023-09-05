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

const formSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email().includes("@"),
  password: z.string().length(8, "Password should be 8 charecters long"),
  // confirmPassword: z.string().length(8, "Password should be 8 charecters long"),
});

export const Register = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    const res = await fetch("/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    console.log(res);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col font-semibold gap-y-2"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className=" space-y-1">
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input className=" " placeholder="type your name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className=" space-y-1">
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="type your email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className=" space-y-1">
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="your password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="mt-3 font-semibold">
          Sign Up
        </Button>
      </form>
    </Form>
  );
};
