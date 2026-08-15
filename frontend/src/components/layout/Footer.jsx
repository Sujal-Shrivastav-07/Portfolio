import { profile } from '../../data/siteData.js';
import SocialLinks from '../ui/SocialLinks.jsx';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-5xl px-6 lg:pl-28 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="font-mono text-xs text-muted">
          © {year} {profile.name} · built with React, Tailwind &amp; Docker
        </p>
        <SocialLinks />
      </div>
    </footer>
  );
}
