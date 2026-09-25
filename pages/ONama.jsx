import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import Seo from "@/components/Seo";
import FolklorMotif from "@/components/FolklorMotif";
import FolklorBand from "@/components/FolklorBand";

const prednosti = [
  "Jedan kontakt — više proizvoda",
  "Personalizacija prema identitetu KUD-a",
  "Organizacija i jasna komunikacija",
  "Rešenja prilagođena KUD-ovima",
];

export default function ONama() {
  return (
    <div>
      <Seo
        title="O nama | Folklor Oprema"
        description="Folklor Oprema je specijalizovan za opremu i personalizaciju proizvoda za KUD-ove i folklorne klubove. Sve za vaš KUD na jednom mestu."
        path="/o-nama"
      />
      <section className="border-b border-border bg-secondary/30 py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">O nama</p>
          <h1 className="mt-3 font-heading text-4xl sm:text-5xl font-extrabold tracking-tight">O NAMA</h1>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <FolklorMotif className="mx-auto h-9 w-9 text-primary" />
          <h2 className="mt-6 font-heading text-2xl sm:text-3xl font-extrabold tracking-tight leading-tight">
            Folklor Oprema je specijalizovan za snabdevanje i personalizaciju proizvoda za KUD-ove i folklorne klubove.
          </h2>
          <FolklorBand className="mt-6" />
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Na jednom mestu možete pronaći različite proizvode potrebne vašem KUD-u — od tekstila, preko promotivnih proizvoda, do dodatne opreme. Naš cilj je da vam olakšamo organizaciju i pružimo rešenja prilagođena identitetu vašeg kluba.
          </p>
        </div>
      </section>

      <section className="bg-secondary/40 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="grid gap-4 sm:grid-cols-2">
            {prednosti.map((p) => (
              <div key={p} className="flex items-center gap-3 rounded-xl border border-border bg-card p-5">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Check className="h-4 w-4" />
                </span>
                <span className="font-medium">{p}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="rounded-2xl border border-border bg-foreground p-10 sm:p-14 text-center text-white">
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold tracking-tight">Sve za vaš KUD na jednom mestu</h2>
            <p className="mt-3 text-white/70">Pošaljite upit i razgovarajmo o potrebama vašeg kluba.</p>
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