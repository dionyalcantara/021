import { Hero } from "@/components/Hero";
import dbHero from "@/utils/dbHero";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <section className="flex flex-col justify-center items-center mx-auto max-w-[80%] mt-7">
        <Hero />
      </section>
    </>
  );
}