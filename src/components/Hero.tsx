import React from "react";
import Image from "next/image";
import dbHero from "@/utils/dbHero";

export function Hero() {
  return (
    <div className="flex flex-col items-center ">

      <div className="w-[80%] relative">
        <Image className="w-full h-auto" src={dbHero.hero.url_wallpaper} width={1280} height={720} alt="" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent"></div>
      </div>

      <h1 className="text-8xl font-bold uppercase mt-[-100px] mb-4 z-0 ">{dbHero.hero.nome}</h1>

      <div className={`w-[80%] h-[100%] flex flex-col items-center mt-2 p-4 border border-white`}>
        <div className="flex items-center h-[100%]">
          <div className="w-[50%]">
            <p>{dbHero.hero.descricao}</p>
          </div>
          <hr  className="border-l border-white h-[100px] mx-6" />
          <div className="w-[50%]">
            <div className="flex items-center gap-2 uppercase mb-2">
              <Image className="border rounded-full p-2" src={dbHero.classe.tank.badge_url_white} width={40} height={40} alt="" />
              <span>{dbHero.hero.classe}</span>
            </div>
            
            <div className="flex items-center gap-2  mb-2">
              <Image className="border rounded-full p-2" src={dbHero.hero.localBadge} width={40} height={40} alt="" />
              <span>{dbHero.hero.local}</span>
            </div>

            <div className="flex items-center gap-2 mb-2">
              <Image className="border rounded-full p-2" src={dbHero.hero.idadeBadge} width={40} height={40} alt="" />
              <span>{dbHero.hero.idade}</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}