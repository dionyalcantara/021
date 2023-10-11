import Image, { StaticImageData } from "next/image"
import { Roboto } from "next/font/google"

const roboto = Roboto({
  weight: '500',
  subsets: ['latin'],
  display: 'swap',
})

interface CardHeroProps {
  imgCard: {
    hero: StaticImageData,
    badge: StaticImageData,
    name: string
  }
}

export function CardHero({ imgCard }: CardHeroProps) {
  console.log(imgCard)
  return(
    <>
      <div className={`
      bg-slate-300
        border-4 border-white
        w-[200px] h-[300px]
        hover:scale-105 ease-in duration-100
        grid
        grid-rows-4
        divide-x
      `}
      >
        <div className="h-70 overflow-hidden row-span-3">
          <Image className="object-cover w-full h-full" src={imgCard.hero} alt="hero"/>
        </div>
        <div className={`
          h-30 bg-slate-200
          flex justify-center items-center
          gap-1`}
        >
          <Image src={imgCard.badge} width={20} height={20} alt="badge-role" />
          <span className={`${roboto.className} text-sm`}>
            {imgCard.name.toUpperCase()}
          </span>
        </div>
      </div>
    </>
  )
}