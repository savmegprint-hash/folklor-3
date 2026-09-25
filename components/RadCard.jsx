import { useEffect, useRef, useState } from "react";
import { Image } from "@/components/ui/image";

// Kartica realizacije. Ako `r.slike` sadrži više slika, na hover se automatski
// vrte (crossfade). Inače prikazuje samo `r.slika`.
export default function RadCard({ r }) {
  const slike = r.slike && r.slike.length ? r.slike : [r.slika];
  const [hover, setHover] = useState(false);
  const [idx, setIdx] = useState(0);
  const timer = useRef(null);

  useEffect(() => {
    if (hover && slike.length > 1) {
      timer.current = setInterval(() => {
        setIdx((i) => (i + 1) % slike.length);
      }, 1200);
    }
    return () => clearInterval(timer.current);
  }, [hover, slike.length]);

  useEffect(() => {
    if (!hover) setIdx(0);
  }, [hover]);

  return (
    <div className="group overflow-hidden rounded-xl border border-border bg-card">
      <div
        className="relative aspect-[3/4] overflow-hidden bg-muted"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {slike.map((s, i) => (
          <Image
            key={i}
            src={s}
            alt={r.alt}
            fittingType="fill"
            className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ${
              i === idx ? "opacity-100 scale-[1.04]" : "opacity-0 scale-100"
            }`}
          />
        ))}
        {slike.length > 1 && (
          <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex gap-1.5">
            {slike.map((_, i) => (
              <span
                key={i}
                className={`h-1.5 w-1.5 rounded-full transition-colors ${
                  i === idx ? "bg-white" : "bg-white/40"
                }`}
              />
            ))}
          </div>
        )}
      </div>
      <div className="p-5">
        <p className="text-xs font-semibold uppercase tracking-wide text-primary">{r.kud}</p>
        <h2 className="mt-1.5 font-heading text-lg font-bold">{r.proizvod}</h2>
        <p className="mt-2 text-sm text-muted-foreground">{r.opis}</p>
      </div>
    </div>
  );
}