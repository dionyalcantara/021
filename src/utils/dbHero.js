import dva from './dva.png';
import tank from './Dark_Circle_Tank.svg'

const dbHero = {
  "hero": {
    "nome": "D.Va",
    "idade": "22 de jun. (Idade: 21)",
    "classe": "tank",
    "url_foto": dva,
    "url_wallpaper": "https://images.blz-contentstack.com/v3/assets/blt2477dcaf4ebd440c/bltf8e9415141b0ec36/631a8b65e7bdcf0dd996c8e1/1600_Dva.jpg",
    "descricao": "D.Va é uma ex-gamer profissional que sabe como usar suas habilidades para pilotar um mecha de última geração na defesa de sua cidade natal.",
    "local": "Base MEKA, Busan, Coreia do Sul (anteriormente), Observatório: Gibraltar"
  },
  "classe": {
    "suport": {
      "badge_url": "http://exemplo.com/badge_suport.png"
    },
    "tank": {
      "badge_url": tank,
    },
    "dps": {
      "badge_url": "http://exemplo.com/badge_dps.png"
    }
  },
  "historia": {
    "titulo": "HISTÓRIA DE ORIGEM",
    "description": "Hana Song, mais conhecida pelo artístico “D.Va”, é a número 1. Como ex-jogadora profissional, D.Va usa suas habilidades para pilotar um mecha e defender a Coreia do Sul. Ela e os outros pilotos, conhecidos como Esquadrão MEKA, são a linha de defensa entre o país e os Kishin invasores, uma ameaça mecânica das profundezas.",
    "url_video": "https://www.youtube.com/watch?v=q7j2d6YCQbg",
    "paragrafos": [
      {
        "subtitulo": "KISHIN",
        "url_representacao": "images.blz-contentstack.com/v3/assets/blt2477dcaf4ebd440c/blt61b8f52c5724688d/638809023cbefd11108111d1/dva-00.jpg",
        "ordem": 1,
        "paragrafo": ["Há mais de vinte anos, a Coreia do Sul foi atacada por um ômnico monstruoso que surgiu das profundezas do Mar da China Oriental. O construto enorme causou danos catastróficos às cidades costeiras antes de ser forçado a recuar para debaixo das ondas. Em resposta, o governo da Coreia do Sul desenvolveu uma unidade drone blindada e mecanizada, chamada MEKA, para proteger ambientes urbanos em combates futuros com a ameaça ômnica.", "Os medos do governo se mostraram fundados à medida que um padrão de ataques perturbador surgiu. A cada determinado número de anos, a monstruosidade se levantava do mar para atacar a Coreia do Sul e seus vizinhos. O ômnico aprendia com cada ataque, sempre se reconfigurando em uma forma diferente e aparecendo com novas armas e funcionalidades. Cada incidente terminava em um impasse, com a monstruosidade derrotada, porém não destruída."]
      },
      {
        "subtitulo": "ESQUADRÃO MEKA",
        "url_representacao": "images.blz-contentstack.com/v3/assets/blt2477dcaf4ebd440c/blt72d062619b59e3d8/63880902bbfd340e8ad2e41b/dva-01.jpg",
        "ordem": 2,
        "paragrafo": ["Com o ômnico sempre se adaptando, ele acabou conseguindo interferir no controle de drones da rede MEKA, forçando os militares a colocar pilotos nos mechas. Com dificuldades para achar candidatos apropriados, o governo recorreu aos jogadores de videogame profissionais, que tinham os reflexos e instintos necessários para operar os sistemas avançados das armas dos mechas. Estrelas decidiram se juntar à força através do serviço militar obrigatório do país, incluindo a campeã mundial Hana Song, conhecida como “D.Va.” Famosa por suas habilidades de elite, D.Va era uma competidora feroz, que jogava para vencer a qualquer custo, e tinha a merecida reputação de não ter piedade dos adversários.","D.Va logo se tornou a melhor piloto MEKA e passou a transmitir suas operações de combate para seus queridos fãs, mas os ataques crescentes dos ômnicos Kishin à Coreia do Sul começaram a ser um desafio para o esquadrão MEKA. Enquanto antes a MEKA tinha meses de treino entre ataques ômnicos, um ataque repentino entre os intervalos previstos forçou Hana a enfrentar os Kishin sozinha. A mídia louvou D.Va por ter defendido a Coreia do Sul sozinha, mas, na verdade, a superestrela por um triz não perde a última vida. Quando a ameaça do Setor Nulo chegou à Coreia, D.Va recebeu uma dispensa especial da sua comandante para se unir à nova guarda da Overwatch, avaliando as ameaças do Setor Nulo ao lado de Cole Cassidy e dos novos recrutas."]
      }
    ]
  },
  "habilidades": [
    {
      "nome": "Ataque Poderoso",
      "badge_url": "http://exemplo.com/badge_ataque_poderoso.png",
      "descricao": "Ataque forte e devastador.",
      "vinculo_hero": "Herói Exemplo"
    },
    {
      "nome": "Cura Rápida",
      "badge_url": "http://exemplo.com/badge_cura_rapida.png",
      "descricao": "Recupera a saúde rapidamente.",
      "vinculo_hero": "Herói Exemplo"
    }
  ]
}

export default dbHero;
