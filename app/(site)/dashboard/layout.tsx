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
import { Sidebar } from "@/components/ui/sidebar";

const buckets = [
  { name: "Tax", id: 4 },
  { name: "Medical", id: 5 },
  { name: "Education", id: 9 },
];
const exo_2 = Exo_2({
  weight: "700",
  subsets: ["latin-ext"],
  display: "swap",
});

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="md:block bg-black font-secondary font-semibold">
        <div className="grid lg:grid-cols-7 grid-cols-3">
          <Sidebar
            buckets={buckets}
            className="hidden col-span-1 border bottom-1 border-slate-800 rounded-md"
          />
          <div className="col-span-2 lg:col-span-6 border border-l-2 border-slate-800 h-screen">
            <div className="h-full px-4 py-6 lg:px-8">
              <main>{children}</main>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
