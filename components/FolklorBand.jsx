// Subtilan folklor ornament — koristi se kao tanka horizontalna linija / divider
export default function FolklorBand({ className = "" }) {
  return (
    <div className={`flex items-center justify-center gap-2 text-primary ${className}`} aria-hidden="true">
      <span className="h-px w-12 bg-primary/30" />
      <svg viewBox="0 0 24 8" className="h-2 w-6" fill="currentColor">
        <path d="M12 0l3 4-3 4-3-4 3-4z" />
      </svg>
      <span className="h-px w-12 bg-primary/30" />
    </div>
  );
}