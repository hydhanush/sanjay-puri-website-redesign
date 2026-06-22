import Image from "next/image";
import NoticeBar from "./NoticeBar";
import "./courtyard-house.css";

export default function CourtardHousePage({ notice }: { notice?: string }) {
  return (
    <main className="project-detail">

      {notice && <NoticeBar message={notice} />}

      {/* HERO */}
      <section className="pd-hero" aria-label="The Courtyard House hero image">
        <Image
          src="/assets/Courtyard House/hero.webp"
          alt="The Courtyard House, Nokha, Rajasthan — aerial view"
          fill
          priority
          fetchPriority="high"
          className="pd-image-img"
          sizes="100vw"
        />
      </section>

      {/* PROJECT META */}
      <section className="pd-meta" aria-label="Project information">
        <h1 className="pd-meta-title">The Courtyard House</h1>
        <div className="pd-meta-info">
          <p className="pd-meta-line">Nokha, Rajasthan, India</p>
          <p className="pd-meta-line">Completed 2011</p>
          <p className="pd-meta-line">Residential house, multiple bedrooms across two floors</p>
        </div>
      </section>

      {/* CONTENT BODY */}
      <div className="pd-body">

        {/* Image 1 */}
        <div className="pd-image-full">
          <Image
            src="/assets/Courtyard House/img-1.webp"
            alt="The Courtyard House — interior corridor"
            fill
            className="pd-image-img"
            sizes="100vw"
          />
        </div>

        {/* Climate */}
        <div className="pd-section-text">
          <h2 className="pd-section-label">Climate</h2>
          <p className="pd-section-body">
            Rajasthan summers reach 45 degrees Celsius. The site borders a cement plant.
            Form, material, and orientation are all direct responses to the location and surroundings.
          </p>
        </div>

        {/* Image 2 */}
        <div className="pd-image-full pd-image-full--sm">
          <Image
            src="/assets/Courtyard House/img-2.webp"
            alt="The Courtyard House — shaded corridor"
            fill
            className="pd-image-img"
            sizes="100vw"
          />
        </div>

        {/* Typology */}
        <div className="pd-section-text">
          <h2 className="pd-section-label">Typology</h2>
          <p className="pd-section-body">
            The layout draws from the traditional Indian courtyard house, a model refined
            over centuries for this climate. Open courtyards draw air through, recessed
            openings shade the interior, and earth mounds block heat while providing
            occupants with privacy.
          </p>
        </div>

        {/* Image 3 */}
        <div className="pd-image-full pd-image-full--lg">
          <Image
            src="/assets/Courtyard House/img-3.webp"
            alt="The Courtyard House — exterior with landscape"
            fill
            className="pd-image-img"
            sizes="100vw"
          />
        </div>

        {/* Image 4 */}
        <div className="pd-image-full pd-image-full--md">
          <Image
            src="/assets/Courtyard House/img-4.webp"
            alt="The Courtyard House — front facade"
            fill
            className="pd-image-img"
            sizes="100vw"
          />
        </div>

        {/* Material */}
        <div className="pd-section-text">
          <h2 className="pd-section-label">Material</h2>
          <p className="pd-section-body">
            Concrete was not chosen for appearance. The adjacent cement plant made it the
            most accessible and lowest-impact material on site. Its thermal mass absorbs
            heat through the day and releases it slowly at night, keeping the interior
            significantly cooler than outside.
          </p>
        </div>

        {/* Image 5 — portrait */}
        <div className="pd-image-full pd-image-full--portrait pd-image-full--lg">
          <Image
            src="/assets/Courtyard House/img-5.webp"
            alt="The Courtyard House — courtyard with outdoor seating"
            fill
            className="pd-image-img"
            sizes="100vw"
          />
        </div>

        {/* Image 6 */}
        <div className="pd-image-full">
          <Image
            src="/assets/Courtyard House/img-6.webp"
            alt="The Courtyard House — interior concrete detail"
            fill
            className="pd-image-img"
            sizes="100vw"
          />
        </div>

      </div>

      {/* AWARDS */}
      <section className="pd-awards" aria-label="Awards">
<div className="pd-awards-grid">
          <div className="pd-award">
            <h3 className="pd-award-title">Best Future Building of the Year</h3>
            <p className="pd-award-detail">World Architecture Festival</p>
            <p className="pd-award-detail">Reservoir</p>
            <p className="pd-award-detail">2015</p>
          </div>
          <div className="pd-award">
            <h3 className="pd-award-title">Cannes — Overall Winner</h3>
            <p className="pd-award-detail">MIPIM Architectural Review Future Projects</p>
            <p className="pd-award-detail">Sky Courts</p>
            <p className="pd-award-detail">2016</p>
          </div>
        </div>
      </section>

    </main>
  );
}
