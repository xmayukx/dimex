"use client";
import { cn } from "@/lib/utils";
import { Button } from "./button";
import { ScrollArea } from "./scroll-area";
import { VscGraphLine } from "react-icons/vsc";
import { TbBrandBitbucket } from "react-icons/tb";
import { SidebarProps, Buckets } from "../../types/Buckets";
// interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
//   buckets: Buckets[];
// }

// interface Buckets {
//   name: string;
//   id: number;
// }

export function Sidebar({ buckets, ...className }: SidebarProps) {
  return (
    <div className={cn("pb-12", className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-2xl font-bold tracking-tight font-primary">
            Dimex
          </h2>
          <div className="space-y-1">
            <Button variant="ghost" className="w-full justify-start">
              <VscGraphLine />
              <span className="ml-2">Analytics</span>
            </Button>
          </div>
        </div>
        <div className="py-2">
          <h2 className="relative px-7 text-lg font-semibold tracking-tight">
            Buckets
          </h2>
          <ScrollArea className="h-[300px] px-1">
            <div className="space-y-1 p-2">
              {buckets?.map((bucket: Buckets, i: number) => (
                <Button
                  key={`${i + 1}`}
                  variant="ghost"
                  className="w-full justify-start font-normal"
                  onClick={() => console.log("clicked")}
                >
                  <TbBrandBitbucket />
                  <span className="ml-2"> {bucket.name}</span>
                </Button>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
}
