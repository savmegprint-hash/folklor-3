import { Link } from "react-router-dom";
import { ArrowRight, Mail, Instagram, MessageCircle, MapPin, Clock } from "lucide-react";
import Seo from "@/components/Seo";
import FolklorBand from "@/components/FolklorBand";

// NAPOMENA: kontakt podaci ispod su placeholder vrednosti — zamenite ih stvarnim podacima.
const WHATSAPP = "+33 6 62 08 42 47";
const WHATSAPP_URL = "https://wa.me/33662084247";
const EMAIL = "savmeg.print@gmail.com";
const INSTAGRAM = "@folkloroprema";
const INSTAGRAM_URL = "https://instagram.com/folkloroprema";
const ADRESA = "Vaša adresa, Grad";
const RADNO_VREME = "Pon–Pet: 9:00–17:00";

// OpenStreetMap embed — zamenite koordinate za vašu lokaciju.
const MAP_EMBED =
"https://www.openstreetmap.org/export/embed.html?bbox=20.42%2C44.78%2C20.52%2C44.83&layer=mapnik&marker=44.80%2C20.47";

const kontakti = [
{
  ikona: MessageCircle,
  naslov: "WhatsApp",
  vrednost: WHATSAPP,
  href: WHATSAPP_URL,
  opis: "Najbrži način — pišite nam direktno."
},
{
  ikona: Mail,
  naslov: "E-mail",
  vrednost: EMAIL,
  href: `mailto:${EMAIL}`,
  opis: "Pošaljite nam poruku sa detaljima upita."
},
{
  ikona: Instagram,
  naslov: "Instagram",
  vrednost: INSTAGRAM,
  href: INSTAGRAM_URL,
  opis: "Pratite naše radove i realizacije."
}];


export default function Kontakt() {
  return (
    <div>
      <Seo
        title="Kontakt | Folklor Oprema"
        description="Kontaktirajte Folklor Oprema — WhatsApp, e-mail i Instagram. Pošaljite upit za opremu i personalizaciju za vaš KUD."
        path="/kontakt" />
      
      <section className="border-b border-border bg-secondary/30 py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Kontakt</p>
          <h1 className="mt-3 font-heading text-4xl sm:text-5xl font-extrabold tracking-tight">KONTAKT</h1>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Tu smo da odgovorimo na sva vaša pitanja. Javite se na bilo koji od dole navedenih načina.
          </p>
        </div>
      </section>

      {/* KONTAKT KARTICE */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {kontakti.map((k) => {
              const Ikona = k.ikona;
              return (
                <a
                  key={k.naslov}
                  href={k.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group rounded-xl border border-border bg-card p-7 transition-all hover:border-primary/40 hover:shadow-lg">
                  
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Ikona className="h-6 w-6" />
                  </span>
                  <h2 className="mt-5 font-heading text-lg font-bold">{k.naslov}</h2>
                  <p className="mt-1 text-sm font-medium text-foreground">{k.vrednost}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{k.opis}</p>
                </a>);

            })}
          </div>

          {/* Adresa i radno vreme */}
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-6 hidden">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <MapPin className="h-5 w-5" />
              </span>
              <div>
                <h2 className="font-heading text-base font-bold">Adresa</h2>
                <p className="mt-1 text-sm text-muted-foreground">{ADRESA}</p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-6 hidden">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Clock className="h-5 w-5" />
              </span>
              <div>
                <h2 className="font-heading text-base font-bold">Radno vreme</h2>
                <p className="mt-1 text-sm text-muted-foreground">{RADNO_VREME}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAPA */}
      <section className="pb-16 sm:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="overflow-hidden rounded-2xl border border-border">
            <iframe
              title="Lokacija Folklor Oprema"
              src={MAP_EMBED}
              className="h-[360px] w-full sm:h-[440px] hidden"
              style={{ border: 0 }}
              loading="lazy" />
            
          </div>
        </div>
      </section>

      {/* RAPPEL FORMULAIRE */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="rounded-2xl border border-border bg-secondary/40 p-10 sm:p-14 text-center">
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold tracking-tight">Pošaljite upit</h2>
            <FolklorBand className="mt-5" />
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              Za detaljne zahteve — količine, personalizaciju, rokove — najlakše je popuniti naš kratki upitnik. Javićemo vam se u najkraćem roku.
            </p>
            <Link
              to="/posaljite-upit"
              className="mt-7 inline-flex items-center gap-2 rounded-md bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
              
              Otvori upitnik <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>);

}