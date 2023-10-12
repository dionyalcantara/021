import { CardHero } from "@/components/CardHero";

import dbHero from "../utils/dbHero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-5xl m-10 font-bold">HERÓIS</h1>
      <div className="flex flex-wrap justify-center gap-4">
        <CardHero imgCard={{
          hero: dbHero.hero.url_foto,
          badge: dbHero.classe.tank.badge_url,
          name: dbHero.hero.nome
        }}/>

      </div>
    </main>
  )
}
