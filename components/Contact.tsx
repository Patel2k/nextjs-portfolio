import type { Resume } from '@/data/resume';

type Props = { contact: Resume['contact'] };

const links = (c: Props['contact']) => [
  { href: `mailto:${c.email}`,  label: `✉ ${c.email}`       },
  { href: c.linkedin,           label: 'in · LinkedIn',  target: '_blank' },
  { href: c.github,             label: '⌥ GitHub',       target: '_blank' },
  { href: `tel:${c.phone.replace(/\s/g,'')}`, label: `☏ ${c.phone}` },
];

export default function Contact({ contact }: Props) {
  return (
    <section id="contact" className="contact-section" data-screen-label="08 Contact">
      <div className="wrap">
        <div className="section-label reveal">06 — Transfer window open</div>

        <h2 className="contact-h2 reveal" data-delay="1">
          Ready to <span className="accent">ship</span> the<br />
          next big thing.
        </h2>

        <p className="contact-lead reveal" data-delay="2">
          If you&apos;re building something ambitious with AI, the web, or both — I&apos;d
          love to talk. Quick to respond, faster to deliver.
        </p>

        <div className="contact-links reveal" data-delay="3">
          {links(contact).map(({ href, label, target }) => (
            <a
              key={href}
              href={href}
              target={target}
              rel={target === '_blank' ? 'noopener noreferrer' : undefined}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
