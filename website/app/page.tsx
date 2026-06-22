import Image from "next/image";
import Link from "next/link";
import HeroChrome from "@/app/components/HeroChrome";
import ProjectStrip from "@/app/components/ProjectStrip";
import "./home.css";


export default function HomePage() {
  return (
    <main>
      <HeroChrome />

      <section className="hero" aria-label="Hero image">
        <Image
          src="/assets/Webp Project Images/Mirai House of Arches Bhilwara, India.webp"
          alt="Mirai House of Arches, Bhilwara, India"
          fill
          priority
          fetchPriority="high"
          className="hero-img"
        />
      </section>

      <section className="section-two">
        <h1 className="headline">Contextually designed.<br />Sustainably built.</h1>
        <p className="credibility">
          Sanjay Puri Architects has been shaping India&apos;s built environment since 1992.
          With over 500 international awards and projects across 51 cities, the firm approaches
          every project as a response to its climate, culture, and context.
        </p>

        <ProjectStrip />
      </section>

      <hr className="section-rule section-rule--twothird" />

      <section className="section-three">
        <div className="bio-block">
          <p className="bio-copy">
            Sanjay Puri has spent three decades designing buildings. No two are alike.
            Every project begins with the site, and ends as something that could only exist there.
          </p>
        </div>
      </section>

      <hr className="section-rule section-rule--third" />

      <section className="section-four">
        <div className="awards-grid">
          <div className="award-entry">
            <p className="award-title">Overall Sustainable Design Firm of the Year</p>
            <p className="award-body">Architizer A+ Awards</p>
            <p className="award-year">2024</p>
          </div>
          <div className="award-entry">
            <p className="award-title">Best Housing Project Worldwide</p>
            <p className="award-body">World Architecture Festival</p>
            <p className="award-year">2022</p>
          </div>
          <div className="award-entry">
            <p className="award-title">International Architect of the Year</p>
            <p className="award-body">WA100 UK</p>
            <p className="award-year">2024</p>
          </div>
          <div className="award-entry">
            <p className="award-title">Best Residential Project Worldwide</p>
            <p className="award-body">Createurs Design Awards</p>
            <p className="award-year">2023</p>
          </div>
        </div>

        <div className="cta-wrap">
          <Link href="/about" className="cta-btn">Know Us Better</Link>
        </div>
      </section>
      <section className="section-five">
        <div className="contact-box">
          <h2 className="contact-headline">Begin a conversation about<br />your project.</h2>
          <div className="contact-cta">
            <Link href="/contact" className="cta-btn">Contact Us</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
