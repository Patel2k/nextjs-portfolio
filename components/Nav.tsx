import Link from 'next/link';

const links = [
  { num: '01', label: 'About',    href: '#about'    },
  { num: '02', label: 'Stats',    href: '#stats'    },
  { num: '03', label: 'Career',   href: '#career'   },
  { num: '04', label: 'Trophies', href: '#trophies' },
  { num: '05', label: 'Sign me',  href: '#contact'  },
];

const LinkItems = () => (
  <>
    {links.map(({ num, label, href }) => (
      <li key={href}>
        <a href={href}>
          <span className="num">{num}</span>
          {label}
        </a>
      </li>
    ))}
  </>
);

export default function Nav() {
  return (
    <nav className="nav">
      <Link href="/" className="nav-brand">
        <div className="nav-dot" aria-hidden="true" />
        AJAY PATEL <small>K.A.</small>
      </Link>

      {/* Desktop nav */}
      <ul className="nav-links" role="list">
        <LinkItems />
      </ul>

      {/* Mobile hamburger — pure HTML, no JS needed */}
      <details className="nav-menu">
        <summary className="nav-burger" aria-label="Open navigation">
          <span />
          <span />
          <span />
        </summary>
        <div className="nav-dropdown">
          <ul role="list">
            <LinkItems />
          </ul>
        </div>
      </details>
    </nav>
  );
}
