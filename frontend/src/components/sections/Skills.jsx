import { skills } from '../../data/siteData.js';
import SectionHeading from '../ui/SectionHeading.jsx';
import Badge from '../ui/Badge.jsx';
import { useScrollReveal } from '../../hooks/useScrollReveal.js';

export default function Skills() {
  const [ref, visible] = useScrollReveal();

  return (
    <section id="skills" className="py-24 border-t border-border">
      <div className="mx-auto max-w-5xl px-6 lg:pl-28">
        <SectionHeading index="02" title="skills" subtitle="Tools reached for most often." />
        <div
          ref={ref}
          className={`grid sm:grid-cols-2 gap-6 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          {skills.map((group) => (
            <div key={group.category} className="rounded-lg border border-border bg-surface p-5">
              <p className="font-mono text-xs uppercase tracking-wider text-add mb-3">
                {group.category}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Badge key={item}>{item}</Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
