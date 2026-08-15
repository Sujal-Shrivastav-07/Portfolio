export default function Badge({ children }) {
  return (
    <span className="inline-block rounded border border-border bg-surface px-2.5 py-1 text-xs font-mono text-muted">
      {children}
    </span>
  );
}
