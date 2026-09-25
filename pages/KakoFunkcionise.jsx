import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Seo from "@/components/Seo";
import SectionTitle from "@/components/SectionTitle";

const steps = [
  { br: "01", naslov: "Pošaljite upit", opis: "KUD objašnjava šta mu je potrebno — vrsta proizvoda, količina, personalizacija i rok." },
  { br: "02", naslov: "Dogovor", opis: "Razmena o količinama, modelima, veličinama, bojama, personalizaciji i specifičnim potrebama." },
  { br: "03", naslov: "Ponuda i dizajn", opis: "Pripremamo potrebne informacije, ponudu i, kada je potrebno, vizuel / mockup." },
  { br: "04", naslov: "Realizacija", opis: "Nakon potvrde, narudžbina se priprema i realizuje u dogovorenom roku." },
];

export default function KakoFunkcionise() {
  return (
    <div>
      <Seo
        title="Kako funkcioniše | Folklor Oprema"
        description="Proces porudžbine za KUD u četiri koraka — upit, dogovor, ponuda i dizajn, realizacija. Saznajte kako Folklor Oprema radi sa folklornim klubovima."
        path="/kako-funkcionise"
      />
      <section className="border-b border-border bg-secondary/30 py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Proces</p>
          <h1 className="mt-3 font-heading text-4xl sm:text-5xl font-extrabold tracking-tight">KAKO FUNKCIONIŠE?</h1>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Jednostavan i jasan proces — od vaše potrebe do realizacije.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <div key={s.br} className="relative rounded-xl border border-border bg-card p-6">
                <span className="font-heading text-4xl font-extrabold text-primary">{s.br}</span>
                <h2 className="mt-4 font-heading text-lg font-bold">{s.naslov}</h2>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.opis}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="rounded-2xl border border-border bg-secondary/40 p-10 sm:p-14 text-center">
            <SectionTitle title="Spremni da pošaljete upit?" subtitle="Recite nam šta vam je potrebno — javićemo se u najkraćem roku." />
            <Link
              to="/posaljite-upit"
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Pošaljite upit <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}