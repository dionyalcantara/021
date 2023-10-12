'use client'

import React from "react";
import Image from "next/image";
import arrow from "@/utils/arrow.svg"

type ParagrafosProps = {
  paragrafos: {
    subtitulo: string;
    paragrafo: string[];
    url_representacao: string;
  }[];
};

export function HeroHistory({ paragrafos }: ParagrafosProps) {
  const [paragrafoVisivel, setParagrafoVisivel] = React.useState({[paragrafos[0].subtitulo]: [true, true] });  

  const toggleParagraph = (subtitulo:string):void => {
    setParagrafoVisivel((prevState) => {
      const paragraphKey = Object.keys(prevState)[0]
      const prevSubtitleVisible = prevState[paragraphKey][0]
      const verifySubtitle = (subtitulo === paragraphKey)
      return {
        [subtitulo]: [verifySubtitle ? !prevSubtitleVisible : true, true]
      }
    });
  };

  return (
    <div className="flex mb-10">
      <div className="w-[40%]">
        {
          paragrafos.map((paragrafo, i) => {
            const isVisible = paragrafoVisivel[paragrafo.subtitulo]
            return (
              <div key={paragrafo.subtitulo} className=" flex flex-col">
                <h2
                  className={`flex justify-between w-full text-xl font-bold cursor-pointer py-4 ${i === 0 ? '' : 'border-t'} `}
                  onClick={() => toggleParagraph(paragrafo.subtitulo)}
                >
                  {paragrafo.subtitulo}
                  <Image
                    className={`invert ${isVisible && isVisible[0] ? 'rotate-180' : ''}`}
                    src={arrow}
                    width={25}
                    height={25}
                    alt="icone seta"
                  />
                </h2>
                {isVisible && isVisible[0] && paragrafo.paragrafo
                  .map((parag) => <p className="mb-5" key={parag}>{parag}</p>)}
              </div>
            );
          })
        }
      </div>

      <div className="w-[60%]">
        {
          paragrafos.map((paragrafo) => {
            return (
              <div key={paragrafo.url_representacao} className="ml-7 self-start">
                {
                  paragrafoVisivel[paragrafo.subtitulo] &&
                    <Image
                      className="aspect-video object-cover"
                      src={paragrafo.url_representacao}
                      width={1280}
                      height={720}
                      alt="arou"
                    />
                }
              </div>
            )
          })
        }
      </div>

    </div>
  );
}
