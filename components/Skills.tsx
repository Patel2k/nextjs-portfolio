import type { Resume } from '@/data/resume';

type Props = { skills: Resume['skills'] };

export default function Skills({ skills }: Props) {
  return (
    <section id="attributes" className="section wrap" data-screen-label="04 Attributes">
      <div className="section-head reveal">
        <div>
          <div className="section-label">02 — Attributes</div>
          <h2 className="section-h2">Player Stats</h2>
        </div>
        <div className="section-min">Rated 0 → 99 · Career form</div>
      </div>

      <div className="attrs">
        {skills.map(({ name, rating, tags }, i) => (
          <div key={name} className="attr reveal" data-delay={String(i % 3) as '0'|'1'|'2'}>
            <div className="attr-head">
              <span className="attr-name">{name}</span>
              {/* data-skill read by RevealInit to count up */}
              <span className="attr-val" data-skill={String(rating)}>0</span>
            </div>
            <div className="bar">
              {/* data-fill read by RevealInit to set bar width */}
              <div className="bar-fill" data-fill={String(rating)} />
            </div>
            <div className="attr-tags">{tags}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
