import Nav          from '@/components/Nav';
import Hero         from '@/components/Hero';
import StatsStrip   from '@/components/StatsStrip';
import About        from '@/components/About';
import Skills       from '@/components/Skills';
import Career       from '@/components/Career';
import Projects     from '@/components/Projects';
import Honors       from '@/components/Honors';
import Contact      from '@/components/Contact';
import Footer       from '@/components/Footer';
import RevealInit   from '@/components/RevealInit';
import { resume }   from '@/data/resume';

export default function Home() {
  return (
    <>
      {/* Animated pitch-line background */}
      <div className="pitch-bg" aria-hidden="true" />

      <Nav />

      <main>
        <Hero        resume={resume}              />
        <StatsStrip  stats={resume.stats}         />
        <About       resume={resume}              />
        <Skills      skills={resume.skills}       />
        <Career      experience={resume.experience} />
        <Projects    projects={resume.projects}   />
        <Honors      honors={resume.honors}       />
        <Contact     contact={resume.contact}     />
      </main>

      <Footer />

      {/*
        Client-only island — mounts IntersectionObserver for reveals,
        counters, skill bars, and the card tilt effect.
      */}
      <RevealInit />
    </>
  );
}
