import type { Resume } from '@/data/resume';

type Props = { card: Resume['playerCard']; initials: string };

export default function PlayerCard({ card, initials }: Props) {
  return (
    <div className="player-card">
      <div className="card-inner">
        {/* top row */}
        <div className="card-top">
          <div>
            <div className="card-rating">{card.rating}</div>
            <div className="card-pos">{card.position}</div>
          </div>
          <div className="card-emblems">
            <div className="emblem emblem-flag" title="India" aria-label="India" />
            <div className="emblem">FA·IN</div>
          </div>
        </div>

        {/* monogram portrait */}
        <div className="card-portrait">
          <div className="portrait-monogram">
            <span>{initials}</span>
          </div>
        </div>

        {/* name bar */}
        <div className="card-name">AJAY PATEL</div>

        {/* stat grid */}
        <div className="card-stats">
          {card.stats.map(({ val, lbl }) => (
            <div key={lbl} className="stat-pair">
              <span className="stat-val">{val}</span>
              <span className="stat-lbl">{lbl}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
