import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Seo from "@/components/Seo";

// Pripremljena arhitektura za buduću "Saveti za KUD" sekciju. Nijedan generički
// članak nije kreiran — ovde je samo struktura spremna za postepeno dodavanje.
const buduciTekstovi = [
  "Kako izabrati majice za KUD?",
  "Koja gramatura majice je najbolja za KUD?",
  "Majice od pamuka ili tehničkog materijala?",
  "Kako pripremiti dizajn za štampu na majicama?",
  "Kako izabrati trenerke za folklorni klub?",
  "Šta sve može biti personalizovano za KUD?",
];

export default function SavetiZaKud() {
  return (
    <div>
      <Seo
        title="Saveti za KUD | Folklor Oprema"
        description="Saveti i uputstva za opremu i personalizaciju za KUD-ove i folklorne klubove. Uskoro više korisnih tekstova."
        path="/saveti-za-kud"
      />
      <section className="border-b border-border bg-secondary/30 py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Saveti za KUD</p>
          <h1 className="mt-3 font-heading text-4xl sm:text-5xl font-extrabold tracking-tight">SAVETI ZA KUD</h1>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            U pripremi su korisni tekstovi koji će vam pomoći da lakše izaberete opremu i pripremite dizajn za vaš KUD.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="rounded-xl border border-border bg-card p-8">
            <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Uskoro</p>
            <ul className="mt-4 space-y-2.5">
              {buduciTekstovi.map((t) => (
                <li key={t} className="flex items-start gap-2 text-sm">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {t}
                </li>
              ))}
            </ul>
            <Link
              to="/posaljite-upit"
              className="mt-7 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Pošaljite upit <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}