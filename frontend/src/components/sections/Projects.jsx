import { projects } from '../../data/siteData.js';
import SectionHeading from '../ui/SectionHeading.jsx';
import Badge from '../ui/Badge.jsx';
import { useScrollReveal } from '../../hooks/useScrollReveal.js';

export default function Projects() {
  const [ref, visible] = useScrollReveal();

  return (
    <section id="projects" className="py-24 border-t border-border">
      <div className="mx-auto max-w-5xl px-6 lg:pl-28">
        <SectionHeading index="03" title="projects" subtitle="A few things I've shipped." />
        <div
          ref={ref}
          className={`grid sm:grid-cols-2 gap-5 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          {projects.map((project) => (
            <article
              key={project.id}
              className="group rounded-lg border border-border bg-surface p-5 hover:border-add transition-colors"
            >
              <h3 className="font-mono text-lg font-semibold text-ink group-hover:text-add transition-colors">
                {project.name}
              </h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </div>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-block font-mono text-xs text-muted hover:text-add underline decoration-border underline-offset-4 hover:decoration-add transition-colors"
                >
                  view source →
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
