import { profile } from '../../data/siteData.js';

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-border bg-bg/80 backdrop-blur">
      <div className="mx-auto max-w-5xl px-6 lg:pl-28 py-4 flex items-center justify-between">
        <a href="#hero" className="font-mono text-sm text-ink">
          <span className="text-add">~/</span>{profile.name.toLowerCase().replace(/\s+/g, '-')}
        </a>
        <a
          href={profile.resumeUrl}
          className="font-mono text-xs border border-border rounded px-3 py-1.5 text-muted hover:text-add hover:border-add transition-colors"
          download
        >
          Resume
        </a>
      </div>
    </header>
  );
}
