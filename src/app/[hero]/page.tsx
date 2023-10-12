import React from "react";
import { Hero } from "@/components/Hero";
import { HeroHistory } from "@/components/HeroHistory";
import dbHero from "@/utils/dbHero";

export default function Page() {
  return (
    <>
      <section className="mx-auto max-w-[80%] mt-7 mb-16">
        <Hero />
      </section>

      <section className="flex flex-col justify-center items-center mx-auto max-w-[60%] mb-16">
        <h1 className="text-4xl mt-3 font-bold">{dbHero.historia.titulo}</h1>
        <p className="mt-3 text-center text w-[70%] mb-5">{dbHero.historia.description}</p>

        <div className="mt-3">
          <iframe allowFullScreen className="aspect-video" width={'800'} src={dbHero.historia.url_video} title="YouTube video player"></iframe>
        </div>
      </section>

      <section className="mx-auto max-w-[70%]">
        <HeroHistory paragrafos={dbHero.historia.paragrafos} />
      </section>
    </>
  );
}