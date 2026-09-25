import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { Image } from "@/components/ui/image";
import Seo from "@/components/Seo";
import Faq from "@/components/Faq";
import UpitCta from "@/components/UpitCta";
import ProductCard from "@/components/ProductCard";
import FolklorBand from "@/components/FolklorBand";
import { getProizvod, getKategorija, getProizvodiByKategorija } from "@/data/katalog";
import { productFaq } from "@/data/faq";
import { breadcrumbList, productSchema, faqPage } from "@/lib/seo";

export default function ProductDetail() {
  const { kategorija, proizvod } = useParams();
  const p = getProizvod(proizvod);
  const kat = getKategorija(kategorija);

  if (!p) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-24 text-center">
        <h1 className="font-heading text-3xl font-extrabold">Proizvod nije pronađen</h1>
        <Link to="/oprema" className="mt-6 inline-flex items-center gap-2 text-primary font-semibold">
          <ArrowLeft className="h-4 w-4" /> Nazad na opremu
        </Link>
      </div>
    );
  }

  const vezani = getProizvodiByKategorija(kategorija).filter((x) => x.slug !== p.slug).slice(0, 3);
  const kategorijaIme = kat?.naziv || "";
  const title = `${p.naziv} za KUD | Personalizovane ${p.naziv.toLowerCase()} | Folklor Oprema`;
  const jsonLd = [
    productSchema({ name: `${p.naziv} za KUD`, description: p.opis, image: p.slika, category: kategorijaIme }),
    breadcrumbList([
      { name: "Početna", path: "/" },
      { name: "Oprema", path: "/oprema" },
      { name: kategorijaIme, path: `/oprema/${kategorija}` },
      { name: p.naziv, path: `/oprema/${kategorija}/${p.slug}` },
    ]),
    faqPage(productFaq),
  ];

  return (
    <div>
      <Seo title={title} description={p.opis} path={`/oprema/${kategorija}/${p.slug}`} jsonLd={jsonLd} />

      <section className="border-b border-border bg-secondary/30 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <nav className="text-sm text-muted-foreground" aria-label="Putanja">
            <Link to="/" className="hover:text-primary">Početna</Link>
            <span className="mx-2">/</span>
            <Link to="/oprema" className="hover:text-primary">Oprema</Link>
            <span className="mx-2">/</span>
            <Link to={`/oprema/${kategorija}`} className="hover:text-primary">{kategorijaIme}</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground font-medium">{p.naziv}</span>
          </nav>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid gap-10 lg:grid-cols-2">
          <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-border bg-muted">
            {p.slika ? (
              <Image src={p.slika} alt={p.alt} fittingType="fill" className="h-full w-full" />
            ) : (
              <div className="flex h-full w-full flex-col items-center justify-center gap-3 text-muted-foreground">
                <FolklorBand />
                <p className="text-sm">Fotografija uskoro</p>
              </div>
            )}
          </div>

          <div>
            <h1 className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tight">{p.naziv} za KUD</h1>
            <p className="mt-4 text-lg text-muted-foreground">{p.intro}</p>

            <div className="mt-8">
              <h2 className="font-heading text-sm font-bold uppercase tracking-[0.2em] text-primary">Karakteristike</h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {p.karakteristike.map((k) => (
                  <div key={k.label} className="rounded-lg border border-border bg-card p-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{k.label}</p>
                    <p className="mt-1 text-sm font-medium text-foreground">{k.vrednost}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OPISNI SADRŽAJ */}
      <section className="pb-4">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="font-heading text-2xl font-extrabold tracking-tight">O proizvodu</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">{p.opis}</p>
        </div>
      </section>

      <section className="bg-secondary/40 py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="font-heading text-2xl sm:text-3xl font-extrabold tracking-tight">Personalizacija</h2>
          <p className="mt-3 text-muted-foreground max-w-2xl">
            Mogućnosti personalizacije zavise od proizvoda i materijala. Navedene opcije su dostupne prema modelu.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {p.personalizacija.map((opt) => (
              <li key={opt} className="flex items-center gap-2.5 rounded-lg border border-border bg-card px-4 py-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Check className="h-3.5 w-3.5" />
                </span>
                <span className="text-sm font-medium">{opt}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <Faq items={productFaq} />
        </div>
      </section>

      {/* CTA + MAŠINSKI LINKOVI */}
      <section className="pb-14 sm:pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <UpitCta proizvodNaziv={p.naziv} kategorijaSlug={kategorija} />
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to={`/oprema/${kategorija}`} className="inline-flex items-center gap-2 text-sm font-semibold text-foreground/80 hover:text-primary">
              <ArrowLeft className="h-4 w-4" /> Nazad na {kategorijaIme}
            </Link>
            <Link to="/nasi-radovi" className="inline-flex items-center gap-2 text-sm font-semibold text-foreground/80 hover:text-primary">
              Pogledajte naše radove <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* VEZANI PROIZVODI */}
      {vezani.length > 0 && (
        <section className="bg-secondary/40 py-14 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold tracking-tight">Povezani proizvodi</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {vezani.map((vp) => (
                <ProductCard key={vp.slug} proizvod={vp} kategorijaSlug={kategorija} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}