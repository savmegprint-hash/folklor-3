import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { Image } from "@/components/ui/image";
import SectionTitle from "@/components/SectionTitle";
import FolklorBand from "@/components/FolklorBand";
import Seo from "@/components/Seo";
import { kategorije, heroSlika } from "@/data/katalog";
import { radovi } from "@/data/radovi";

const steps = [
  { br: "01", naslov: "Pošaljite upit", opis: "KUD objašnjava šta mu je potrebno." },
  { br: "02", naslov: "Dogovor", opis: "Razmena o količinama, modelima, veličinama, bojama i personalizaciji." },
  { br: "03", naslov: "Ponuda i dizajn", opis: "Pripremamo informacije, ponudu i, po potrebi, vizuel / mockup." },
  { br: "04", naslov: "Realizacija", opis: "Nakon potvrde, narudžbina se priprema i realizuje." },
];

export default function Home() {
  return (
    <div>
      <Seo
        title="Folklor Oprema | Oprema za KUD i folklorne klubove"
        description="Folklor Oprema — oprema za KUD i folklorne klubove: tekstil, personalizovane majice, trenerke, dukserice i promotivni proizvodi. Pošaljite upit i opremite svoj KUD."
        path="/"
      />
      {/* HERO */}
      <section className="relative bg-foreground text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image src={heroSlika} alt="Oprema za KUD i folklorne klubove — Folklor Oprema" fittingType="fill" className="h-full w-full opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/75" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-24 sm:py-32 lg:py-40">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Folklor Oprema</p>
            <h1 className="mt-4 font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight">
              OPREMA ZA VAŠ KUD<br />I FOLKLORNE KLUBOVE
            </h1>
            <p className="mt-6 text-lg text-white/75 max-w-xl">
              Tekstil, personalizacija i promotivni proizvodi za folklorne klubove i udruženja — sve na jednom mestu.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row gap-3">
              <Link
                to="/posaljite-upit"
                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Pošaljite upit
              </Link>
              <Link
                to="/nasi-radovi"
                className="inline-flex items-center justify-center rounded-md border border-white/30 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/15"
              >
                Pogledajte naše radove
              </Link>
            </div>
          </div>
        </div>
        <div className="relative h-px bg-primary/60" />
      </section>

      {/* KATEGORIJE */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionTitle
            overline="Šta možemo da obezbedimo"
            title="ŠTA MOŽEMO DA OBEZBEDIMO ZA VAŠ KUD?"
            subtitle="Tri glavne grupe proizvoda — sve prilagođeno potrebama folklorih klubova i udruženja."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {kategorije.map((kat) => (
              <Link
                key={kat.slug}
                to={`/oprema/${kat.slug}`}
                className="group overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-primary/40 hover:shadow-lg"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                  <Image src={kat.slika || ""} alt={`${kat.naziv} za KUD — Folklor Oprema`} fittingType="fill" className="h-full w-full transition-transform duration-500 group-hover:scale-[1.03]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <h3 className="absolute bottom-4 left-4 font-heading text-2xl font-extrabold text-white">{kat.naziv}</h3>
                </div>
                <div className="p-5">
                  <p className="text-sm text-muted-foreground">{kat.kratakOpis}</p>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                    Pogledajte <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PERSONALIZACIJA */}
      <section className="bg-secondary/40 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Personalizacija</p>
            <h2 className="mt-3 font-heading text-3xl sm:text-4xl font-extrabold tracking-tight">
              Proizvodi prilagođeni identitetu vašeg KUD-a
            </h2>
            <FolklorBand className="mt-5 justify-start" />
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Svaki proizvod može da se prilagodi identitetu vašeg kluba. Mogućnosti personalizacije zavise od proizvoda i materijala.
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-y-2.5 gap-x-6 text-sm">
              {["Logo KUD-a", "Naziv", "Ime i prezime", "Zastava", "Boje kluba", "Natpis", "Grb", "Poseban dizajn"].map((p) => (
                <li key={p} className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-primary" /> {p}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-card p-8">
            <p className="text-sm text-muted-foreground">
              Na jednom mestu možete pronaći različite proizvode potrebne vašem KUD-u — od tekstila do promotivnih proizvoda i dodatne opreme.
            </p>
            <Link
              to="/posaljite-upit"
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Pošaljite upit <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* KAKO FUNKCIONIŠE */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionTitle overline="Proces" title="KAKO FUNKCIONIŠE?" subtitle="Jednostavan proces u četiri koraka." />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <div key={s.br} className="rounded-xl border border-border bg-card p-6">
                <span className="font-heading text-3xl font-extrabold text-primary">{s.br}</span>
                <h3 className="mt-3 font-heading text-lg font-bold">{s.naslov}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{s.opis}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/kako-funkcionise" className="text-sm font-semibold text-primary inline-flex items-center gap-1.5">
              Više o procesu <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* NAŠI RADOVI PREVIEW */}
      <section className="bg-foreground text-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Realizacije</p>
            <h2 className="mt-3 font-heading text-3xl sm:text-4xl font-extrabold tracking-tight">NAŠI RADOVI</h2>
            <FolklorBand className="mt-5" />
            <p className="mt-4 text-white/70 max-w-xl mx-auto">Pogledajte neke od realizacija koje smo pripremili za KUD-ove.</p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {radovi.map((r) => (
              <div key={r.slug} className="group overflow-hidden rounded-xl border border-white/10 bg-white/5">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image src={r.slika} alt={r.alt} fittingType="fill" className="h-full w-full transition-transform duration-500 group-hover:scale-[1.03]" />
                </div>
                <div className="p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary">{r.kud}</p>
                  <h3 className="mt-1 font-heading text-base font-bold">{r.proizvod}</h3>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/nasi-radovi" className="inline-flex items-center gap-2 rounded-md border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10">
              Svi naši radovi <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="rounded-2xl border border-border bg-secondary/40 p-10 sm:p-14 text-center">
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tight">Spremni da opremite svoj KUD?</h2>
            <p className="mt-3 text-muted-foreground">Recite nam šta vam je potrebno — mi smo tu da pronađemo pravo rešenje.</p>
            <Link
              to="/posaljite-upit"
              className="mt-7 inline-flex items-center gap-2 rounded-md bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Pošaljite upit <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}