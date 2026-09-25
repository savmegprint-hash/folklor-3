import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Image } from "@/components/ui/image";
import Seo from "@/components/Seo";
import SectionTitle from "@/components/SectionTitle";
import { kategorije } from "@/data/katalog";

export default function Oprema() {
  return (
    <div>
      <Seo
        title="Oprema za KUD | Tekstil i promotivni proizvodi | Folklor Oprema"
        description="Pogledajte kompletnu opremu za KUD — tekstil, majice, trenerke, dukserice, kape i promotivne proizvode. Personalizacija prema identitetu vašeg kluba."
        path="/oprema"
      />
      <section className="border-b border-border bg-secondary/30 py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Oprema</p>
          <h1 className="mt-3 font-heading text-4xl sm:text-5xl font-extrabold tracking-tight">OPREMA ZA KUD</h1>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Sve što vam je potrebno za vaš KUD — tekstil, promotivni proizvodi i dodatna oprema, sve na jednom mestu.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 space-y-16">
          {kategorije.map((kat) => (
            <div key={kat.slug} className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border bg-muted">
                <Image src={kat.slika || ""} alt={`${kat.naziv} za KUD — Folklor Oprema`} fittingType="fill" className="h-full w-full" />
              </div>
              <div>
                <h2 className="font-heading text-3xl font-extrabold tracking-tight">{kat.naziv} za KUD</h2>
                <p className="mt-3 text-muted-foreground">{kat.kratakOpis}</p>
                {kat.podkategorije.length > 0 ? (
                  <ul className="mt-6 grid grid-cols-2 gap-y-2.5 gap-x-6">
                    {kat.podkategorije.map((p) => (
                      <li key={p.slug}>
                        <Link
                          to={`/oprema/${kat.slug}/${p.slug}`}
                          className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                        >
                          <ArrowRight className="h-3.5 w-3.5 text-primary" /> {p.naziv} za KUD
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-6 text-sm text-muted-foreground">
                    Različiti proizvodi i rešenja prilagođena potrebama KUD-a — javite nam se sa vašim zahtevom.
                  </p>
                )}
                <Link
                  to={`/oprema/${kat.slug}`}
                  className="mt-7 inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-semibold transition-colors hover:border-primary hover:text-primary"
                >
                  Pogledajte kategoriju <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}