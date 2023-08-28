import { Barcharts } from "@/components/barchart";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LiaRupeeSignSolid } from "react-icons/lia";
import Link from "next/link";

export default function Page({ params }: { params: { id: string } }) {
  return (
    <>
      <span>Bucket {params.id}</span>
      <div className="flex flex-col md:flex">
        <div className="flex-1 space-y-4 p-4 pt-5">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card className=" bg-emerald-100 text-emerald-600">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Balance
                </CardTitle>
                <LiaRupeeSignSolid />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold flex">
                  <div className="my-auto">
                    <LiaRupeeSignSolid className="w-5" />
                  </div>
                  <span>45,087</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  +20.1% from last month
                </p>
              </CardContent>
            </Card>
            <Card className=" bg-emerald-100 text-emerald-600">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                {/* <CardTitle className="text-sm font-medium">
                  Total Balance
                </CardTitle>
                <LiaRupeeSignSolid /> */}
              </CardHeader>
              <CardContent>
                {/* <div className="text-2xl font-bold flex">
                  <div className="my-auto">
                    <LiaRupeeSignSolid className="w-5" />
                  </div>
                  <span>45,087</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  +20.1% from last month
                </p> */}
              </CardContent>
            </Card>
            <Card className=" text-rose-600 bg-rose-100">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Spent</CardTitle>
                <LiaRupeeSignSolid />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold flex">
                  <div className="my-auto">
                    <LiaRupeeSignSolid className="w-5" />
                  </div>
                  <span>50</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  -80.1% from last month
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="lg:col-span-4 col-span-3"></Card>
            <Card className="col-span-3 lg:relative">
              <CardHeader>
                <CardTitle>Monthly Spending Overview</CardTitle>
              </CardHeader>
              <CardContent className="pl-2">
                <Barcharts />
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-1 text-center font-black text-4xl">
            <Card className="col-span-4 p-5">
              {/* <CardContent>Your Expenses, Your Control</CardContent> */}
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
