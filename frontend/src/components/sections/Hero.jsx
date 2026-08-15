import { profile } from '../../data/siteData.js';
import { useTypewriter } from '../../hooks/useTypewriter.js';

export default function Hero() {
  const { output, done } = useTypewriter(`whoami: ${profile.name}`, 40, 300);

  return (
    <section id="hero" className="min-h-screen flex items-center pt-24 pb-16">
      <div className="mx-auto max-w-5xl px-6 lg:pl-28 w-full">
        <div className="max-w-2xl">
          <div className="rounded-lg border border-border bg-surface overflow-hidden shadow-2xl shadow-black/40">
            <div className="flex items-center gap-1.5 border-b border-border px-4 py-2.5 bg-surface2">
              <span className="h-2.5 w-2.5 rounded-full bg-del/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-add/70" />
              <span className="ml-3 font-mono text-xs text-muted">guest@portfolio: ~</span>
            </div>
            <div className="p-6 font-mono text-sm sm:text-base">
              <p className="text-muted">
                <span className="text-add">$</span> {output}
                <span className={done ? 'animate-blink' : 'opacity-0'}>▍</span>
              </p>
              {done && (
                <div className="mt-4 space-y-3 animate-[fadeIn_0.4s_ease]">
                  <p className="text-2xl sm:text-3xl font-semibold text-ink">
                    {profile.role}
                  </p>
                  <p className="text-muted leading-relaxed">{profile.tagline}</p>
                  <p className="text-xs text-muted">location: {profile.location}</p>
                  <div className="flex gap-3 pt-2">
                    <a
                      href="#projects"
                      className="rounded bg-add px-4 py-2 text-xs font-semibold text-bg hover:brightness-110 transition"
                    >
                      view --projects
                    </a>
                    <a
                      href="#contact"
                      className="rounded border border-border px-4 py-2 text-xs text-ink hover:border-add hover:text-add transition"
                    >
                      contact --me
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
