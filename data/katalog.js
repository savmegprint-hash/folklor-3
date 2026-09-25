// Katalog proizvoda — lako proširivo. Dodajte nove proizvode u niz `proizvodi`
// i nove podkategorije u `kategorije`. Slike se menjaju u polju `slika`.
// `opis` je prirodan SEO tekst (bez izmišljenih tehničkih podataka), `alt` je alt tekst slike.

export const kategorije = [
  {
    slug: "tekstil",
    naziv: "Tekstil",
    kratakOpis: "Majice, polo majice, trenerke, dukserice, kape i druga tekstilna oprema.",
    podkategorije: [
      { slug: "majice", naziv: "Majice" },
      { slug: "polo-majice", naziv: "Polo majice" },
      { slug: "trenerke", naziv: "Trenerke" },
      { slug: "dukserice", naziv: "Dukserice" },
      { slug: "kape", naziv: "Kape" },
      { slug: "kabanice", naziv: "Kabanice" },
      { slug: "sportske-majice", naziv: "Sportske majice" },
      { slug: "majice-dugih-rukava", naziv: "Majice dugih rukava" },
    ],
  },
  {
    slug: "promotivni-proizvodi",
    naziv: "Promotivni proizvodi",
    kratakOpis: "Olovke, upaljači, privesci, članske kartice i drugi personalizovani proizvodi.",
    podkategorije: [
      { slug: "olovke", naziv: "Olovke" },
      { slug: "upaljaci", naziv: "Upaljači" },
      { slug: "privesci", naziv: "Privesci" },
      { slug: "clanske-kartice", naziv: "Članske kartice" },
      { slug: "solje", naziv: "Šolje" },
      { slug: "ostalo", naziv: "Ostalo" },
    ],
  },
  {
    slug: "dodatna-oprema",
    naziv: "Dodatna oprema",
    kratakOpis: "Različiti proizvodi i rešenja prilagođena potrebama KUD-a.",
    podkategorije: [],
  },
];

export const proizvodi = [
  {
    slug: "majice",
    kategorija: "tekstil",
    naziv: "Majice",
    kratkiOpis: "Personalizovane majice za KUD-ove, nastupe, događaje i članove.",
    intro: "Personalizovane majice za KUD-ove, nastupe, događaje, članove i posebne prilike.",
    opis:
      "Majice za KUD su jedan od najtraženijih proizvoda za folklorne klubove. Namenjene su nastupima, probama, putovanjima i svakodnevnom korišćenju, a mogu se prilagoditi identitetu kluba. Mogućnosti personalizacije obuhvataju logo, naziv, ime i prezime člana, zastavu i druge vizuelne elemente, u zavisnosti od izabrane vrste štampe.",
    alt: "Personalizovane majice za KUD",
    slika: "https://media.base44.com/images/public/6ab2c44111e59d9d1217cd9e/a70889c18_generated_6337061b.jpg",
    karakteristike: [
      { label: "Materijal", vrednost: "100% pamuk ili tehnički poliester (u zavisnosti od modela)" },
      { label: "Gramatura", vrednost: "oko 180 g/m² (standardni model)" },
      { label: "Kroj", vrednost: "Regular fit" },
      { label: "Kragna", vrednost: "Okrugla kragna" },
      { label: "Boje", vrednost: "Standardne boje" },
      { label: "Štampa", vrednost: "Sito štampa, transfer ili sublimacija" },
    ],
    personalizacija: ["Logo KUD-a", "Naziv", "Ime i prezime", "Zastava", "Natpis", "Vizuelni elementi"],
  },
  {
    slug: "polo-majice",
    kategorija: "tekstil",
    naziv: "Polo majice",
    kratkiOpis: "Elegantne polo majice sa personalizacijom za identitet KUD-a.",
    intro: "Elegantne polo majice sa personalizacijom prilagođenom identitetu vašeg KUD-a.",
    opis:
      "Polo majice za KUD predstavljaju elegantniju varijantu klasičnih majica, pogodnu za svečanije prilike i predstavljanje kluba. Izrađuju se u različitim bojama, a personalizacija se radi sito štampom ili vezom, prema modelu.",
    alt: "Personalizovane polo majice za KUD",
    slika: "https://media.base44.com/images/public/6ab2c44111e59d9d1217cd9e/668377383_generated_fb2d2c51.jpg",
    karakteristike: [
      { label: "Materijal", vrednost: "Pamuk ili mešavina (u zavisnosti od modela)" },
      { label: "Gramatura", vrednost: "oko 170 g/m² (u zavisnosti od modela)" },
      { label: "Kroj", vrednost: "Polo kroj" },
      { label: "Kragna", vrednost: "Polo kragna" },
      { label: "Boje", vrednost: "Standardne boje" },
      { label: "Štampa", vrednost: "Sito štampa ili vez" },
    ],
    personalizacija: ["Logo KUD-a", "Naziv", "Ime i prezime", "Natpis", "Boje kluba"],
  },
  {
    slug: "trenerke",
    kategorija: "tekstil",
    naziv: "Trenerke",
    kratkiOpis: "Kompletne trenerke sa sublimacijom i jedinstvenim dizajnom KUD-a.",
    intro: "Kompletne trenerke sa mogućnošću potpune personalizacije i sublimacije prema dizajnu vašeg KUD-a.",
    opis:
      "Trenerke za KUD su kompletni setovi (gornji i donji deo) koji se najčešće izrađuju sublimacijom, što omogućava potpuno jedinstven dizajn u bojama kluba. Namijenjene su nastupima, probama i putovanjima, a mogu se prilagoditi identitetu folklornog kluba.",
    alt: "Personalizovane trenerke za folklorni klub",
    slika: "https://media.base44.com/images/public/6ab2c44111e59d9d1217cd9e/ec41d1710_generated_4dadac96.jpg",
    karakteristike: [
      { label: "Sastav", vrednost: "Komplet: gornji deo + donji deo" },
      { label: "Materijal", vrednost: "Poliester / mokra likra (u zavisnosti od modela)" },
      { label: "Zatvaranje", vrednost: "Patent na gornjem delu" },
      { label: "Džepovi", vrednost: "Džepovi na gornjem i donjem delu" },
      { label: "Personalizacija", vrednost: "Sublimacija i štampa" },
      { label: "Dizajn", vrednost: "Mogućnost jedinstvenog dizajna KUD-a" },
    ],
    personalizacija: ["Logo KUD-a", "Naziv", "Ime i prezime", "Boje kluba", "Jedinstven dizajn", "Sublimacija"],
  },
  {
    slug: "dukserice",
    kategorija: "tekstil",
    naziv: "Dukserice",
    kratkiOpis: "Premium dukserice sa personalizacijom za vaš KUD.",
    intro: "Premium dukserice sa personalizacijom za identitet vašeg KUD-a.",
    opis:
      "Dukserice za KUD su topli i udobni komadi pogodni za hladnije dane, probe i putovanja. Izrađuju se od premium materijala, a personalizacija se radi sito štampom ili vezom, prema modelu.",
    alt: "Personalizovane dukserice za KUD",
    slika: "https://media.base44.com/images/public/6ab2c44111e59d9d1217cd9e/83496ddd9_generated_6c77c94d.jpg",
    karakteristike: [
      { label: "Materijal", vrednost: "Premium materijal (u zavisnosti od modela)" },
      { label: "Gramatura", vrednost: "oko 280–350 g/m² (u zavisnosti od modela)" },
      { label: "Kroj", vrednost: "Regular fit" },
      { label: "Kapuljača", vrednost: "Sa kapuljačom" },
      { label: "Boje", vrednost: "Standardne boje" },
      { label: "Štampa", vrednost: "Sito štampa ili vez" },
    ],
    personalizacija: ["Logo KUD-a", "Naziv", "Natpis", "Dizajn KUD-a"],
  },
  {
    slug: "kape",
    kategorija: "tekstil",
    naziv: "Kape",
    kratkiOpis: "Kape sa personalizacijom i mogućnošću veza prema modelu.",
    intro: "Kape i kačketi sa personalizacijom i mogućnošću veza prema modelu.",
    opis:
      "Kape i kačketi za KUD su praktičan dodatak opremi kluba, pogodan za nastupe i svakodnevno nošenje. Personalizacija se radi štampom ili vezom, u zavisnosti od modela.",
    alt: "Kape sa logom KUD-a",
    slika: "https://media.base44.com/images/public/6ab2c44111e59d9d1217cd9e/f89e2666b_generated_aa9525ba.jpg",
    karakteristike: [
      { label: "Model", vrednost: "Kape i kačketi (u zavisnosti od modela)" },
      { label: "Materijal", vrednost: "Pamuk / mešavina" },
      { label: "Boje", vrednost: "Standardne boje" },
      { label: "Personalizacija", vrednost: "Štampa ili vez" },
      { label: "Veličine", vrednost: "Univerzalna veličina" },
    ],
    personalizacija: ["Logo KUD-a", "Naziv", "Vez (u zavisnosti od modela)"],
  },
  {
    slug: "kabanice",
    kategorija: "tekstil",
    naziv: "Kabanice / Vetrovke",
    kratkiOpis: "Lake kabanice i vetrovke sa mogućnošću personalizacije.",
    intro: "Lake kabanice i vetrovke sa mogućnošću personalizacije prema modelu.",
    opis:
      "Kabanice i vetrovke za KUD su laki komadi namenjeni hladnijim danima i nastupima na otvorenom. Lako se sklapaju i nose, a personalizacija je moguća prema modelu.",
    alt: "Kabanice i vetrovke za KUD",
    slika: "https://media.base44.com/images/public/6ab2c44111e59d9d1217cd9e/efd0795a6_generated_5435e7eb.jpg",
    karakteristike: [
      { label: "Materijal", vrednost: "Poliester (lagani)" },
      { label: "Kroj", vrednost: "Lagan kroj" },
      { label: "Namena", vrednost: "Za hladnije dane i nastupe" },
      { label: "Boje", vrednost: "Standardne boje" },
      { label: "Personalizacija", vrednost: "Moguća (u zavisnosti od modela)" },
      { label: "Pakovanje", vrednost: "Lako sklopive" },
    ],
    personalizacija: ["Logo KUD-a", "Naziv", "Natpis"],
  },
  {
    slug: "sportske-majice",
    kategorija: "tekstil",
    naziv: "Sportske majice",
    kratkiOpis: "Tehničke sportske majice za treninge i aktivnosti.",
    intro: "Tehničke sportske majice za treninge i aktivnosti, sa mogućnošću sublimacije.",
    opis:
      "Sportske majice za KUD su tehničke majice namenjene treninzima i aktivnostima, sa mogućnošću sublimacije i prilagođavanja bojama kluba. Materijal je propustljiv i prijatan za nošenje.",
    alt: "Sportske majice za KUD",
    slika: "https://media.base44.com/images/public/6ab2c44111e59d9d1217cd9e/e36278b9d_generated_e6ffe22a.jpg",
    karakteristike: [
      { label: "Materijal", vrednost: "Tehnički tekstil" },
      { label: "Namena", vrednost: "Treninzi i aktivnosti" },
      { label: "Kroj", vrednost: "Sportski kroj" },
      { label: "Disanje", vrednost: "Materijal koji diše" },
      { label: "Personalizacija", vrednost: "Sublimacija (u zavisnosti od modela)" },
      { label: "Boje", vrednost: "Prema dizajnu" },
    ],
    personalizacija: ["Logo KUD-a", "Naziv", "Ime i prezime", "Sublimacija", "Dizajn"],
  },
  {
    slug: "majice-dugih-rukava",
    kategorija: "tekstil",
    naziv: "Majice dugih rukava",
    kratkiOpis: "Majice dugih rukava sa različitim mogućnostima personalizacije.",
    intro: "Majice dugih rukava sa različitim mogućnostima personalizacije.",
    opis:
      "Majice dugih rukava za KUD su pogodne za hladnije dane i nastupe na otvorenom. Personalizacija se radi sito štampom, transferom ili sublimacijom, u zavisnosti od modela.",
    alt: "Majice dugih rukava za KUD",
    slika: "https://media.base44.com/images/public/6ab2c44111e59d9d1217cd9e/c62ae1297_generated_40cec622.jpg",
    karakteristike: [
      { label: "Materijal", vrednost: "Pamuk ili mešavina (u zavisnosti od modela)" },
      { label: "Rukavi", vrednost: "Dugi rukavi" },
      { label: "Kroj", vrednost: "Regular fit" },
      { label: "Boje", vrednost: "Standardne boje" },
      { label: "Štampa", vrednost: "Sito štampa, transfer ili sublimacija" },
      { label: "Personalizacija", vrednost: "Prema modelu" },
    ],
    personalizacija: ["Logo KUD-a", "Naziv", "Natpis", "Ime i prezime"],
  },
  {
    slug: "olovke",
    kategorija: "promotivni-proizvodi",
    naziv: "Olovke",
    kratkiOpis: "Personalizovane olovke sa identitetom vašeg KUD-a.",
    intro: "Personalizovane olovke sa identitetom vašeg KUD-a.",
    opis:
      "Olovke su praktičan i pristupačan promotivni proizvod za KUD, pogodan za poklone, događaje i svakodnevnu upotrebu. Personalizacija se radi štampom ili gravurom, u zavisnosti od modela.",
    alt: "Personalizovane olovke za KUD",
    slika: "https://media.base44.com/images/public/6ab2c44111e59d9d1217cd9e/3d337ad47_generated_f378ee02.jpg",
    karakteristike: [
      { label: "Model", vrednost: "Različiti modeli" },
      { label: "Materijal", vrednost: "Metal / plastika (u zavisnosti od modela)" },
      { label: "Personalizacija", vrednost: "Štampa ili gravura" },
      { label: "Boje", vrednost: "Standardne boje" },
      { label: "Pakovanje", vrednost: "Prema količini" },
    ],
    personalizacija: ["Logo KUD-a", "Naziv", "Natpis"],
  },
  {
    slug: "upaljaci",
    kategorija: "promotivni-proizvodi",
    naziv: "Upaljači",
    kratkiOpis: "Personalizovani upaljači sa natpisom ili logom KUD-a.",
    intro: "Personalizovani upaljači sa natpisom ili logom KUD-a.",
    opis:
      "Upaljači sa logom ili natpisom KUD-a su mali promotivni proizvodi pogodni za događaje i poklone. Personalizacija se radi štampom.",
    alt: "Personalizovani upaljači za KUD",
    slika: "https://media.base44.com/images/public/6ab2c44111e59d9d1217cd9e/0cc01cb7c_generated_fa03046e.jpg",
    karakteristike: [
      { label: "Model", vrednost: "Različiti modeli" },
      { label: "Materijal", vrednost: "Metal / plastika" },
      { label: "Personalizacija", vrednost: "Štampa" },
      { label: "Boje", vrednost: "Standardne boje" },
      { label: "Pakovanje", vrednost: "Prema količini" },
    ],
    personalizacija: ["Logo KUD-a", "Naziv", "Natpis"],
  },
  {
    slug: "privesci",
    kategorija: "promotivni-proizvodi",
    naziv: "Privesci",
    kratkiOpis: "Personalizovani privesci za ključeve sa identitetom KUD-a.",
    intro: "Personalizovani privesci za ključeve sa identitetom KUD-a.",
    opis:
      "Privesci za ključeve su praktičan promotivni dodatak sa identitetom KUD-a. Izrađuju se u različitim materijalima, a personalizacija se radi štampom ili gravurom.",
    alt: "Personalizovani privesci za KUD",
    slika: "https://media.base44.com/images/public/6ab2c44111e59d9d1217cd9e/8e94d9919_generated_f4324a86.jpg",
    karakteristike: [
      { label: "Model", vrednost: "Različiti modeli" },
      { label: "Materijal", vrednost: "Metal / plastika / tkanina" },
      { label: "Personalizacija", vrednost: "Štampa ili gravura" },
      { label: "Boje", vrednost: "Standardne boje" },
      { label: "Pakovanje", vrednost: "Prema količini" },
    ],
    personalizacija: ["Logo KUD-a", "Naziv", "Natpis"],
  },
  {
    slug: "clanske-kartice",
    kategorija: "promotivni-proizvodi",
    naziv: "Članske kartice",
    kratkiOpis: "Članske kartice sa personalizacijom za članove KUD-a.",
    intro: "Članske kartice sa personalizacijom za članove vašeg KUD-a.",
    opis:
      "Članske kartice za KUD su plastične kartice koje služe za identifikaciju članova kluba. Na kartici se nalaze naziv KUD-a, ime i prezime člana i broj člana, a dizajn se prilagođava identitetu kluba.",
    alt: "Članske kartice za KUD",
    slika: "https://media.base44.com/images/public/6ab2c44111e59d9d1217cd9e/00ed6148e_generated_93f82835.jpg",
    karakteristike: [
      { label: "Model", vrednost: "Plastične kartice" },
      { label: "Materijal", vrednost: "PVC" },
      { label: "Personalizacija", vrednost: "Štampa" },
      { label: "Sadržaj", vrednost: "Naziv, ime, broj člana" },
      { label: "Boje", vrednost: "Prema dizajnu" },
      { label: "Pakovanje", vrednost: "Prema količini" },
    ],
    personalizacija: ["Logo KUD-a", "Naziv KUD-a", "Ime i prezime", "Broj člana", "Dizajn"],
  },
  {
    slug: "solje",
    kategorija: "promotivni-proizvodi",
    naziv: "Šolje",
    kratkiOpis: "Personalizovane šolje sa natpisom ili logom KUD-a.",
    intro: "Personalizovane šolje sa natpisom ili logom KUD-a.",
    opis:
      "Šolje sa natpisom ili logom KUD-a su popularan poklon i promotivni proizvod. Personalizacija se radi štampom, u različitim bojama.",
    alt: "Personalizovane šolje za KUD",
    slika: "https://media.base44.com/images/public/6ab2c44111e59d9d1217cd9e/2b88a88a4_generated_e4e543a2.jpg",
    karakteristike: [
      { label: "Model", vrednost: "Keramičke šolje" },
      { label: "Zapremina", vrednost: "Standardna" },
      { label: "Personalizacija", vrednost: "Štampa" },
      { label: "Boje", vrednost: "Standardne boje" },
      { label: "Pakovanje", vrednost: "Prema količini" },
    ],
    personalizacija: ["Logo KUD-a", "Naziv", "Natpis"],
  },
  {
    slug: "ostalo",
    kategorija: "promotivni-proizvodi",
    naziv: "Ostalo",
    kratkiOpis: "Razni drugi personalizovani proizvodi na zahtev.",
    intro: "Razni drugi personalizovani proizvodi na zahtev — javite nam se sa vašom potrebom.",
    opis:
      "Pored standardne ponude, dostupni su i različiti drugi personalizovani proizvodi za KUD na zahtev. Javite nam se sa vašom potrebom pa ćemo pronaći odgovarajuće rešenje.",
    alt: "Personalizovani proizvodi za KUD",
    slika: "https://media.base44.com/images/public/6ab2c44111e59d9d1217cd9e/3994c381f_generated_c5a35e96.jpg",
    karakteristike: [
      { label: "Model", vrednost: "Različiti proizvodi" },
      { label: "Personalizacija", vrednost: "Prema proizvodu" },
      { label: "Dostupnost", vrednost: "Na zahtev" },
      { label: "Količina", vrednost: "Prema potrebi" },
    ],
    personalizacija: ["Logo KUD-a", "Naziv", "Natpis"],
  },
];

export const kategorijaSlike = {
  tekstil: "https://media.base44.com/images/public/6ab2c44111e59d9d1217cd9e/3d71c0d67_generated_0e51b51f.jpg",
  "promotivni-proizvodi": "https://media.base44.com/images/public/6ab2c44111e59d9d1217cd9e/5d50198cc_generated_6f2477db.jpg",
  "dodatna-oprema": "https://media.base44.com/images/public/6ab2c44111e59d9d1217cd9e/c0f0a1cc9_generated_6d43d938.jpg",
};

export const heroSlika = "https://media.base44.com/images/public/6ab2c44111e59d9d1217cd9e/811fb0ebc_generated_63ea73ab.jpg";

export function getKategorija(slug) {
  return kategorije.find((k) => k.slug === slug);
}
export function getProizvod(slug) {
  return proizvodi.find((p) => p.slug === slug);
}
export function getProizvodiByKategorija(slug) {
  return proizvodi.filter((p) => p.kategorija === slug);
}