import type { Resume } from '@/data/resume';

type Props = { resume: Resume };

export default function About({ resume }: Props) {
  const { contact, education } = resume;

  return (
    <section id="about" className="section wrap" data-screen-label="03 About">
      <div className="section-head reveal">
        <div>
          <div className="section-label">01 — Profile</div>
          <h2 className="section-h2">Player Bio</h2>
        </div>
        <div className="section-min">Hometown · {contact.location}</div>
      </div>

      <div className="about-grid">
        {/* Left: bio copy */}
        <div>
          <p className="about-p reveal">
            A full-stack engineer with the engine of a midfielder and the precision
            of a striker. Two years at First American (India) shipping AI products
            end-to-end — from{' '}
            <strong className="text-paper fw-600">React UIs</strong> users actually
            enjoy, to{' '}
            <strong className="text-paper fw-600">Django + Azure</strong> services
            that scale.
          </p>
          <p className="about-p2 reveal" data-delay="1">
            I specialise in turning Generative AI from a demo into a dependable
            production feature. GPT-driven document intelligence, agentic workflows,
            prompt &amp; context engineering, and clean, fast frontends that hold up
            under real load.
          </p>
          <p className="about-p2 reveal" data-delay="2">
            Off the pitch: a hackathon winner, a mentor to 500+ engineers, and a
            relentless football fan who treats every release like a matchday.
          </p>
        </div>

        {/* Right: metadata */}
        <dl className="about-side reveal" data-delay="2">
          <dt className="about-dt">Position</dt>
          <dd className="about-dd">Full-Stack · Software Eng.</dd>

          <dt className="about-dt">Club</dt>
          <dd className="about-dd">First American (India)</dd>

          <dt className="about-dt">Caps</dt>
          <dd className="about-dd">2+ Years</dd>

          <dt className="about-dt">Education</dt>
          <dd className="about-dd">
            {education.degree} · {education.institution.split(' ').slice(0,2).join(' ')} · {education.gpa} GPA
          </dd>

          <dt className="about-dt">Preferred foot</dt>
          <dd className="about-dd">Python / React</dd>

          <dt className="about-dt">Status</dt>
          <dd className="about-dd about-dd-green">Open to offers</dd>
        </dl>
      </div>
    </section>
  );
}
