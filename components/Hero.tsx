import PlayerCard from './PlayerCard';
import type { Resume } from '@/data/resume';

type Props = { resume: Resume };

export default function Hero({ resume }: Props) {
  const { name, tagline, chips, playerCard, contact } = resume;

  return (
    <header className="wrap hero" data-screen-label="01 Hero">
      {/* ── Left column ── */}
      <div className="hero-left">
        <p className="kicker reveal">
          Full-Stack Software Engineer · {contact.location}
        </p>

        <h1 className="hero-h1 reveal" data-delay="1">
          <span className="stroke">{name.first}</span>
          <br />
          <span className="accent">{name.last}</span>
        </h1>

        <p className="hero-sub reveal" data-delay="2">{tagline}</p>

        <div className="hero-meta reveal" data-delay="3">
          <span className="chip">
            <span className="chip-dot" aria-hidden="true" />
            Available for new fixtures
          </span>
          {chips.map((c) => (
            <span key={c} className="chip">{c}</span>
          ))}
        </div>

        <div className="cta-row reveal" data-delay="4">
          <a className="btn btn-primary" href="#career">
            View highlights <span className="arrow">↗</span>
          </a>
          <a className="btn btn-ghost" href="#contact">
            Get in touch <span className="arrow">↗</span>
          </a>
        </div>
      </div>

      {/* ── Right column — FIFA card ── */}
      <div className="hero-right">
        <PlayerCard card={playerCard} initials={name.initials} />
      </div>

      {/* scroll cue */}
      <div className="scroll-hint" aria-hidden="true">Scroll</div>
    </header>
  );
}
