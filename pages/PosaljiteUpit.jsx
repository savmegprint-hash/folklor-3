import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { ArrowRight, Mail, Instagram, MessageCircle, Check } from "lucide-react";
import { base44 } from "@/api/base44Client";
import Seo from "@/components/Seo";

const WHATSAPP_URL = "https://wa.me/33662084247";
const EMAIL = "savmeg.print@gmail.com";
const INSTAGRAM_URL = "https://instagram.com/folkloroprema";

const kategorijeOpcije = [
  "Majice",
  "Polo majice",
  "Trenerke",
  "Dukserice",
  "Kape",
  "Promotivni proizvodi",
  "Članske kartice",
  "Drugo",
];

function Field({ label, children, required }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
        {label} {required && <span className="text-primary">*</span>}
      </span>
      {children}
    </label>
  );
}

const inputClass =
  "w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary";

export default function PosaljiteUpit() {
  const [params] = useSearchParams();
  const preProizvod = params.get("proizvod") || "";
  const preKategorija = params.get("kategorija") || "";

  const [form, setForm] = useState({
    ime: "",
    prezime: "",
    naziv_kud: "",
    email: "",
    whatsapp: "",
    drzava: "",
    grad: "",
    broj_clanova: "",
    kolicina: "",
    poruka: "",
    rok: "",
  });
  const [izabraneKategorije, setIzabraneKategorije] = useState([]);
  const [loading, setLoading] = useState(false);
  const [poslato, setPoslato] = useState(false);
  const [greska, setGreska] = useState("");

  useEffect(() => {
    if (preProizvod) {
      setForm((f) => ({
        ...f,
        poruka: `Zainteresovan sam za: ${preProizvod}. Molim vas za više informacija.`,
      }));
    }
    if (preKategorija) {
      const kat = preKategorija === "tekstil" ? "Majice" : preKategorija === "promotivni-proizvodi" ? "Promotivni proizvodi" : "";
      if (kat) setIzabraneKategorije([kat]);
    }
  }, [preProizvod, preKategorija]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const toggleKategorija = (kat) => {
    setIzabraneKategorije((prev) =>
      prev.includes(kat) ? prev.filter((k) => k !== kat) : [...prev, kat]
    );
  };

  const submit = async (e) => {
    e.preventDefault();
    setGreska("");
    if (!form.ime || !form.prezime || !form.naziv_kud || !form.email) {
      setGreska("Molimo popunite obavezna polja.");
      return;
    }
    setLoading(true);
    try {
      await base44.entities.Upit.create({
        ...form,
        kategorije: izabraneKategorije,
        proizvod: preProizvod || "",
      });
      base44.analytics.track({ eventName: "upit_poslat", properties: { proizvod: preProizvod || "", kategorija: preKategorija || "" } });
      setPoslato(true);
    } catch (err) {
      setGreska("Došlo je do greške. Pokušajte ponovo ili pišite nam direktno.");
    } finally {
      setLoading(false);
    }
  };

  if (poslato) {
    return (
      <div>
        <Seo title="Pošaljite upit | Folklor Oprema" description="Pošaljite upit za opremu i personalizaciju za vaš KUD." path="/posaljite-upit" />
        <div className="mx-auto max-w-2xl px-4 py-24 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Check className="h-8 w-8" />
          </div>
          <h1 className="mt-6 font-heading text-3xl font-extrabold tracking-tight">Hvala vam na upitu!</h1>
          <p className="mt-3 text-muted-foreground">Javićemo vam se u najkraćem roku.</p>
          <Link to="/" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary">
            Nazad na početnu <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Seo
        title="Pošaljite upit | Folklor Oprema"
        description="Pošaljite upit za opremu i personalizaciju za vaš KUD. Recite nam šta vam je potrebno — javićemo se sa svim informacijama."
        path="/posaljite-upit"
      />
      <section className="border-b border-border bg-secondary/30 py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Kontakt</p>
          <h1 className="mt-3 font-heading text-4xl sm:text-5xl font-extrabold tracking-tight">POŠALJITE UPIT</h1>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Recite nam šta vam je potrebno, a mi ćemo vam se javiti sa više informacija.
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <form onSubmit={submit} className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Ime" required>
                <input name="ime" value={form.ime} onChange={handleChange} className={inputClass} required />
              </Field>
              <Field label="Prezime" required>
                <input name="prezime" value={form.prezime} onChange={handleChange} className={inputClass} required />
              </Field>
            </div>

            <Field label="Naziv KUD-a" required>
              <input name="naziv_kud" value={form.naziv_kud} onChange={handleChange} className={inputClass} required />
            </Field>

            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="E-mail" required>
                <input type="email" name="email" value={form.email} onChange={handleChange} className={inputClass} required />
              </Field>
              <Field label="WhatsApp">
                <input name="whatsapp" value={form.whatsapp} onChange={handleChange} className={inputClass} />
              </Field>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Država">
                <input name="drzava" value={form.drzava} onChange={handleChange} className={inputClass} />
              </Field>
              <Field label="Grad">
                <input name="grad" value={form.grad} onChange={handleChange} className={inputClass} />
              </Field>
            </div>

            <Field label="Broj članova / igrača">
              <input name="broj_clanova" value={form.broj_clanova} onChange={handleChange} className={inputClass} />
            </Field>

            <div>
              <span className="mb-2 block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Šta vam je potrebno?
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {kategorijeOpcije.map((k) => (
                  <button
                    type="button"
                    key={k}
                    onClick={() => toggleKategorija(k)}
                    className={`rounded-md border px-3 py-2 text-sm font-medium transition-colors ${
                      izabraneKategorije.includes(k)
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border hover:border-primary hover:text-primary"
                    }`}
                  >
                    {k}
                  </button>
                ))}
              </div>
            </div>

            <Field label="Okvirna količina">
              <input name="kolicina" value={form.kolicina} onChange={handleChange} className={inputClass} placeholder="npr. 30 komada" />
            </Field>

            <Field label="Šta vam je potrebno?">
              <textarea
                name="poruka"
                value={form.poruka}
                onChange={handleChange}
                rows={5}
                className={inputClass}
                placeholder="Opišite nam ukratko šta vam je potrebno, količinu, rok, personalizaciju ili druge zahteve."
              />
            </Field>

            <Field label="Rok / datum ako je bitan">
              <input name="rok" value={form.rok} onChange={handleChange} className={inputClass} placeholder="npr. kraj decembra" />
            </Field>

            {greska && <p className="text-sm font-medium text-destructive">{greska}</p>}

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-md bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-60"
            >
              {loading ? "Slanje..." : "Pošalji upit"}
            </button>
          </form>

          <div className="mt-10 rounded-xl border border-border bg-card p-6">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Ili nas kontaktirajte direktno</p>
            <div className="mt-3 flex flex-wrap gap-4 text-sm">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                onClick={() => base44.analytics.track({ eventName: "whatsapp_klik", properties: { izvor: "upit" } })}
                className="inline-flex items-center gap-2 hover:text-primary"
              >
                <MessageCircle className="h-4 w-4 text-primary" /> WhatsApp
              </a>
              <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-2 hover:text-primary">
                <Mail className="h-4 w-4 text-primary" /> {EMAIL}
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                onClick={() => base44.analytics.track({ eventName: "instagram_klik", properties: { izvor: "upit" } })}
                className="inline-flex items-center gap-2 hover:text-primary"
              >
                <Instagram className="h-4 w-4 text-primary" /> Instagram
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}