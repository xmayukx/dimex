import { Barcharts } from "@/components/barchart";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LiaRupeeSignSolid } from "react-icons/lia";
import Link from "next/link";
import EcoTabs from "../../components/ecoTabs";
import { Buckets } from "@/types/Buckets";
export default function Page({ params }: { params: { id: string } }) {
  return (
    <>
      <span>Bucket {params.id}</span>
      <div className="flex flex-col md:flex">
        <div className="flex-1 space-y-4 p-4 pt-5">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-3">
            <EcoTabs isBalance={true} amount={45780} stats={11.5} />
            <Card className=" bg-emerald-100 text-emerald-600">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2"></CardHeader>
              <CardContent></CardContent>
            </Card>
            <EcoTabs isBalance={false} amount={780} stats={8.5} />
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
