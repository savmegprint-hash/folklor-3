import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

// CTA za stranicu proizvoda — pre-popunjava formular sa imenom proizvoda.
export default function UpitCta({ proizvodNaziv, kategorijaSlug }) {
  const params = new URLSearchParams();
  if (proizvodNaziv) params.set("proizvod", proizvodNaziv);
  if (kategorijaSlug) params.set("kategorija", kategorijaSlug);
  const href = `/posaljite-upit?${params.toString()}`;

  return (
    <div className="rounded-2xl border border-border bg-card p-8 sm:p-10 text-center">
      <h3 className="font-heading text-2xl font-extrabold tracking-tight">Zanima vas ovaj proizvod?</h3>
      <p className="mt-2 text-muted-foreground">
      Pošaljite upit i javićemo vam se sa svim informacijama — materijal, boje, personalizacija i rok.
      </p>
      <Link
        to={href}
        className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
      >
        Pošaljite upit <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}