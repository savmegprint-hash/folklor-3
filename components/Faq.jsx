import { useState } from "react";
import { ChevronDown } from "lucide-react";

// Prezentaciona FAQ komponenta (accordion). JSON-LD FAQPage se gradi u stranici
// i prosleđuje <Seo> komponenti, ovde se prikazuje samo vidljivi sadržaj.
export default function Faq({ items, title = "Često postavljana pitanja" }) {
  const [open, setOpen] = useState(0);
  return (
    <div>
      <h2 className="font-heading text-2xl sm:text-3xl font-extrabold tracking-tight">{title}</h2>
      <div className="mt-6 space-y-3">
        {items.map((q, i) => (
          <div key={i} className="rounded-lg border border-border bg-card overflow-hidden">
            <button
              onClick={() => setOpen(open === i ? -1 : i)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              aria-expanded={open === i}
            >
              <span className="font-medium">{q.pitanje}</span>
              <ChevronDown className={`h-5 w-5 shrink-0 text-primary transition-transform ${open === i ? "rotate-180" : ""}`} />
            </button>
            {open === i && (
              <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">{q.odgovor}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}