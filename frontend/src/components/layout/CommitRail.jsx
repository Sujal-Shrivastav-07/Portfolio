import { sections } from '../../data/siteData.js';
import { useScrollProgress } from '../../hooks/useScrollProgress.js';
import { useActiveSection } from '../../hooks/useActiveSection.js';

const sectionIds = sections.map((s) => s.id);

/**
 * Signature element: a vertical "commit log" rail.
 * Each section is rendered as a commit — a short hash, a dot on the
 * timeline, and a label — and the rail fills in like `git log --graph`
 * as the reader scrolls through the page's history.
 */
export default function CommitRail() {
  const progress = useScrollProgress();
  const activeId = useActiveSection(sectionIds);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      aria-label="Section navigation"
      className="hidden lg:flex fixed left-8 top-0 h-screen flex-col justify-center z-40"
    >
      <div className="relative pl-6">
        {/* base line */}
        <div className="absolute left-[7px] top-0 bottom-0 w-px bg-border" />
        {/* fill line, tracks page scroll progress */}
        <div
          className="absolute left-[7px] top-0 w-px bg-add transition-[height] duration-150"
          style={{ height: `${progress * 100}%` }}
          aria-hidden="true"
        />

        <ul className="flex flex-col gap-8">
          {sections.map((section, i) => {
            const isActive = section.id === activeId;
            const hash = commitHash(i);
            return (
              <li key={section.id} className="relative">
                <button
                  onClick={() => scrollTo(section.id)}
                  aria-current={isActive ? 'true' : undefined}
                  className="group flex items-center gap-3 text-left"
                >
                  <span
                    className={`relative z-10 block h-[15px] w-[15px] rounded-full border-2 transition-colors ${
                      isActive
                        ? 'bg-add border-add'
                        : 'bg-bg border-border group-hover:border-add'
                    }`}
                  />
                  <span className="flex flex-col leading-tight">
                    <span
                      className={`font-mono text-xs transition-colors ${
                        isActive ? 'text-add' : 'text-muted group-hover:text-ink'
                      }`}
                    >
                      {hash}
                    </span>
                    <span
                      className={`font-mono text-sm transition-colors ${
                        isActive ? 'text-ink' : 'text-muted group-hover:text-ink'
                      }`}
                    >
                      {section.label}
                    </span>
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

/** Deterministic short pseudo-hash, purely decorative, git-log flavor. */
function commitHash(seed) {
  const chars = 'abcdef0123456789';
  let hash = '';
  let n = (seed + 1) * 2654435761;
  for (let i = 0; i < 7; i += 1) {
    n = (n * 16807) % 2147483647;
    hash += chars[Math.abs(n) % chars.length];
  }
  return hash;
}
