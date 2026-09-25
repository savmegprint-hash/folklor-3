import { useParams, Link } from "react-router-dom";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Image } from "@/components/ui/image";
import Seo from "@/components/Seo";
import SectionTitle from "@/components/SectionTitle";
import ProductCard from "@/components/ProductCard";
import UpitCta from "@/components/UpitCta";
import { getKategorija, getProizvodiByKategorija, kategorijaSlike } from "@/data/katalog";
import { breadcrumbList } from "@/lib/seo";

const seoMap = {
  tekstil: {
    title: "Tekstil za KUD | Majice, trenerke, dukserice | Folklor Oprema",
    description:
      "Tekstilna oprema za KUD — majice, polo majice, trenerke, dukserice, kape i kabanice sa personalizacijom za vaš folklorni klub.",
  },
  "promotivni-proizvodi": {
    title: "Promotivni proizvodi za KUD | Folklor Oprema",
    description:
      "Promotivni proizvodi za KUD — olovke, upaljači, privesci, članske kartice i šolje sa personalizacijom za vaš folklorni klub.",
  },
  "dodatna-oprema": {
    title: "Dodatna oprema za KUD | Folklor Oprema",
    description:
      "Dodatna oprema i rešenja prilagođena potrebama KUD-a. Javite nam se sa vašim zahtevom i pronaći ćemo pravo rešenje.",
  },
};

export default function Kategorija() {
  const { kategorija } = useParams();
  const kat = getKategorija(kategorija);

  if (!kat) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-24 text-center">
        <h1 className="font-heading text-3xl font-extrabold">Kategorija nije pronađena</h1>
        <Link to="/oprema" className="mt-6 inline-flex items-center gap-2 text-primary font-semibold">
          <ArrowLeft className="h-4 w-4" /> Nazad na opremu
        </Link>
      </div>
    );
  }

  const proizvodi = getProizvodiByKategorija(kategorija);
  const seo = seoMap[kategorija] || { title: `${kat.naziv} | Folklor Oprema`, description: kat.kratakOpis };
  const jsonLd = [
    breadcrumbList([
      { name: "Početna", path: "/" },
      { name: "Oprema", path: "/oprema" },
      { name: kat.naziv, path: `/oprema/${kategorija}` },
    ]),
  ];

  return (
    <div>
      <Seo title={seo.title} description={seo.description} path={`/oprema/${kategorija}`} jsonLd={jsonLd} />

      <section className="border-b border-border bg-secondary/30 py-12 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <nav className="text-sm text-muted-foreground mb-4" aria-label="Putanja">
            <Link to="/" className="hover:text-primary">Početna</Link>
            <span className="mx-2">/</span>
            <Link to="/oprema" className="hover:text-primary">Oprema</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground font-medium">{kat.naziv}</span>
          </nav>
          <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:items-center">
            <div>
              <h1 className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tight">{kat.naziv} za KUD</h1>
              <p className="mt-4 text-muted-foreground max-w-xl">{kat.kratakOpis}</p>
              {kat.podkategorije.length > 0 && (
                <div className="mt-6 flex flex-wrap gap-2">
                  {kat.podkategorije.map((p) => (
                    <Link
                      key={p.slug}
                      to={`/oprema/${kat.slug}/${p.slug}`}
                      className="rounded-full border border-border px-3.5 py-1.5 text-xs font-medium hover:border-primary hover:text-primary transition-colors"
                    >
                      {p.naziv}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border bg-muted">
              <Image src={kategorijaSlike[kategorija] || ""} alt={`${kat.naziv} za KUD — Folklor Oprema`} fittingType="fill" className="h-full w-full" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          {proizvodi.length > 0 ? (
            <>
              <SectionTitle title="Proizvodi" subtitle="Pogledajte detalje svakog proizvoda i pošaljite upit za personalizaciju." />
              <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {proizvodi.map((p) => (
                  <ProductCard key={p.slug} proizvod={p} kategorijaSlug={kat.slug} />
                ))}
              </div>
            </>
          ) : (
            <div className="max-w-2xl mx-auto text-center">
              <SectionTitle
                title="Dodatna oprema"
                subtitle="Različiti proizvodi i rešenja prilagođena potrebama vašeg KUD-a. Javite nam se sa vašim zahtevom i pronaći ćemo pravo rešenje."
              />
              <Link
                to="/posaljite-upit"
                className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Pošaljite upit <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          )}

          <div className="mt-16">
            <UpitCta kategorijaSlug={kat.slug} proizvodNaziv={kat.naziv} />
          </div>
        </div>
      </section>
    </div>
  );
}