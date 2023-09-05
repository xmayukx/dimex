import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { Buckets } from "@/types/Buckets";
import { EcoTabsProps } from "@/types/EcoTabs";
const EcoTabs = (props: EcoTabsProps) => {
  var amount = props.amount.toLocaleString("en-IN");
  return (
    <Card
      className={
        props.isBalance
          ? "bg-emerald-100 text-emerald-600"
          : "text-rose-600 bg-rose-100"
      }
    >
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">
          {props.isBalance ? "Total Balance " : "Expenditure "} of Bucket
        </CardTitle>
        <LiaRupeeSignSolid />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold flex">
          <div className="my-auto">
            <LiaRupeeSignSolid className="w-5" />
          </div>
          <span>{amount}</span>
        </div>
        <p className="text-xs text-muted-foreground">
          {props.stats}% from last month
        </p>
      </CardContent>
    </Card>
  );
};

export default EcoTabs;
