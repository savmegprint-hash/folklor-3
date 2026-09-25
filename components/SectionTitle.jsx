import FolklorBand from "@/components/FolklorBand";

export default function SectionTitle({ overline, title, subtitle, center = true, dark = false }) {
  return (
    <div className={`${center ? "text-center mx-auto" : "text-left"} max-w-2xl ${center ? "" : ""}`}>
      {overline && (
        <p className={`text-xs font-semibold uppercase tracking-[0.2em] ${dark ? "text-primary" : "text-primary"} mb-3`}>
          {overline}
        </p>
      )}
      <h2 className={`font-heading text-3xl sm:text-4xl font-extrabold tracking-tight ${dark ? "text-white" : "text-foreground"}`}>
        {title}
      </h2>
      {center && <FolklorBand className="mt-5" />}
      {subtitle && (
        <p className={`mt-4 text-base leading-relaxed ${dark ? "text-white/70" : "text-muted-foreground"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}