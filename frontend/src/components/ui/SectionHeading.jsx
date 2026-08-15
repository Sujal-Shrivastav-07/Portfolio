export default function SectionHeading({ index, title, subtitle }) {
  return (
    <div className="mb-10">
      <div className="flex items-baseline gap-3 font-mono text-sm text-muted">
        <span className="text-add">#</span>
        <span>{index}</span>
      </div>
      <h2 className="mt-1 text-3xl sm:text-4xl font-mono font-semibold text-ink tracking-tight">
        {title}
      </h2>
      {subtitle && <p className="mt-2 text-muted max-w-xl">{subtitle}</p>}
    </div>
  );
}
