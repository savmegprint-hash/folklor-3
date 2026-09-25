export default function FolklorMotif({ className = "h-6 w-6" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 2l3.2 3.2L12 8.4 8.8 5.2 12 2z" />
      <path d="M12 15.6l3.2 3.2L12 22l-3.2-3.2 3.2-3.2z" />
      <path d="M2 12l3.2-3.2L8.4 12l-3.2 3.2L2 12z" />
      <path d="M15.6 12l3.2-3.2L22 12l-3.2 3.2-3.2-3.2z" />
      <path d="M12 9.2L14.8 12 12 14.8 9.2 12 12 9.2z" />
    </svg>
  );
}