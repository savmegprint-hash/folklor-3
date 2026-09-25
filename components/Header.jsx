import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { kategorije } from "@/data/katalog";
import FolklorMotif from "@/components/FolklorMotif";

function MegaMenu() {
  return (
    <div className="absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3">
      <div className="w-[680px] max-w-[92vw] rounded-xl border border-border bg-white p-6 shadow-2xl">
        <div className="grid grid-cols-3 gap-6">
          {kategorije.map((kat) => (
            <div key={kat.slug}>
              <Link
                to={`/oprema/${kat.slug}`}
                className="font-heading text-sm font-bold uppercase tracking-wide text-foreground hover:text-primary transition-colors"
              >
                {kat.naziv}
              </Link>
              <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">{kat.kratakOpis}</p>
              {kat.podkategorije.length > 0 && (
                <ul className="mt-3 space-y-1.5">
                  {kat.podkategorije.map((p) => (
                    <li key={p.slug}>
                      <Link
                        to={`/oprema/${kat.slug}/${p.slug}`}
                        className="text-sm text-foreground/75 hover:text-primary transition-colors"
                      >
                        {p.naziv}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpremaOpen, setMobileOpremaOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
    setMegaOpen(false);
    setMobileOpremaOpen(false);
  }, [location.pathname]);

  const navClass = ({ isActive }) =>
    `text-sm font-medium tracking-wide transition-colors hover:text-primary ${isActive ? "text-primary" : "text-foreground/80"}`;

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <FolklorMotif className="h-7 w-7 text-primary" />
            <span className="font-heading text-base sm:text-lg font-extrabold tracking-tight">
              FOLKLOR <span className="text-primary">OPREMA</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            <NavLink to="/" className={navClass} end>Početna</NavLink>
            <div
              className="relative"
              onMouseEnter={() => setMegaOpen(true)}
              onMouseLeave={() => setMegaOpen(false)}
            >
              <button
                className="flex items-center gap-1 text-sm font-medium tracking-wide text-foreground/80 hover:text-primary transition-colors"
                onClick={() => setMegaOpen((v) => !v)}
              >
                Oprema <ChevronDown className="h-4 w-4" />
              </button>
              {megaOpen && <MegaMenu />}
            </div>
            <NavLink to="/kako-funkcionise" className={navClass}>Kako funkcioniše</NavLink>
            <NavLink to="/nasi-radovi" className={navClass}>Naši radovi</NavLink>
            <NavLink to="/o-nama" className={navClass}>O nama</NavLink>
            <NavLink to="/kontakt" className={navClass}>Kontakt</NavLink>
            <NavLink to="/saveti-za-kud" className={navClass}>Saveti</NavLink>
          </nav>

          <div className="hidden lg:block">
            <Link
              to="/posaljite-upit"
              className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              style={{ backgroundColor: "#C8102E", color: "#fff" }}
            >
              Pošaljite upit
            </Link>
          </div>

          <button
            className="lg:hidden p-2 -mr-2"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Meni"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-white max-h-[80vh] overflow-y-auto">
          <div className="px-4 py-4 space-y-1">
            <NavLink to="/" end className="block py-2.5 text-base font-medium">Početna</NavLink>
            <button
              className="flex w-full items-center justify-between py-2.5 text-base font-medium"
              onClick={() => setMobileOpremaOpen((v) => !v)}
            >
              Oprema <ChevronDown className={`h-4 w-4 transition-transform ${mobileOpremaOpen ? "rotate-180" : ""}`} />
            </button>
            {mobileOpremaOpen && (
              <div className="pl-3 border-l-2 border-primary/30 mb-2">
                {kategorije.map((kat) => (
                  <div key={kat.slug} className="py-2">
                    <Link to={`/oprema/${kat.slug}`} className="block text-sm font-semibold text-foreground">
                      {kat.naziv}
                    </Link>
                    <ul className="mt-1 space-y-1">
                      {kat.podkategorije.map((p) => (
                        <li key={p.slug}>
                          <Link to={`/oprema/${kat.slug}/${p.slug}`} className="block py-1 text-sm text-muted-foreground">
                            {p.naziv}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
            <NavLink to="/kako-funkcionise" className="block py-2.5 text-base font-medium">Kako funkcioniše</NavLink>
            <NavLink to="/nasi-radovi" className="block py-2.5 text-base font-medium">Naši radovi</NavLink>
            <NavLink to="/o-nama" className="block py-2.5 text-base font-medium">O nama</NavLink>
            <NavLink to="/kontakt" className="block py-2.5 text-base font-medium">Kontakt</NavLink>
            <NavLink to="/saveti-za-kud" className="block py-2.5 text-base font-medium">Saveti za KUD</NavLink>
            <Link
              to="/posaljite-upit"
              className="mt-2 block rounded-md px-5 py-3 text-center text-sm font-semibold text-white"
              style={{ backgroundColor: "#C8102E" }}
            >
              Pošaljite upit
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}