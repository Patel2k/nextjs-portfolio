import type { Resume } from '@/data/resume';

type Props = { experience: Resume['experience'] };

export default function Career({ experience }: Props) {
  return (
    <section id="career" className="section wrap" data-screen-label="05 Career">
      <div className="section-head reveal">
        <div>
          <div className="section-label">03 — Match report</div>
          <h2 className="section-h2">Career History</h2>
        </div>
        <div className="section-min">2023 → present · 1 club · 1 hat-trick</div>
      </div>

      <div className="career">
        <aside className="career-side">
          <div>Bangalore, IN</div>
          <div style={{ marginTop: 8 }}>Aug 2023 →</div>
          <div style={{ marginTop: 30, color: 'var(--paper-dim)' }}>Active fixture</div>
        </aside>

        <div>
          {experience.map((job) => (
            <article key={job.company} className="match-card reveal">
              <div className="match-top">
                <div>
                  <div className="match-club">{job.company}</div>
                  <div className="match-role">{job.role}</div>
                </div>
                <div className="match-period">
                  {job.period}
                  {job.live && <div className="match-live">LIVE</div>}
                </div>
              </div>

              <ul className="match-list">
                {job.highlights.map(({ minute, bold, rest }) => (
                  <li key={minute}>
                    <span className="match-minute">{minute}</span>
                    <span>
                      <strong className="text-paper fw-600">{bold}</strong>
                      {rest}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
