import { Sidebar } from "@/components/ui/sidebar";

const buckets=[{name:'bucket1', id: 4},{name:'bucket2', id:5},{name:'bucket3', id:9}]

export default function MusicPage() {
    return (
      <>
        <div className="hidden md:block bg-black font-secondary font-semibold">
          <div className="">
            <div className="">
              <div className="grid lg:grid-cols-5">
                <Sidebar buckets={buckets} className="hidden lg:block border bottom-1 border-slate-800 rounded-md" />
                <div className="col-span-3 lg:col-span-4 border  border-l-2 border-slate-800 h-screen">
                  <div className="h-full px-4 py-6 lg:px-8">
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }