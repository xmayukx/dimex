import { Button } from "@/components/ui/button";
import { EnvelopeOpenIcon } from "@radix-ui/react-icons";

export default () => {
  return (
    <main className="flex lg:mx-[35rem] flex-col bg-black space-y-[10rem]">
      <section className="flex flex-col justify-start items-start m-24">
        <h1 className="text-6xl font-extrabold font-primary py-2">DIMEX</h1>
        <div className="text-3xl font-bold font-primary">
          Track <span className="text-emerald-400">Save </span>{" "}
          <span className=" text-indigo-400">Succeed.</span>
        </div>
      </section>

      <div className="flex justify-center mt-10">
        <Button className="p-6 text-base">
          <EnvelopeOpenIcon className="mr-2 h-5 w-5" /> Login with Email
        </Button>
      </div>
    </main>
  );
};
