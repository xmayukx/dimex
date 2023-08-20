import { Card } from "@/components/ui/card";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Exo_2 } from "next/font/google";
import React from "react";

const exo_2 = Exo_2({
  weight: "700",
  subsets: ["latin-ext"],
  display: "swap",
});

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

export default Layout;
