import { experience, profile } from '../../data/siteData.js';
import SectionHeading from '../ui/SectionHeading.jsx';
import { useScrollReveal } from '../../hooks/useScrollReveal.js';

const githubUsername = profile.github.split('/').filter(Boolean).pop();

export default function Experience() {
  const [ref, visible] = useScrollReveal();

  return (
    <section id="experience" className="py-24 border-t border-border">
      <div className="mx-auto max-w-5xl px-6 lg:pl-28">
        <SectionHeading index="04" title="experience" />
        <div
          ref={ref}
          className={`space-y-6 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          {experience.map((item) => (
            <div key={item.id} className="border-l-2 border-border pl-5 relative">
              <span className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full bg-add" />
              <p className="font-mono text-xs text-muted">{item.period}</p>
              <h3 className="mt-1 text-lg font-semibold text-ink">
                {item.role} <span className="text-muted font-normal">· {item.org}</span>
              </h3>
              <p className="mt-1 text-sm text-muted leading-relaxed">{item.summary}</p>
            </div>
          ))}
        </div>

        <div
          className={`mt-10 rounded-lg border border-border bg-surface p-5 transition-all duration-700 delay-150 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <p className="font-mono text-xs uppercase tracking-wider text-add mb-3">
            GitHub Activity
          </p>
          <img
            src={`https://ghchart.rshah.org/5fd97a/${githubUsername}`}
            alt={`GitHub contribution graph for ${githubUsername}`}
            className="w-full h-auto"
            loading="lazy"
          />
          <p className="mt-2 text-xs text-muted">
            Swap <code className="font-mono">profile.github</code> in siteData.js and this
            updates automatically.
          </p>
        </div>
      </div>
    </section>
  );
}
