import { about } from '../../data/siteData.js';
import SectionHeading from '../ui/SectionHeading.jsx';
import { useScrollReveal } from '../../hooks/useScrollReveal.js';

export default function About() {
  const [ref, visible] = useScrollReveal();

  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-5xl px-6 lg:pl-28">
        <SectionHeading index="01" title="about" />
        <div
          ref={ref}
          className={`max-w-2xl space-y-4 text-lg text-ink/90 leading-relaxed transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          {about.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
