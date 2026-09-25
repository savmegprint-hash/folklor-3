// Naši radovi — realizacije za KUD-ove. Lako proširivo: dodajte novi objekat u niz.
// `tip` određuje filter (Majice, Polo majice, Trenerke, Dukserice, Promotivni proizvodi, Ostalo).

export const radovi = [
  {
    slug: "kud-sloga-polo",
    kud: "KUD Sloga",
    proizvod: "Polo majice",
    tip: "Polo majice",
    opis: "Personalizovane polo majice sa identitetom kluba — logo, naziv i boje KUD-a.",
    alt: "Polo majice sa logom KUD-a — realizacija",
    slika: "https://media.base44.com/images/public/6ab2c44111e59d9d1217cd9e/bc91af5c5_generated_76be4eb2.jpg",
  },
  {
    slug: "kud-mladost-trenerke",
    kud: "KUD Mladost",
    proizvod: "Trenerke",
    tip: "Trenerke",
    opis: "Kompletne trenerke sa sublimacijom i bojama kluba, jedinstven dizajn za nastupe.",
    alt: "Personalizovane trenerke za folklorni klub — realizacija",
    slika: "https://media.base44.com/images/public/6ab2c44111e59d9d1217cd9e/4cabf2f8e_generated_c124f3fe.jpg",
  },
  {
    slug: "kud-omladina-majice",
    kud: "KUD Omladina",
    proizvod: "Majice",
    tip: "Majice",
    opis: "Personalizovane majice sa logom, nazivom i zastavom za članove KUD-a.",
    alt: "Personalizovane majice za KUD — realizacija",
    slika: "https://media.base44.com/images/public/6ab2c44111e59d9d1217cd9e/499c2a3c0_generated_04b09f33.jpg",
  },
  {
    slug: "kud-jedinstvo-dukserice",
    kud: "KUD Jedinstvo",
    proizvod: "Dukserice",
    tip: "Dukserice",
    opis: "Premium dukserice sa vezom i natpisom kluba, tople za hladnije nastupe.",
    alt: "Dukserice sa vezom za KUD — realizacija",
    slika: "https://media.base44.com/images/public/6ab2c44111e59d9d1217cd9e/908775d61_generated_2e3820c5.jpg",
  },
  {
    slug: "shkd-morava-stuttgart-majice",
    kud: "SHKD Morava Stuttgart",
    proizvod: "Majice",
    tip: "Majice",
    opis: "Personalizovane majice sa identitetom kluba — logo, naziv i boje SHKD Morava Stuttgart.",
    alt: "Personalizovane majice za SHKD Morava Stuttgart — realizacija",
    slika: "https://media.base44.com/images/public/6ab2c44111e59d9d1217cd9e/244308107_SHKD_MORAVA.PNG",
    slike: [
      "https://media.base44.com/images/public/6ab2c44111e59d9d1217cd9e/244308107_SHKD_MORAVA.PNG",
    ],
  },
];

export const filteri = ["Sve", "Majice", "Polo majice", "Trenerke", "Dukserice", "Promotivni proizvodi", "Ostalo"];