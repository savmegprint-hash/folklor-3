import { Link } from "react-router-dom";
import { Image } from "@/components/ui/image";
import { ArrowRight } from "lucide-react";

export default function ProductCard({ proizvod, kategorijaSlug }) {
  return (
    <Link
      to={`/oprema/${kategorijaSlug}/${proizvod.slug}`}
      className="group block overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-primary/40 hover:shadow-lg"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-muted">
        <Image
          src={proizvod.slika}
          alt={proizvod.alt || proizvod.naziv}
          fittingType="fill"
          className="h-full w-full transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between gap-2">
          <h3 className="font-heading text-lg font-bold tracking-tight">{proizvod.naziv}</h3>
          <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
        </div>
        <p className="mt-1.5 text-sm text-muted-foreground line-clamp-2">{proizvod.kratkiOpis}</p>
      </div>
    </Link>
  );
}