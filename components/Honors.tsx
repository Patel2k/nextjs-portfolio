import type { Resume } from '@/data/resume';

type Props = { honors: Resume['honors'] };

export default function Honors({ honors }: Props) {
  return (
    <section className="section wrap" data-screen-label="07 Honors">
      <div className="section-head reveal">
        <div>
          <div className="section-label">05 — Honors &amp; Accolades</div>
          <h2 className="section-h2">Awards Cabinet</h2>
        </div>
        <div className="section-min">Recognition · 2023 → 2024</div>
      </div>

      <div className="honors">
        {honors.map(({ num, title, desc }, i) => (
          <div
            key={num}
            className="honor reveal"
            data-delay={String(i % 4) as '0' | '1' | '2' | '3'}
          >
            <div className="honor-num">{num}</div>
            <div>
              <h4 className="honor-h4">{title}</h4>
              <p className="honor-p">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
