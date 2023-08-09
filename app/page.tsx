// "use client";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { BsGoogle } from "react-icons/bs";
import { Exo_2 } from "next/font/google";
import { Barcharts } from "@/components/barchart";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
const exo_2 = Exo_2({
  weight: "700",
  subsets: ["latin-ext"],
  display: "swap",
});
export default function Home() {
  return (
    <main className="flex lg:mx-10 flex-col bg-black">
      <nav className="flex flex-col justify-start items-start pt-5 px-10 sticky top-0 z-50 bg-black">
        <span className={exo_2.className}>
          <span className="text-3xl font-primary">DIMEX</span>
        </span>
      </nav>
      <div className="flex flex-col md:flex">
        <div className="flex-1 space-y-4 p-8 pt-6">
          <Tabs defaultValue="overview" className="space-y-4">
            <TabsContent value="overview" className="space-y-4">
              <div className="grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card className=" bg-emerald-100 text-emerald-600">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Total Balance
                    </CardTitle>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-4 w-4 text-muted-foreground"
                    >
                      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">$45,231</div>
                    <p className="text-xs text-muted-foreground">
                      +20.1% from last month
                    </p>
                  </CardContent>
                </Card>
                <Card className=" text-rose-600 bg-rose-100">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Spent</CardTitle>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-4 w-4 text-muted-foreground"
                    >
                      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">$50</div>
                    <p className="text-xs text-muted-foreground">
                      -80.1% from last month
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="lg:col-span-4 col-span-3">
                  <CardHeader>
                    <CardTitle>Monthly Spending Overview</CardTitle>
                  </CardHeader>
                  <CardContent className="pl-2">
                    <Barcharts />
                  </CardContent>
                </Card>
                <Card className="col-span-3">
                  <CardHeader>
                    <CardTitle>Recent Sales</CardTitle>
                    <CardDescription>
                      You made 265 sales this month.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>{/* <RecentSales /> */}</CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* <div className="flex flex-col">
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
      </div> */}
    </main>
  );
}
