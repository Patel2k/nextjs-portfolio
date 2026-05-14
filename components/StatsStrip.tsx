import type { Resume } from '@/data/resume';

type Props = { stats: Resume['stats'] };

export default function StatsStrip({ stats }: Props) {
  return (
    <section id="stats" className="wrap" style={{ paddingTop: 40, paddingBottom: 40 }} data-screen-label="02 Stats">
      <div className="stats-strip">
        {stats.map(({ target, unit, label }, i) => (
          <div key={label} className="stat-cell reveal" data-delay={String(i) as '0' | '1' | '2' | '3'}>
            <div className="stat-num">
              <span className="counter" data-target={String(target)}>0</span>
              <span className="stat-unit">{unit}</span>
            </div>
            <div className="stat-label">{label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
