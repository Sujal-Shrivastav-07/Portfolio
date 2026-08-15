import { profile } from '../../data/siteData.js';

export default function SocialLinks({ className = '' }) {
  const links = [
    { label: 'GitHub', href: profile.github },
    { label: 'LinkedIn', href: profile.linkedin },
    { label: 'Email', href: `mailto:${profile.email}` },
  ];

  return (
    <ul className={`flex flex-wrap gap-4 font-mono text-sm ${className}`}>
      {links.map((link) => (
        <li key={link.label}>
          <a
            href={link.href}
            className="text-muted hover:text-add transition-colors underline decoration-border underline-offset-4 hover:decoration-add"
            target={link.href.startsWith('http') ? '_blank' : undefined}
            rel="noreferrer"
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
