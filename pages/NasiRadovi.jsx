import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Seo from "@/components/Seo";
import RadCard from "@/components/RadCard";

import { radovi, filteri } from "@/data/radovi";

export default function NasiRadovi() {
  const [filter, setFilter] = useState("Sve");
  const prikaz = filter === "Sve" ? radovi : radovi.filter((r) => r.tip === filter);

  return (
    <div>
      <Seo
        title="Naši radovi | Realizacije za KUD | Folklor Oprema"
        description="Pogledajte realizacije koje smo pripremili za KUD-ove — personalizovane majice, polo majice, trenerke i dukserice za folklorne klubove."
        path="/nasi-radovi" />
      
      <section className="border-b border-border bg-secondary/30 py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Realizacije</p>
          <h1 className="mt-3 font-heading text-4xl sm:text-5xl font-extrabold tracking-tight">NAŠI RADOVI</h1>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Pogledajte neke od realizacija koje smo pripremili za KUD-ove. Svaki projekat je prilagođen identitetu kluba.
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-wrap justify-center gap-2.5">
            {filteri.map((f) =>
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              filter === f ?
              "bg-primary text-primary-foreground" :
              "border border-border text-foreground/80 hover:border-primary hover:text-primary"}`
              }>
              
                {f}
              </button>
            )}
          </div>

          {prikaz.length === 0 ?
          <p className="mt-16 text-center text-muted-foreground">Trenutno nema realizacija u ovoj kategoriji.</p> :

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {prikaz.map((r) => (
                <RadCard key={r.slug} r={r} />
              ))}
            </div>
          }

          <div className="mt-16 rounded-2xl border border-border bg-secondary/40 p-10 text-center">
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold tracking-tight">Želite slično za svoj KUD?</h2>
            <p className="mt-2 text-muted-foreground">Pošaljite upit i javićemo vam se sa predlogom.</p>
            <Link
              to="/posaljite-upit"
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
              
              Pošaljite upit <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>);

}