import { useState } from 'react';
import { profile } from '../../data/siteData.js';
import SectionHeading from '../ui/SectionHeading.jsx';
import SocialLinks from '../ui/SocialLinks.jsx';

const initialForm = { name: '', email: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = 'Name is required.';
    if (!form.email.trim()) {
      next.email = 'Email is required.';
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      next.email = 'Enter a valid email address.';
    }
    if (!form.message.trim()) next.message = 'Message is required.';
    return next;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const field = (name) => ({
    id: name,
    value: form[name],
    onChange: (e) => setForm((f) => ({ ...f, [name]: e.target.value })),
    'aria-invalid': Boolean(errors[name]),
    'aria-describedby': errors[name] ? `${name}-error` : undefined,
  });

  return (
    <section id="contact" className="py-24 border-t border-border">
      <div className="mx-auto max-w-5xl px-6 lg:pl-28">
        <SectionHeading
          index="05"
          title="contact"
          subtitle="Opens your email client — no backend required."
        />

        <form onSubmit={handleSubmit} noValidate className="max-w-xl space-y-5">
          <div>
            <label htmlFor="name" className="block font-mono text-xs text-muted mb-1.5">
              name
            </label>
            <input
              {...field('name')}
              type="text"
              className="w-full rounded border border-border bg-surface px-3.5 py-2.5 text-ink placeholder:text-muted/60 focus:border-add outline-none"
              placeholder="Ada Lovelace"
            />
            {errors.name && (
              <p id="name-error" className="mt-1 text-xs text-del">{errors.name}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block font-mono text-xs text-muted mb-1.5">
              email
            </label>
            <input
              {...field('email')}
              type="email"
              className="w-full rounded border border-border bg-surface px-3.5 py-2.5 text-ink placeholder:text-muted/60 focus:border-add outline-none"
              placeholder="ada@example.com"
            />
            {errors.email && (
              <p id="email-error" className="mt-1 text-xs text-del">{errors.email}</p>
            )}
          </div>

          <div>
            <label htmlFor="message" className="block font-mono text-xs text-muted mb-1.5">
              message
            </label>
            <textarea
              {...field('message')}
              rows={5}
              className="w-full rounded border border-border bg-surface px-3.5 py-2.5 text-ink placeholder:text-muted/60 focus:border-add outline-none resize-y"
              placeholder="Let's build something."
            />
            {errors.message && (
              <p id="message-error" className="mt-1 text-xs text-del">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="rounded bg-add px-5 py-2.5 text-sm font-semibold text-bg hover:brightness-110 transition"
          >
            send --message
          </button>

          {sent && (
            <p role="status" className="text-sm text-add font-mono">
              Your email client should now be open with the message pre-filled.
            </p>
          )}
        </form>

        <div className="mt-10">
          <SocialLinks />
        </div>
      </div>
    </section>
  );
}
