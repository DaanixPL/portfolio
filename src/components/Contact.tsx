import './Contact.css';

interface ContactLink {
  label: string;
  value: string;
  href: string;
  icon: React.ReactNode;
  external?: boolean;
}

function GitHubIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function FiverrIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23 9h-1c0-3.866-3.134-7-7-7v-1c0-.552-.447-1-1-1s-1 .448-1 1v1c-3.866 0-7 3.134-7 7h-1c-.552 0-1 .448-1 1s.448 1 1 1h1v3c0 3.309 2.691 6 6 6v2c0 .552.448 1 1 1s1-.448 1-1v-2c3.309 0 6-2.691 6-6v-3h1c.553 0 1-.448 1-1s-.447-1-1-1z"/>
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M2 7l10 7 10-7" />
    </svg>
  );
}

function DiscordIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
    </svg>
  );
}

const CONTACTS: ContactLink[] = [
  {
    label: 'GitHub',
    value: '@DaanixPL',
    href: 'https://github.com/DaanixPL',
    icon: <GitHubIcon />,
    external: true,
  },
  {
    label: 'Fiverr',
    value: 'fiverr.com/daanix',
    href: 'https://www.fiverr.com/daanix',
    icon: <FiverrIcon />,
    external: true,
  },
  {
    label: 'Email',
    value: 'vdanix.contact@gmail.com',
    href: 'mailto:vdanix.contact@gmail.com',
    icon: <EmailIcon />,
  },
  {
    label: 'Discord',
    value: 'Coming soon…',
    href: '#',
    icon: <DiscordIcon />,
    // TODO: Add Discord link
  },
];

export default function Contact() {
  return (
    <section className="contact section" id="contact">
      <div className="container">
        <p className="section-label">Contact</p>
        <h2 className="section-title">Get in Touch</h2>
        <p className="contact__sub">
          Available for freelance work. Reach out through any of the channels below.
        </p>

        <div className="contact__grid">
          {CONTACTS.map((c) => (
            <a
              key={c.label}
              href={c.href}
              className={`contact__card${c.href === '#' ? ' contact__card--disabled' : ''}`}
              {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              aria-label={`${c.label}: ${c.value}`}
            >
              <span className="contact__card-icon">{c.icon}</span>
              <span className="contact__card-label">{c.label}</span>
              <span className="contact__card-value">{c.value}</span>
              {c.label === 'Discord' && (
                <span className="contact__soon">Soon</span>
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
