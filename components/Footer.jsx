import { Link } from "react-router-dom";
import { Mail, Instagram, MessageCircle } from "lucide-react";
import FolklorMotif from "@/components/FolklorMotif";

// NAPOMENA: kontakt podaci ispod su placeholder vrednosti — zamenite ih stvarnim podacima.
const WHATSAPP = "+33 6 62 08 42 47";
const WHATSAPP_URL = "https://wa.me/33662084247";
const EMAIL = "savmeg.print@gmail.com";
const INSTAGRAM = "@folkloroprema";
const INSTAGRAM_URL = "https://instagram.com/folkloroprema";

const nav = [
  { label: "Početna", to: "/" },
  { label: "Oprema", to: "/oprema" },
  { label: "Kako funkcioniše", to: "/kako-funkcionise" },
  { label: "Naši radovi", to: "/nasi-radovi" },
  { label: "O nama", to: "/o-nama" },
  { label: "Kontakt", to: "/kontakt" },
  { label: "Saveti za KUD", to: "/saveti-za-kud" },
  { label: "Pošaljite upit", to: "/posaljite-upit" },
];

export default function Footer() {
  return (
    <footer className="bg-foreground text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Link to="/" className="flex items-center gap-2">
              <FolklorMotif className="h-7 w-7 text-primary" />
              <span className="font-heading text-lg font-extrabold tracking-tight">
                FOLKLOR <span className="text-primary">OPREMA</span>
              </span>
            </Link>
            <p className="mt-4 text-sm text-white/60 max-w-xs">
              Sve za vaš KUD na jednom mestu. Oprema, tekstil i personalizovani proizvodi za folklorne klubove i udruženja.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">Navigacija</h4>
            <ul className="mt-4 space-y-2.5">
              {nav.map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="text-sm text-white/80 hover:text-primary transition-colors">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">Kontakt</h4>
            <ul className="mt-4 space-y-3">
              <li>
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="flex items-center gap-2.5 text-sm text-white/80 hover:text-primary transition-colors">
                  <MessageCircle className="h-4 w-4" /> WhatsApp: {WHATSAPP}
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`} className="flex items-center gap-2.5 text-sm text-white/80 hover:text-primary transition-colors">
                  <Mail className="h-4 w-4" /> {EMAIL}
                </a>
              </li>
              <li>
                <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="flex items-center gap-2.5 text-sm text-white/80 hover:text-primary transition-colors">
                  <Instagram className="h-4 w-4" /> {INSTAGRAM}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/50">© {new Date().getFullYear()} Folklor Oprema. Sva prava zadržana.</p>
          <p className="text-xs text-white/40">Sve za vaš KUD na jednom mestu</p>
        </div>
      </div>
    </footer>
  );
}