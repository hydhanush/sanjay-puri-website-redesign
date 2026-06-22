import Image from "next/image";
import "./about.css";

export default function AboutPage() {
  return (
    <main className="about-page">

      <section className="about-hero" aria-label="About hero">
        <h1 className="about-hero-name">Sanjay Puri</h1>
      </section>

      <section className="bio-section" aria-label="About Sanjay Puri">
        <div className="bio-grid">
          <div className="bio-portrait-wrap">
            <Image
              src="/assets/About Us/Sanjay-Puri-1.webp"
              alt="Sanjay Puri"
              fill
              priority
              className="bio-portrait-img"
              sizes="(max-width: 768px) 100vw, 45vw"
            />
          </div>
          <div className="bio-text">
            <div className="bio-item">
              <h2 className="bio-item-heading">Fountainhead</h2>
              <p className="bio-item-body">
                At sixteen, Sanjay Puri read The Fountainhead and decided he
                would be an architect.
              </p>
            </div>
            <div className="bio-item">
              <h2 className="bio-item-heading">Hafeez Contractor&apos;s Office</h2>
              <p className="bio-item-body">
                Before applying to college, he joined Hafeez Contractor&apos;s
                office as a summer intern at eighteen, the fourth person ever
                hired there. He continued working through all five years of
                school.
              </p>
            </div>
            <div className="bio-item">
              <h2 className="bio-item-heading">Hands On Learning</h2>
              <p className="bio-item-body">
                By the time he sat for his architecture college interview, he had
                visited every construction site in south Bombay and could read
                every kind of drawing.
              </p>
            </div>
            <div className="bio-item">
              <h2 className="bio-item-heading">Founding Own Practice</h2>
              <p className="bio-item-body">
                He founded his own practice in 1992 at twenty-seven.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bio-section" aria-label="The practice">
        <div className="bio-grid">
          <div className="bio-portrait-wrap bio-portrait-wrap--tall">
            <Image
              src="/assets/About Us/Sanjay-Puri-2.webp"
              alt="Sanjay Puri"
              fill
              className="bio-portrait-img"
              sizes="(max-width: 768px) 100vw, 45vw"
            />
          </div>
          <div className="bio-text">
            <div className="bio-item">
              <h2 className="bio-item-heading">No PR</h2>
              <p className="bio-item-body">
                Three decades on, the practice does no PR and no publicity. No
                marketing, no agency.
              </p>
            </div>
            <div className="bio-item">
              <h2 className="bio-item-heading">Recognition</h2>
              <p className="bio-item-body">
                He has sat on the jury of the World Architecture Festival in
                Barcelona, Singapore, Berlin, Amsterdam, and Lisbon, the first
                Indian architect ever to do so.
              </p>
            </div>
            <div className="bio-item">
              <h2 className="bio-item-heading">The Practice</h2>
              <p className="bio-item-body">
                The awards number in the hundreds. And every morning, before
                anything goes to his team, he still spends two hours sketching
                the design himself. He has not changed that.
              </p>
            </div>
            <div className="bio-item">
              <h2 className="bio-item-heading">The Source</h2>
              <p className="bio-item-body">
                On Howard Roark, the protagonist of the book that started all of
                this: &ldquo;He did what he felt the site spoke to him about.
                We try and do that.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      <hr className="principles-rule" />
      <section className="principles-section" aria-label="How we build">
        <p className="principles-label">How We Build?</p>
        <h2 className="principles-statement">
          The exploration of spaces that successfully engage people whilst being
          sustainable and contextual.
        </h2>
        <div className="principles-list">
          <div className="principles-item">
            <h3 className="principles-item-heading">Context</h3>
            <p className="principles-item-body">
              Every project begins with the site. Climate, culture, and
              surroundings are not constraints to design around. They are the
              brief. The building that results could only exist in that place.
            </p>
          </div>
          <div className="principles-item">
            <h3 className="principles-item-heading">Sustainability</h3>
            <p className="principles-item-body">
              Passive cooling, natural light, local materials, sun and wind
              orientation. These are not features added at the end. They are
              built into how the building is oriented from the start.
            </p>
          </div>
          <div className="principles-item">
            <h3 className="principles-item-heading">Experience</h3>
            <p className="principles-item-body">
              Buildings are meant to be felt and moved through, not only looked
              at. Changing light, temperature, compression, and expansion are
              tools. The test of a building is whether someone walking through
              it feels exactly what was intended.
            </p>
          </div>
        </div>
      </section>

    </main>
  );
}
