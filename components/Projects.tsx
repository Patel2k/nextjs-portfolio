import type { Resume } from '@/data/resume';

type Props = { projects: Resume['projects'] };

const icons = [
  // Trophy icon
  <svg key="trophy" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M7 4h10v2h3v3a4 4 0 0 1-4 4 5 5 0 0 1-4 3v2h3v2H9v-2h3v-2a5 5 0 0 1-4-3 4 4 0 0 1-4-4V6h3V4Zm0 4H6v1a2 2 0 0 0 1 1.7V8Zm10 0v2.7A2 2 0 0 0 18 9V8h-1Z" />
  </svg>,
  // Document icon
  <svg key="doc" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M6 3h9l5 5v13H6V3Zm8 1.5V9h4.5L14 4.5ZM9 13h6v1.5H9V13Zm0 3h6v1.5H9V16Z" />
  </svg>,
];

export default function Projects({ projects }: Props) {
  return (
    <section id="trophies" className="section wrap" data-screen-label="06 Trophies">
      <div className="section-head reveal">
        <div>
          <div className="section-label">04 — Trophy cabinet</div>
          <h2 className="section-h2">Featured Projects</h2>
        </div>
        <div className="section-min">Shipped &amp; in production</div>
      </div>

      <div className="trophies">
        {projects.map(({ title, meta, description, highlight, stack }, i) => (
          <article key={title} className="trophy reveal" data-delay={i === 0 ? '0' : '1'}>
            <div className="trophy-icon">{icons[i % icons.length]}</div>
            <div className="trophy-meta">{meta}</div>
            <h3 className="trophy-h3">{title}</h3>
            <p className="trophy-p">
              {description.split(highlight).map((part, j, arr) =>
                j < arr.length - 1 ? (
                  <span key={j}>
                    {part}
                    <strong className="trophy-highlight">{highlight}</strong>
                  </span>
                ) : (
                  <span key={j}>{part}</span>
                )
              )}
            </p>
            <div className="trophy-stack">
              {stack.map((s) => (
                <span key={s}>{s}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
